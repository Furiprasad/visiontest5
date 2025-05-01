
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Logo + Quote + Social */}
          <div className="space-y-6">
            <img 
              alt="Vision Developers" 
              className="h-16 brightness-0 invert" 
              src="/lovable-uploads/b50a97b7-5000-4cb8-8798-82121d9dad97.png" 
            />
            <p className="text-base md:text-lg text-gray-300">
              "Driven by a passion for creating exceptional living spaces that redefine luxury living."
            </p>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Address */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 font-poppins">Address</h3>
            <address className="not-italic text-gray-300 text-base md:text-lg space-y-2">
              Vision Developers<br />
              #7-24-9/5, #506, Dutch House,<br />
              Kirlampudi Layout, Visakhapatnam - 530017.<br />
              <a href="mailto:info@visiondevelopers.co" className="text-accent hover:text-accent/80 transition-colors duration-300 block mt-2">
                info@visiondevelopers.co
              </a>
            </address>
          </div>
          
          {/* Column 3: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 font-poppins">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors duration-300 text-base md:text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors duration-300 text-base md:text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-accent transition-colors duration-300 text-base md:text-lg">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-accent transition-colors duration-300 text-base md:text-lg">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors duration-300 text-base md:text-lg">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Call Us */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 font-poppins">Call Us</h3>
            <div className="flex items-center space-x-3 mb-3">
              <Phone size={22} className="text-accent" />
              <p className="text-base md:text-lg text-gray-300">Available 24x7</p>
            </div>
            <a href="tel:+919988393555" className="text-white hover:text-accent text-xl md:text-2xl font-semibold transition-colors duration-300">
              +91 9988393555
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom bar with copyright */}
      <div className="bg-navy-light py-6">
        <div className="container mx-auto px-6 text-center text-base md:text-lg text-gray-300">
          © {currentYear} Vision Developers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
