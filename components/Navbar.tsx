
import React, { useState } from 'react';
import WhatsAppButton from './WhatsAppButton';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  whatsappNumber: string;
}

const LeafIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    {/* A more thematic leaf icon */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343m11.314 11.314a8 8 0 00-11.314-11.314m11.314 11.314L6.343 7.343" /> 
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
     {/* Simplified leaf representation inside circle */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10a4 4 0 00-4 4h8a4 4 0 00-4-4zM12 10V4M8 14a4 4 0 004 4m0-4a4 4 0 014 4" />
  </svg>
);


const Navbar: React.FC<NavbarProps> = ({ whatsappNumber }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center space-x-2">
            <LeafIcon />
            <span className="text-2xl font-bold text-eco-green-dark">Eco Raízes</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="text-gray-700 hover:text-eco-green transition-colors duration-300 font-medium">
                {link.label}
              </a>
            ))}
            <WhatsAppButton 
              phoneNumber={whatsappNumber} 
              message="Olá! Gostaria de saber mais sobre a Eco Raízes."
              className="text-sm px-4 py-2"
            >
              Contato WhatsApp
            </WhatsAppButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-eco-green focus:outline-none"
              aria-label="Abrir menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 py-2">
            {NAV_LINKS.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className="block px-3 py-2 text-gray-700 hover:bg-eco-light hover:text-eco-green rounded font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4">
              <WhatsAppButton 
                phoneNumber={whatsappNumber} 
                message="Olá! Gostaria de saber mais sobre a Eco Raízes."
                className="w-full text-sm"
              >
                Contato WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;