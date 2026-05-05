import React from 'react';
import { Home, ShieldCheck, TrendingUp } from 'lucide-react';

const Approach = () => {
  const approaches = [
    {
      icon: <Home size={32} className="text-primary" />,
      title: "Acquire",
      description: "We work to identify small mobile home parks that are at risk of being sold and repurposed in a way that would displace residents and reduce affordability."
    },
    {
      icon: <ShieldCheck size={32} className="text-secondary" />,
      title: "Preserve",
      description: "By maintaining affordability and preventing displacement, we help ensure that these housing options remain available for future generations."
    },
    {
      icon: <TrendingUp size={32} className="text-primary" />,
      title: "Improve",
      description: "Our investments focus on improving safety, infrastructure, and overall quality of life for residents, while building a sense of community."
    }
  ];

  return (
    <section className="py-24 bg-linen px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Approach</h2>
          <p className="text-lg text-gray-600">A sustainable model for long-term community preservation.</p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {approaches.map((item, index) => (
            <li key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Approach;
