'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import AuthModal from '@/components/AuthModal';
import { Building, Scan, Layers, Search, Settings, Shield } from 'lucide-react';

export default function BIMServices() {
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

  const bimServices = [
    {
      icon: Scan,
      title: 'Scan to BIM & Point Cloud Modeling',
      description: 'Accurate production of point cloud scans and creation of 3D BIM models from scans with required Level of Detail (LOD) 100-200.',
      features: ['Extraction of as-built 2D drawings', 'Architectural, Furniture, RCP, Electrical', 'Fast turnaround and reliable delivery']
    },
    {
      icon: Building,
      title: 'BIM Modeling',
      description: 'Architectural, Structural, and MEPFP BIM modeling, tailored to your requested LOD.',
      features: ['PDF to BIM conversion', 'CAD to BIM solutions', 'Scan to BIM modeling']
    },
    {
      icon: Search,
      title: 'BIM Coordination & Clash Detection',
      description: 'Comprehensive BIM coordination across multiple disciplines with advanced clash detection.',
      features: ['Multi-discipline coordination', 'Conflict identification', 'Seamless construction processes']
    },
    {
      icon: Layers,
      title: 'Structural & MEPFP BIM',
      description: 'Structural BIM modeling for robust, code-compliant designs and MEPFP modeling for integrated project delivery.',
      features: ['Mechanical systems', 'Electrical systems', 'Plumbing & Fire Protection']
    },
    {
      icon: Settings,
      title: 'BIM for Facility & Asset Management',
      description: 'As-built BIM models to aid operations, maintenance, and lifecycle management.',
      features: ['Operations support', 'Maintenance planning', 'Lifecycle management']
    },
    {
      icon: Shield,
      title: 'Compliance with Global Standards',
      description: 'Adherence to ISO 19650, National BIM Standard (US), and NATSPEC/Australian standards.',
      features: ['ISO 19650 compliance', 'US National BIM Standard', 'Australian NATSPEC standards']
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
        title="BIM Services"
        backgroundImage="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=1920"
        bannerColor="blue"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'BIM Services' }
        ]}
      />

      {/* Service Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Building Information Modeling Excellence</h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                At Arcade Atelier, we specialize in delivering comprehensive Building Information Modeling (BIM) services, providing accurate, intelligent, and coordinated digital representations of your built environment.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our BIM expertise is designed to streamline every phase of your project—from planning and design to construction and facility management.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="BIM modeling visualization"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BIM Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our BIM Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive BIM solutions tailored to your project needs and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bimServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our BIM Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering high-quality BIM solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
              <p className="text-gray-600">Gather all necessary project data, scans, and existing drawings.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Modeling</h3>
              <p className="text-gray-600">Create detailed 3D BIM models according to specified LOD requirements.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Coordination</h3>
              <p className="text-gray-600">Coordinate across disciplines and perform clash detection.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">Deliver final models with documentation and ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Transform Your Project with BIM?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our BIM experts help you create accurate, coordinated, and intelligent building models that drive project success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Get BIM Quote
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
              Contact BIM Team
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