'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import AuthModal from '@/components/AuthModal';
import { Target, Eye, Heart, Users, Award, Handshake, DollarSign, CheckCircle } from 'lucide-react';

export default function About() {
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

  const coreValues = [
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'We act with honesty and honor in all we do.'
    },
    {
      icon: Users,
      title: 'Client Focus',
      description: 'Your needs come first—always.'
    },
    {
      icon: Heart,
      title: 'Loyalty',
      description: 'We\'re here for you, every step of the way.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We strive for excellence, no matter the project size.'
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'We believe in teamwork—within our firm and with our clients.'
    },
    {
      icon: DollarSign,
      title: 'Affordability',
      description: 'We keep our pricing fair, so everyone can benefit from our services.'
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
        title="About Us"
        backgroundImage="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920"
        bannerColor="blue"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
      />

      {/* Engineering with Purpose */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Engineering with Purpose and Passion</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Welcome to Arcade Atelier—where precision, care, and innovation come together to transform the world of BIM and CAD services. As a close-knit team of dedicated and aspiring engineers, we are committed to delivering solutions that empower our clients, elevate industry standards, and shape a more accessible, sustainable built environment for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Users className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Arcade Atelier was founded on the belief that engineering is not just about technology—it's about people. Our journey began with a small group of professionals determined to bring high-quality BIM and CAD services to clients of all sizes, regardless of their resources or experience.
                </p>
                <p>
                  Today, we continue to uphold the same commitment: serving every customer with loyalty, dependability, and unwavering integrity. We take pride in being approachable, honest, and deeply customer-focused.
                </p>
                <p>
                  Our team is not driven by profit alone—we are motivated by the opportunity to help our clients succeed, whether you are a large corporation or setting up a small office for the first time.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Our team working together"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="mission-vision" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Vision */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Eye className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our vision is to lead the BIM and CAD services industry by championing accessibility, excellence, and respect. We aspire to set a new standard where advanced engineering support is available to all, delivered with genuine care and attention to detail.
                </p>
                <p>
                  By continuously learning and adapting, we empower our clients and partners with the tools, knowledge, and insight to build a brighter, more efficient future. We believe that true progress happens when we work together—so we foster a culture of collaboration, learning, and innovation.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Target className="w-8 h-8 text-orange-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>At Arcade Atelier, our mission is to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Deliver top-quality BIM and CAD services that combine technical precision with creativity and care.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Provide affordable, flexible solutions so that every client can access the benefits of modern engineering tools.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Support our clients at every stage, from concept to completion, always listening closely and responding to your evolving needs.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="BIM and CAD services"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">What We Do</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We specialize in a broad spectrum of BIM and CAD services, including Scan to BIM, Point Cloud Modeling, Architectural Drafting, 3D Rendering, MEPFP Modeling, and more. Our expertise spans across residential, commercial, office, and industrial projects.
                </p>
                <p>
                  We are recognized for our on-time delivery, adaptability to different standards (ISO, US, Australian), and our ability to tackle complex design challenges—no matter how unique.
                </p>
                <p>
                  With every project, our focus is simple: to produce accurate, efficient, and affordable solutions that help you achieve your vision and build with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we interact with our clients, partners, and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Work Together?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Arcade Atelier is here to help you succeed, with engineering by ingenuity—and heart. Let's build a better tomorrow, together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Start Your Project
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
      />
    </div>
  );
}