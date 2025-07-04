'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Building, Cpu, Mail, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface HeaderProps {
  isAuthenticated?: boolean;
  onSignIn?: () => void;
  onSignUp?: () => void;
  onSignOut?: () => void;
  useFullPageAuth?: boolean; 
}

export default function Header({ isAuthenticated = false, onSignIn, onSignUp, onSignOut, useFullPageAuth = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aboutDropdownItems = [
    { label: 'Who We Are', href: '/about#who-we-are' },
    { label: 'What We Do', href: '/about#what-we-do' },
    { label: 'Mission, Vision & Core Values', href: '/about#mission-vision' },
  ];

  const servicesDropdownItems = [
    { label: 'BIM Services', href: '/services/bim', icon: Building },
    { label: 'CAD Services', href: '/services/cad', icon: Cpu },
  ];

  const handleDropdownClick = (e: React.MouseEvent, dropdownType: string) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdownType ? null : dropdownType);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActivePage = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const NavLink = ({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) => {
    const isActive = isActivePage(href);
    return (
      <Link 
        href={href} 
        className={cn(
          "relative font-medium transition-colors",
          isActive 
            ? "text-orange-600" 
            : "text-gray-700 hover:text-blue-600",
          className
        )}
      >
        {children}
        {isActive && (
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-600 rounded-full" />
        )}
      </Link>
    );
  };

  return (
    <header className={cn(
      'fixed top-0 z-50 transition-all duration-500 ease-in-out bg-white/95 backdrop-blur-sm border-b border-gray-200',
      scrolled 
        ? 'py-4 px-8 shadow-lg left-0 right-0' // When scrolled - extends full width
        : 'py-2 px-16 left-4 right-4 mt-6 rounded-lg shadow-md' // Initial state - extends almost full width with small gaps
    )}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity pl-4 pr-6 py-2">
        <Image
          src="/Arcade-modified.png"
          alt="Arcade Atelier Logo"
          width={scrolled ? 120 : 168}
          height={scrolled ? 64 : 80}
          className="object-contain transition-all duration-300"
          priority // This logo loads first
        />
        </Link>

        {/* Desktop Navigation */}
        <nav className={cn(
          "hidden lg:flex items-center transition-all duration-300",
          scrolled ? "space-x-6" : "space-x-8" // More spacing initially
        )}>
          <NavLink href="/">
            Home
          </NavLink>
          
          {/* About Us Dropdown */}
          <div className="relative">
            <div className="flex items-center">
              <NavLink href="/about" className="mr-1">
                About Us
              </NavLink>
              <button 
                onClick={(e) => handleDropdownClick(e, 'about')}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors p-1"
              >
                <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === 'about' && "rotate-180")} />
              </button>
            </div>
            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {aboutDropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative">
            <div className="flex items-center">
              <NavLink href="/services" className="mr-1">
                Services
              </NavLink>
              <button 
                onClick={(e) => handleDropdownClick(e, 'services')}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors p-1"
              >
                <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === 'services' && "rotate-180")} />
              </button>
            </div>
            {activeDropdown === 'services' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {servicesDropdownItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <NavLink href="/news">
            News
          </NavLink>
          
          {isAuthenticated && (
            <NavLink href="/dashboard">
              Dashboard
            </NavLink>
          )}
          
          <NavLink href="/contact">
            Contact Us
          </NavLink>
        </nav>

        {/* Social Icons & Auth */}
        <div className={cn(
          "hidden lg:flex items-center transition-all duration-300",
          scrolled ? "space-x-3" : "space-x-4" // More spacing initially
        )}>
          <Link 
            href="https://www.linkedin.com/in/robin-sah-9b93b1214/" 
            target="_blank"
            className={cn(
              "text-gray-600 hover:text-blue-600 transition-colors rounded-lg",
              scrolled ? "p-1" : "p-2" // More padding initially
            )}
          >
            <ExternalLink className="w-5 h-5" />
          </Link>
          <Link 
            href="mailto:info@thearcadeatelier.com"
            className={cn(
              "text-gray-600 hover:text-orange-600 transition-colors rounded-lg",
              scrolled ? "p-1" : "p-2" // More padding initially
            )}
          >
            <Mail className="w-5 h-5" />
          </Link>
          
          {!isAuthenticated ? (
            <div className={cn(
              "flex items-center transition-all duration-300",
              scrolled ? "space-x-2" : "space-x-3" // More spacing initially
            )}>
              <button
                onClick={onSignIn}
                className={cn(
                  "text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium",
                  scrolled ? "px-3 py-2 text-sm" : "px-4 py-2.5 text-base" // Bigger buttons initially
                )}
              >
                Log In
              </button>
              <button
                onClick={onSignUp}
                className={cn(
                  "bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium",
                  scrolled ? "px-3 py-2 text-sm" : "px-4 py-2.5 text-base" // Bigger buttons initially
                )}
              >
                Get Started
              </button>
            </div>
          ) : (
            <button
              onClick={onSignOut}
              className={cn(
                "text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium",
                scrolled ? "px-3 py-2 text-sm" : "px-4 py-2.5 text-base"
              )}
            >
              Sign Out
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "lg:hidden rounded-lg transition-all duration-300",
            scrolled ? "p-1" : "p-2"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 bg-white border-t border-gray-200 rounded-b-lg">
          <div className="px-4 py-6 space-y-4">
            <NavLink href="/" className="block">
              Home
            </NavLink>
            
            <div className="space-y-2">
              <NavLink href="/about" className="block">
                About Us
              </NavLink>
              <div className="pl-4 space-y-2">
                {aboutDropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <NavLink href="/services" className="block">
                Services
              </NavLink>
              <div className="pl-4 space-y-2">
                {servicesDropdownItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <NavLink href="/news" className="block">
              News
            </NavLink>
            
            {isAuthenticated && (
              <NavLink href="/dashboard" className="block">
                Dashboard
              </NavLink>
            )}
            
            <NavLink href="/contact" className="block">
              Contact Us
            </NavLink>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <Link 
                  href="https://www.linkedin.com/in/robin-sah-9b93b1214/" 
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
                <Link 
                  href="mailto:info@thearcadeatelier.com"
                  className="text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
              
              {!isAuthenticated ? (
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      onSignIn?.();
                      closeMobileMenu();
                    }}
                    className="w-full px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-left"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      onSignUp?.();
                      closeMobileMenu();
                    }}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Sign Up
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    onSignOut?.();
                    closeMobileMenu();
                  }}
                  className="w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left"
                >
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={closeDropdowns}
        />
      )}
    </header>
  );
}
