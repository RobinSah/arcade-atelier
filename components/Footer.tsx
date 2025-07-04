'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUp, Mail, ExternalLink, Building, Award, Shield, CheckCircle, AlertCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to subscribe');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AA</span>
              </div>
              <span className="font-bold text-lg">Arcade Atelier</span>
            </div>
            <p className="text-gray-300 text-sm">
              Engineering with purpose and passion. Delivering high-quality BIM and CAD solutions for architecture, engineering, and construction.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://www.linkedin.com/in/robin-sah-9b93b1214/" 
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </Link>
              <Link 
                href="mailto:info@thearcadeatelier.com"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">News</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">
                <strong>Email:</strong> info@thearcadeatelier.com
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Phone:</strong> +1 571-604-9012
              </p>
            </div>
            
            {/* Certification Placeholders */}
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Certifications</h4>
              <div className="flex space-x-2">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-gray-400" />
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gray-400" />
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-gray-300 text-sm">
              Sign up to get latest updates and insights from our team.
            </p>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="p-3 bg-green-800 border border-green-600 rounded-lg flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <p className="text-green-200 text-sm">Successfully subscribed!</p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-800 border border-red-600 rounded-lg flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <p className="text-red-200 text-sm">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  // Clear error when user starts typing
                  if (submitStatus === 'error') {
                    setSubmitStatus('idle');
                    setErrorMessage('');
                  }
                }}
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                ) : null}
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Arcade Atelier. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">
                We use cookies to improve your experience
              </span>
              <div className="text-green-400 text-sm">
                <strong>Pro Tip:</strong> Always check your BIM file compatibility before sharing!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-200 flex items-center justify-center z-40"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}