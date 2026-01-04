'use client';

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HeroSection from './components/hero/HeroSection';
import StorySection from './components/story/StorySection';
import ValuesSection from './components/values/ValuesSection';
import CTASection from './components/cta/CTASection';

export default function HomePage() {
  return (
    <>
      <style jsx global>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .name-hover {
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .name-hover:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 20px rgba(34, 211, 238, 0.5));
        }
      `}</style>
      
      <Navbar />
      
      <div className="min-h-screen bg-black">
        <HeroSection />
        <StorySection />
        <ValuesSection />
        <CTASection />
      </div>
      
      <Footer />
    </>
  );
}