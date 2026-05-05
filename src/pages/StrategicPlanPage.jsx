import React from 'react';
import { Target, Lightbulb, Compass, BarChart } from 'lucide-react';
import CTA from '../components/CTA';

const StrategicPlanPage = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative w-full h-[40vh] md:h-[50vh] bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/4.jpg" 
            alt="Strategic Plan" 
            className="w-full h-full object-cover object-center"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">Strategic Plan</h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Our roadmap for scaling impact, preserving more communities, and ensuring long-term sustainability.
          </p>
        </div>
      </section>

      <section className="py-20 bg-linen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-4 -mt-4"></div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Goal 1: Scale Acquisitions</h3>
              <p className="text-gray-600 leading-relaxed">
                Acquire and preserve 5 additional at-risk mobile home parks in rural Oregon over the next three years. This requires expanding our capital pool, strengthening relationships with current owners, and refining our underwriting process.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-4 -mt-4"></div>
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Goal 2: Infrastructure Resilience</h3>
              <p className="text-gray-600 leading-relaxed">
                Implement comprehensive infrastructure upgrades in all newly acquired parks within the first 18 months of ownership. Focus heavily on water systems, electrical grids, and fire safety to ensure long-term physical resilience.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-4 -mt-4"></div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Compass size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Goal 3: Resident Empowerment</h3>
              <p className="text-gray-600 leading-relaxed">
                Establish a formal resident advisory council in every community we own. Partner with local organizations like Clatsop Community Action to provide on-site resources, build leadership capacity, and foster community connection.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-4 -mt-4"></div>
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                <BarChart size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Goal 4: Financial Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                Diversify funding streams by increasing philanthropic grants by 30% and launching a new impact investment fund targeted at local businesses and individuals who want to invest in their local communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
};

export default StrategicPlanPage;
