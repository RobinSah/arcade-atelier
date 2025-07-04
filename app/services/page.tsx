'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import AuthModal from '@/components/AuthModal';
import { Building, Cpu, ArrowRight } from 'lucide-react';

export default function Services() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [useFullPageAuth, setUseFullPageAuth] = useState(true);

  const handleSignIn = () => {
    setAuthMode('signin');
    setUseFullPageAuth(true);
    setAuthModalOpen(true);
  };

  const handleSignUp = () => {
    setAuthMode('signup');
    setUseFullPageAuth(true);
    setAuthModalOpen(true);
  };

  const handleAuthenticate = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        isAuthenticated={isAuthenticated}
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
        onSignOut={handleSignOut}
        useFullPageAuth={useFullPageAuth}
      />

      <PageBanner
        title="Our Services"
        backgroundImage="https://images.pexels.com/photos/3862618/pexels-photo-3862618.jpeg?auto=compress&cs=tinysrgb&w=1920"
        bannerColor="blue"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' }
        ]}
      />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Comprehensive Engineering Solutions</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Arcade Atelier, we provide end-to-end BIM and CAD services designed to streamline every phase of your project—from planning and design to construction and facility management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* BIM Services */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">BIM Services</h3>
                  <p className="text-gray-600">Building Information Modeling</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Comprehensive Building Information Modeling services providing accurate, intelligent, and coordinated digital representations of your built environment.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <img 
                  src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="BIM modeling"
                  className="rounded-lg h-32 w-full object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="3D building model"
                  className="rounded-lg h-32 w-full object-cover"
                />
              </div>
              
              <Link href="/services/bim">
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <span>Explore BIM Services</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>

            {/* CAD Services */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">CAD Services</h3>
                  <p className="text-gray-600">Computer-Aided Design</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                End-to-end CAD drafting and documentation services for architects, engineers, and builders. Precise, efficient, and tailored to your project requirements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="CAD drafting"
                  className="rounded-lg h-32 w-full object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Technical drawings"
                  className="rounded-lg h-32 w-full object-cover"
                />
              </div>
              
              <Link href="/services/cad">
                <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2">
                  <span>Explore CAD Services</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Arcade Atelier?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accuracy and Detail</h3>
              <p className="text-gray-600">Our team ensures every drawing and model is delivered to the highest standards.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast and Reliable</h3>
              <p className="text-gray-600">On-time delivery with responsive communication.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Standards</h3>
              <p className="text-gray-600">Models and drawings fully compliant with ISO, US, and Australian standards.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Solutions</h3>
              <p className="text-gray-600">High-quality services should be accessible to all, no matter the project size.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let Arcade Atelier be your trusted partner for all your BIM and CAD needs—whether you are planning a new build, upgrading an existing facility, or need expert documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Get a Quote
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
              Contact Us
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
        useFullPage={useFullPageAuth}
      />
    </div>
  );
}