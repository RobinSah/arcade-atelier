'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import AuthModal from '@/components/AuthModal';
import ProjectCard from '@/components/ProjectCard';
import { ChevronLeft, ChevronRight, DollarSign, BookOpen, Lightbulb, Users } from 'lucide-react';

export default function News() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const portfolioProjects = [
    {
      title: 'Horizon Heaven',
      category: 'Residential',
      description: 'Delivered comprehensive CAD to BIM modeling, overcoming missing and outdated plans for a seamless result.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Bluebell Gardens',
      category: 'Office',
      description: 'Tackled incomplete elevation data, creating accurate models for flexible workspace planning.',
      image: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Willowdale Manor',
      category: 'Residential',
      description: 'Scan to BIM project involving intricate geometry and adaptive modeling for detailed as-built documentation.',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Regal Heights',
      category: 'Industrial',
      description: 'Industrial facility modeled from point cloud scans, resolving issues with structural complexity.',
      image: 'https://images.pexels.com/photos/2406642/pexels-photo-2406642.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const articles = [
    {
      title: 'How to Prepare Your Drawings for Scan to BIM',
      category: 'How-To Guide',
      description: 'Step-by-step guide for architects and engineers on preparing existing drawings for BIM conversion.',
      image: 'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '5 min read'
    },
    {
      title: 'Optimizing CAD Files for Better Coordination',
      category: 'Best Practices',
      description: 'Learn how to structure and optimize your CAD files for seamless collaboration and coordination.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '7 min read'
    },
    {
      title: 'The Future of BIM in Construction',
      category: 'Industry Insights',
      description: 'Exploring emerging trends and technologies shaping the future of Building Information Modeling.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '10 min read'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioProjects.length) % portfolioProjects.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        isAuthenticated={isAuthenticated}
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
        onSignOut={handleSignOut}
      />

      <PageBanner
        title="News & Insights"
        backgroundImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
        bannerColor="blue"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News' }
        ]}
      />

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent and signature projects across residential, commercial, office, and industrial sectors.
            </p>
          </div>

          {/* Portfolio Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {portfolioProjects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="order-2 lg:order-1">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                        <h3 className="text-3xl font-bold mt-4 mb-4 text-gray-900">{project.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
                      </div>
                      <div className="order-1 lg:order-2">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-96 object-cover rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {portfolioProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe high-quality services should be accessible and transparent. That's why we offer straightforward pricing designed to meet every client's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">CAD Services</h3>
              <p className="text-4xl font-bold text-orange-600 mb-4">Starting from $65</p>
              <p className="text-gray-600 mb-6">Per project</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  <span>Architectural Drafting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  <span>MEP Drawings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  <span>3D Visualization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">BIM Services</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">Starting from $100</p>
              <p className="text-gray-600 mb-6">Per project</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Scan to BIM</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>BIM Coordination</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Clash Detection</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              For custom, bulk, or ongoing projects, contact us for tailored quotes and discounts.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get a Quick Quote
            </button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Articles & Ideas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with industry insights, emerging trends, and practical ideas on BIM and CAD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideas Lab Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">BIM & CAD Ideas Lab</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Ideas Lab is a community-focused space for sharing creative solutions, workflow tips, and innovative uses for BIM and CAD in real-world projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ask an Expert</h3>
              <p className="text-gray-600 mb-4">
                Submit your BIM or CAD challenge and get practical advice from our team.
              </p>
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Ask Now
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tips & Tricks</h3>
              <p className="text-gray-600 mb-4">
                Quick hacks and time-saving techniques for common modeling tasks.
              </p>
              <button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                Browse Tips
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">User Spotlights</h3>
              <p className="text-gray-600 mb-4">
                Featuring stories and feedback from our clients and collaborators.
              </p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Read Stories
              </button>
            </div>
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