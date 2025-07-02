import React, { useState } from 'react';
import WhatsAppButton from './WhatsAppButton';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  whatsappNumber: string;
}

const Navbar: React.FC<NavbarProps> = ({ whatsappNumber }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center space-x-2">
            <div className="h-24 w-24 overflow-hidden flex items-center justify-center rounded-full bg-white">
              <img
                src="/eco-raizes-sem-fundo.png"
                alt="Eco Raízes Logo"
              />
            </div>
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