import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-4 sm:px-6 lg:px-8" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6 opacity-90 hover:opacity-100 transition-opacity">
              <img 
                src="/logo-stacked.png" 
                alt="Oregon Affordable Communities Logo" 
                className="w-32 h-auto object-contain mix-blend-multiply"
              />
            </Link>
            <p className="text-gray-600 max-w-sm mb-6">
              A nonprofit organization dedicated to preserving affordable manufactured housing communities across Oregon.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-bold text-primary mb-6 uppercase text-sm tracking-wider">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-600 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-secondary transition-colors">About</Link></li>
              <li><Link to="/parks" className="text-gray-600 hover:text-secondary transition-colors">Our Parks</Link></li>
              <li><Link to="/donate" className="text-gray-600 hover:text-secondary transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1" id="contact">
            <h4 className="font-bold text-primary mb-6 uppercase text-sm tracking-wider">Contact</h4>
            <address className="not-italic text-gray-600 space-y-4">
              <p>123 Nonprofit Way<br />Portland, OR 97204</p>
              <p><a href="mailto:hello@oregonaffordable.org" className="hover:text-secondary transition-colors">hello@oregonaffordable.org</a></p>
              <p><a href="tel:+15035550198" className="hover:text-secondary transition-colors">(503) 555-0198</a></p>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Oregon Affordable Communities. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
