import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/image1.jpg" 
          alt="Oregon Landscape" 
          className="w-full h-full object-cover object-center"
          fetchpriority="high"
        />
        {/* Dark Overlay for text readability using primary green from logo */}
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="max-w-4xl">
          {/* Subtle Icon Element representing the Roof/Heart motif */}
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30">
            <Heart size={32} className="text-secondary" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6 tracking-tight drop-shadow-lg">
            Preserving Affordable Communities <br className="hidden md:block"/>
            for the <span className="text-secondary">People Who Call Them Home</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 mx-auto leading-relaxed drop-shadow-md">
            Oregon Affordable Communities preserves critical affordable housing in Oregon by purchasing mobile home parks, protecting them from displacement and ensuring they are well-maintained and affordable for current and future residents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="bg-secondary text-white font-bold rounded-lg hover:brightness-95 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-lg px-8 py-4 shadow-lg ring-4 ring-secondary/20 hover:ring-secondary/40">
              Donate Now
            </Link>
            <Link to="/parks" className="bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all hover:shadow-xl hover:-translate-y-1 text-lg px-8 py-4">
              Explore Our Parks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
