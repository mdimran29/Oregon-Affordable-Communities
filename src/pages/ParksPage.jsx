import React from 'react';
import { Home as HomeIcon, MapPin, Users, Hammer, Wrench, Paintbrush } from 'lucide-react';
import CTA from '../components/CTA';

const ParksPage = () => {
  return (
    <div className="w-full">
      {/* SECTION 1: Hero */}
      <section className="relative w-full h-[50vh] md:h-[60vh] bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={`${import.meta.env.BASE_URL}3.jpg`}
            alt="Beautiful Oregon landscape with residential community"
            className="w-full h-full object-cover object-center"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">Our Parks</h1>
          <p className="text-xl text-gray-200">Preserving affordability, dignity, and community across Oregon.</p>
        </div>
      </section>

      {/* SECTION 2: Description & Details */}
      <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-2">Featured Community</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">John Day Mobile Home Park</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our first mobile home park acquisition was the John Day Mobile Home Park, located in Astoria, Oregon. We took ownership of the park in May 2026.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The park includes 23 manufactured home spaces and two existing site-built homes, which will be replaced as part of planned improvements. It is home to more than 40 residents, many of whom have lived in the community for a decade or longer and rely on the park to provide stable, affordable housing.
            </p>

            <div className="bg-linen p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-6">Community Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                    <HomeIcon size={24} />
                  </div>
                  <span className="text-3xl font-bold text-primary mb-1">23</span>
                  <span className="text-sm font-medium text-gray-600">Manufactured Home Spaces</span>
                </div>
                <div className="flex flex-col">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-3">
                    <MapPin size={24} />
                  </div>
                  <span className="text-3xl font-bold text-secondary mb-1">2</span>
                  <span className="text-sm font-medium text-gray-600">Site-Built Homes</span>
                </div>
                <div className="flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                    <Users size={24} />
                  </div>
                  <span className="text-3xl font-bold text-primary mb-1">40+</span>
                  <span className="text-sm font-medium text-gray-600">Residents</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group">
            <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-2xl -z-10 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img
              src={`${import.meta.env.BASE_URL}4.jpg`}
              alt="John Day Mobile Home Park homes"
              className="w-full h-auto rounded-2xl object-cover shadow-lg aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: Planned Improvements & Future Vision */}
      <section className="py-20 bg-linen px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Planned Improvements & Vision</h2>
            <p className="text-lg text-gray-600">
              A range of improvements are planned to enhance safety and quality of life, including repairs to roads, upgrades to fencing, and the rebuilding of a community room.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-3">Infrastructure Upgrades</h3>
              <p className="text-gray-600">Including repairs to roads, upgrades to fencing, and the rebuilding of a community room to enhance the daily lives of all residents.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-3">Increasing Affordability</h3>
              <p className="text-gray-600">We are seeking funding to bring new homes into currently vacant spaces, creating opportunities for homeownership and increasing access to affordable housing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Community Engagement */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-primary text-white p-10 md:p-16 rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-6">Community Engagement</h2>
          <p className="text-lg text-primary-fixed-dim opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
            To support community-building and resident engagement, Oregon Affordable Communities will partner with Clatsop Community Action to contract a community outreach worker. This role will focus on building relationships with residents, strengthening community connections, and helping develop a shared vision for the future of the park.
          </p>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default ParksPage;
