import React from 'react';
import { ArrowRight, Key, Trees, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <section className="py-24 bg-surface px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Acquire. Preserve. Improve.</h2>
        </div>

        <div className="space-y-16">
          {/* Work Block 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Landmark size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Acquiring At-Risk Parks</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We work to identify small mobile home parks that are at risk of being sold and repurposed in a way that would displace residents and reduce affordability. Many mobile home parks are at risk due to aging owners, aging infrastructure, debt or a variety of other factors. We identify at-risk parks through public notices, community partners, and outreach to mobile home park owners.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="/2.jpg" 
                alt="Acquiring At-Risk Parks" 
                className="rounded-2xl shadow-md w-full aspect-video object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Work Block 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <img 
                src="/3.jpg" 
                alt="Preserving Affordable Housing" 
                className="rounded-2xl shadow-md w-full aspect-video object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-2 space-y-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                <Key size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Preserving Affordable Housing</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Manufactured home parks often represent a critical pocket of affordable housing within communities that are otherwise struggling to maintain or create affordable options. Preserving these communities is essential, not only for the residents who live there, but for the long-term health and stability of the broader community. By maintaining affordability and preventing displacement, we help ensure that these housing options remain available for future generations.
              </p>
            </div>
          </div>

          {/* Work Block 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Trees size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Investing in Park Improvements</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe manufactured home communities should not only be an affordable place to live, but a great place to live. Our investments focus on improving safety, infrastructure, and overall quality of life for residents. We prioritize projects that address critical needs while also enhancing the day-to-day experience of living in the community. Park improvements are not just about infrastructure; they are also about building a sense of community. We support efforts that foster connection, shared spaces, and a stronger sense of belonging among residents. We use a community-engaged approach to guide project prioritization and decision-making, working closely with residents and community partners to ensure improvements reflect local needs and priorities.
              </p>
              <Link to="/parks" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group">
                See Our Projects <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="/4.jpg" 
                alt="Investing in Park Improvements" 
                className="rounded-2xl shadow-md w-full aspect-video object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
