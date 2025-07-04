'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import AuthModal from '@/components/AuthModal';
import { Cpu, PenTool, FileText, Zap, Eye, Settings } from 'lucide-react';

export default function CADServices() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const handleSignIn = () => {
    setAuthMode('signin');
    setAuthModalOpen(true);
  };

  const handleSignUp = () => {
    setAuthMode('signup');
    setAuthModalOpen(true);
  };

  const handleAuthenticate = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  const cadServices = [
    {
      icon: PenTool,
      title: 'Architectural Drafting',
      description: 'Detailed architectural drawings including general plan layouts, elevations, and sections.',
      features: ['Full dimensions and specifications', 'Ready-to-build documentation sets', 'Furniture layouts and RCP', 'Detailed 3D views']
    },
    {
      icon: Zap,
      title: 'CAD to BIM Conversion',
      description: 'Converting existing 2D CAD drawings into intelligent BIM models for enhanced coordination.',
      features: ['2D to 3D conversion', 'Enhanced coordination', 'Intelligent modeling', 'Visualization improvements']
    },
    {
      icon: FileText,
      title: 'As-Built Drawing Services',
      description: 'Generation of accurate as-built 2D drawings and documentation based on site measurements.',
      features: ['Site measurement based', 'Scan-based documentation', 'Redline incorporation', 'Accurate documentation']
    },
    {
      icon: Settings,
      title: 'Electrical and MEP Drafting',
      description: 'Detailed MEP (Mechanical, Electrical, Plumbing) drawings and documentation.',
      features: ['Mechanical systems', 'Electrical layouts', 'Plumbing designs', 'Integrated construction sets']
    },
    {
      icon: Eye,
      title: '3D Visualization & Rendering',
      description: 'High-fidelity architectural visualizations and lifelike 3D renderings from CAD or BIM data.',
      features: ['High-fidelity rendering', 'Lifelike visualizations', 'Immersive walkthroughs', 'Stakeholder presentations']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        isAuthenticated={isAuthenticated}
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
        onSignOut={handleSignOut}
      />

      <PageBanner
        title="CAD Services"
        backgroundImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
        bannerColor="blue"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'CAD Services' }
        ]}
      />

      {/* Service Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Precision CAD Drafting & Documentation</h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Arcade Atelier provides end-to-end CAD drafting and documentation services to architects, engineers, and builders. Our CAD solutions are designed to be precise, efficient, and tailored to your project requirements.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether it's a residential, commercial, or industrial project, we deliver comprehensive CAD services that support your design and construction needs.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="CAD drafting and design"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CAD Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our CAD Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive CAD solutions for all your drafting and documentation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cadServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                  <service.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAD Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">CAD Drawing Examples</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See examples of our precision CAD work across different project types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Architectural floor plan"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Architectural Floor Plans</h3>
              <p className="text-gray-600">Detailed floor plans with dimensions, annotations, and specifications.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="MEP drawings"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">MEP Drawings</h3>
              <p className="text-gray-600">Comprehensive mechanical, electrical, and plumbing system drawings.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="3D renderings"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">3D Renderings</h3>
              <p className="text-gray-600">High-quality 3D visualizations and architectural renderings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our CAD Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to delivering precise CAD documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Requirements Analysis</h3>
              <p className="text-gray-600">Understand project scope, standards, and specific requirements.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Drafting</h3>
              <p className="text-gray-600">Create precise technical drawings with accurate dimensions and details.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Check</h3>
              <p className="text-gray-600">Thorough review and quality assurance of all drawings.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">Final drawings delivered in required formats with documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4 text-white">Need Precision CAD Services?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Our CAD experts are ready to help you create accurate, detailed drawings that meet your exact specifications and project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Get CAD Quote
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-medium">
              Contact CAD Team
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
        onAuthenticate={handleAuthenticate}
      />
    </div>
  );
}