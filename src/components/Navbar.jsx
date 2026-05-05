import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Board', path: '/board' },
    { name: 'Strategic Plan', path: '/strategic-plan' },
    { name: 'Our Parks', path: '/parks' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-primary text-white px-4 py-2 rounded-md font-bold shadow-lg">
        Skip to main content
      </a>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-5 shadow-sm'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group py-2" aria-label="Oregon Affordable Communities Home">
              {/* Desktop Horizontal Logo */}
              <img 
                src={`${import.meta.env.BASE_URL}logo-horizontal.png`} 
                alt="Oregon Affordable Communities Logo" 
                className={`hidden md:block object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
              />
              {/* Mobile Stacked Logo */}
              <img 
                src={`${import.meta.env.BASE_URL}logo-stacked.png`} 
                alt="Oregon Affordable Communities Logo" 
                className="md:hidden object-contain transition-all duration-300 h-11"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
              <ul className="flex space-x-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className={`text-[15px] font-semibold hover:text-secondary transition-colors duration-200 ${
                        location.pathname === link.path ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-primary'
                      }`}
                      aria-current={location.pathname === link.path ? 'page' : undefined}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link 
                to="/donate" 
                className="px-7 py-2.5 rounded-lg font-bold transition-all shadow-md bg-secondary text-white hover:brightness-95 hover:shadow-lg hover:-translate-y-0.5"
              >
                Donate
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-primary hover:bg-gray-100 transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-2 px-4 flex flex-col space-y-2 transition-all duration-300 origin-top ${
            mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-semibold py-3 px-4 rounded-lg transition-colors ${
                location.pathname === link.path ? 'bg-secondary/10 text-secondary' : 'text-primary hover:bg-gray-50'
              }`}
              aria-current={location.pathname === link.path ? 'page' : undefined}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 px-2 pb-4">
            <Link 
              to="/donate"
              onClick={() => setMobileMenuOpen(false)} 
              className="block w-full text-center bg-secondary text-white font-bold py-3.5 rounded-lg shadow-md hover:brightness-95 transition-all"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
