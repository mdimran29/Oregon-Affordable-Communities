import React from 'react';
import { Users, UserCircle2 } from 'lucide-react';
import CTA from '../components/CTA';

const BoardPage = () => {
  const boardMembers = [
    { name: 'Sarah Jenkins', role: 'Board President', bio: 'Sarah brings 20 years of experience in affordable housing policy and community development.' },
    { name: 'David Chen', role: 'Vice President', bio: 'David is an urban planner specializing in rural development and sustainable infrastructure.' },
    { name: 'Maria Rodriguez', role: 'Treasurer', bio: 'Maria is a CPA with a background in non-profit financial management and grant compliance.' },
    { name: 'James Wilson', role: 'Secretary', bio: 'James is a community organizer and advocate for tenants\' rights across the Pacific Northwest.' },
    { name: 'Elena Torres', role: 'Board Member', bio: 'Elena currently resides in a manufactured home community and brings essential lived experience to the board.' },
    { name: 'Robert Peterson', role: 'Board Member', bio: 'Robert is a retired real estate attorney who helps navigate complex property acquisitions.' },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative w-full h-[40vh] md:h-[50vh] bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/3.jpg" 
            alt="Board of Directors" 
            className="w-full h-full object-cover object-center"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">Board of Directors</h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Our diverse and dedicated board brings together expertise in housing, finance, law, and community advocacy.
          </p>
        </div>
      </section>

      <section className="py-20 bg-surface px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <li key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6" aria-hidden="true">
                  <UserCircle2 size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-secondary font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTA />
    </div>
  );
};

export default BoardPage;
