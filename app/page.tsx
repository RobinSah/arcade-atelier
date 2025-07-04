'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import ProjectCard from '@/components/ProjectCard';
import HeroCarousel from '@/components/HeroCarousel';
import { 
  Building, 
  Users, 
  Settings, 
  Leaf, 
  Shield, 
  Award,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: Building,
      title: 'Multi-Disciplinary Engineering & Design',
      description: 'From conceptual planning to final systems integration, Arcade Atelier is your trusted partner in engineering excellence.'
    },
    {
      icon: Settings,
      title: 'Customizable Solutions',
      description: 'Employing both traditional methods and innovative technologies such as Smart 3D Modeling, we deliver personalized solutions that exceed your expectations.'
    },
    {
      icon: Users,
      title: 'Experienced Professionals',
      description: 'Our dedicated team consists of highly trained and certified professionals proficient in the latest BIM and CAD technologies.'
    },
    {
      icon: Leaf,
      title: 'Cutting-Edge Technology',
      description: 'We are committed to sustainable, eco-friendly solutions that prioritize energy efficiency and environmental responsibility.'
    },
    {
      icon: Shield,
      title: 'Safety and Compliance',
      description: 'Safety and adherence to international standards—ISO 19650 (EU), National BIM Standard (US), and ABAB/Natspec (Australian)—are embedded into every aspect of our processes.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We ensure the highest quality and compliance in every project, delivering precision and innovation to exceed your expectations.'
    }
  ];

  const projects = [
    {
      title: 'Horizon Heaven',
      category: 'Residential',
      description: 'Overcoming CAD translation challenges to deliver precise Revit models for this modern residential complex.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Bluebell Gardens',
      category: 'Office',
      description: 'Accurately reconstructing complex office spaces from incomplete drawings with detailed BIM modeling.',
      image: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Regal Heights',
      category: 'Industrial',
      description: 'Detailed structural and MEP modeling despite scanning limitations for this industrial facility.',
      image: 'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?cs=srgb&dl=pexels-pixabay-209251.jpg&fm=jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Industry Projects & Portfolio Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore how Arcade Atelier can transform your next project with innovative BIM and CAD solutions designed to meet your precise requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                link="#"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Transform Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our BIM and CAD expertise can bring your vision to life with precision and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth?mode=signup">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Get a Quote
              </button>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}