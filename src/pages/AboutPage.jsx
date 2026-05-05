import React from 'react';
import About from '../components/About';
import Approach from '../components/Approach';
import Work from '../components/Work';

const AboutPage = () => {
  return (
    <div className="w-full">
      {/* Hero section for About Page */}
      <section className="relative w-full h-[40vh] md:h-[50vh] bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/1.jpg" 
            alt="About Oregon Affordable Communities" 
            className="w-full h-full object-cover object-center"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-200">Dedicated to preserving affordable housing across Oregon.</p>
        </div>
      </section>

      {/* Reusing existing components to build out the full About Page */}
      <About />
      <Approach />
      <Work />
    </div>
  );
};

export default AboutPage;
