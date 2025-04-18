import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo + Quote + Social */}
          <div>
            <img alt="Vision Developers" className="h-12 mb-4 brightness-0 invert" src="/lovable-uploads/b50a97b7-5000-4cb8-8798-82121d9dad97.png" />
            <p className="text-sm text-gray-300 mb-6">
              "Driven by a passion for creating exceptional living spaces that redefine luxury living."
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Address</h3>
            <address className="not-italic text-gray-300 text-sm">
              Vision Developers<br />
              #7-24-9/5, #506, Dutch House,<br />
              Kirlampudi Layout, Visakhapatnam - 530017.<br />
              <a href="mailto:info@visiondevelopers.co" className="text-accent hover:text-accent/80 transition-colors duration-300">
                info@visiondevelopers.co
              </a><br />
              <a href="tel:+919988393555" className="text-accent hover:text-accent/80 transition-colors duration-300">
                +91 9988393555
              </a>
            </address>
          </div>
          
          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-accent transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-accent transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Call Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Call Us</h3>
            <div className="flex items-center space-x-3 mb-2">
              <Phone size={18} className="text-accent" />
              <p className="text-sm text-gray-300">Available 24x7</p>
            </div>
            <a href="tel:+919988393555" className="text-white hover:text-accent text-lg font-semibold transition-colors duration-300">
              +91 9988393555
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom bar with copyright */}
      <div className="bg-navy-light py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-300">
          © {currentYear} Vision Developers. All rights reserved.
        </div>
      </div>
    </footer>;
};
export default Footer;