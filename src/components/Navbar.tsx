
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Our Projects', path: '/projects' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-nav' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/82ca30d3-e2ad-493b-a13b-f22412253313.png"
              alt="Vision Developers" 
              className="h-12 md:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors duration-300 ${
                    isActive 
                      ? 'text-primary border-b-2 border-accent' 
                      : 'text-foreground hover:text-primary'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md absolute left-0 right-0 top-20 z-50">
            <div className="px-4 py-4 space-y-4 flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `text-base font-medium p-2 transition-colors duration-300 ${
                      isActive 
                        ? 'text-primary bg-gray-50' 
                        : 'text-foreground hover:text-primary hover:bg-gray-50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
