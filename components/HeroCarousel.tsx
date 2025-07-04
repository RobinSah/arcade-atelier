'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'BIM MODELING SERVICES',
    subtitle: 'Precision Engineering for Modern Construction'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'CAD DRAFTING SOLUTIONS',
    subtitle: 'Detailed Technical Documentation'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'SCAN TO BIM CONVERSION',
    subtitle: 'Transform Reality into Digital Models'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'ARCHITECTURAL VISUALIZATION',
    subtitle: 'Bringing Designs to Life'
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Main Content - Bottom Left */}
      <div className="absolute bottom-32 left-8 md:left-16 text-white max-w-2xl z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          {heroSlides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          {heroSlides[currentSlide].subtitle}
        </p>
        <button className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium">
          LEARN MORE
        </button>
      </div>

      {/* Welcome Text - Bottom Left Corner (Separate from main content) */}
      <div className="absolute bottom-8 left-8 md:left-16 text-white z-10">
        <h2 className="text-lg md:text-xl font-semibold mb-1">
          Welcome to Arcade Atelier
        </h2>
        <p className="text-sm md:text-base text-gray-300 max-w-md">
          Delivering high-quality BIM and CAD solutions for architecture, engineering, and construction.
        </p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all flex items-center justify-center group z-10"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all flex items-center justify-center group z-10"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}