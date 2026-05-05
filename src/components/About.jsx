import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-bold tracking-wider text-secondary uppercase mb-3">About Us</h2>
        <h3 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-8 leading-tight">
          Preserving Affordable Communities for the People who Call them Home
        </h3>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
          Oregon Affordable Communities is a non-profit organization dedicated to preserving affordable housing through the acquisition, preservation, and improvement of small mobile home parks in rural Oregon.
        </p>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          We take a three-pronged approach to our work: Acquire, Preserve, & Improve. We acquire parks to keep residents in place and preserve long-term housing affordability in the community. Once acquired, we invest in park improvements and community building, to improve the park and the quality of life for residents.
        </p>
      </div>
    </section>
  );
};

export default About;
