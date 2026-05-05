import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative w-full h-[40vh] md:h-[50vh] bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={`${import.meta.env.BASE_URL}6.jpg`} 
            alt="Contact Us" 
            className="w-full h-full object-cover object-center"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">We'd love to hear from you. Reach out to learn more or get involved.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're a resident, a potential partner, or someone looking to support our mission, we are here to answer any questions you may have about our work preserving affordable communities.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">Our Office</h3>
                  <p className="text-gray-600">123 Nonprofit Way<br />Portland, OR 97204</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">Email Us</h3>
                  <p className="text-gray-600">hello@oregonaffordable.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600">(503) 555-0198</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am - 5pm PT</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
