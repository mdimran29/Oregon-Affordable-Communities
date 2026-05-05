import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Approach from '../components/Approach';
import Work from '../components/Work';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Approach />
      <Work />
      <CTA />
    </>
  );
};

export default Home;
