import React from 'react';

interface NavbarProps {
  logo?: string;
  logoAlt?: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  logo = "/logo.svg", 
  logoAlt = "Website Logo"
}) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="container mx-auto flex items-center justify-start py-4 px-4 space-x-6">
        <a href="/" className="flex items-center">
          <img 
            src={logo} 
            alt={logoAlt} 
            className="h-8 w-auto object-contain"
          />
        </a>

        <div className="flex space-x-6">
          <a href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
            Home
          </a>
          <a href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
            About
          </a>
          <a href="/services" className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
            Services
          </a>
          <a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;