import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0,100 100,0 100,100" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
          Help preserve affordable communities in Oregon
        </h2>
        <p className="text-xl text-white/90 mb-10 opacity-90">
          Your support directly enables us to acquire at-risk properties and protect the people who call them home. Together, we can create a more equitable housing landscape.
        </p>
        <Link 
          to="/donate" 
          className="inline-flex items-center justify-center bg-secondary text-white font-bold text-lg md:text-xl px-12 py-5 rounded-lg shadow-xl hover:brightness-95 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ring-4 ring-secondary/30 hover:ring-secondary/50"
        >
          Donate Now
        </Link>
      </div>
    </section>
  );
};

export default CTA;
