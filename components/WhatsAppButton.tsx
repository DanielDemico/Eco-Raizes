import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  children: React.ReactNode;
  className?: string;
}

const WhatsAppIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg 
    className={`w-5 h-5 ${className || ''}`}
    fill="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.712-1.001zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z"/>
  </svg>
);


const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message, children, className }) => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber.replace(/\D/g, '')}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={openWhatsApp}
      className={`
        relative overflow-visible whatsapp-animated-btn
        inline-flex items-center justify-center gap-2 
        bg-eco-green hover:bg-eco-green-dark text-white font-semibold 
        py-3 px-6 rounded-lg shadow-md hover:shadow-lg 
        transition-all duration-300 ease-in-out transform hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-eco-green-dark focus:ring-opacity-50
        ${className || ''}
      `}
    >
      {/* Folhas animadas */}
      <span className="leaf leaf-1 pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 2 17 7 17 12C17 17 12 22 12 22C12 22 7 17 7 12C7 7 12 2 12 2Z" fill="#4CAF50"/>
        </svg>
      </span>
      <span className="leaf leaf-2 pointer-events-none">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 1C9 1 13 5 13 9C13 13 9 17 9 17C9 17 5 13 5 9C5 5 9 1 9 1Z" fill="#81C784"/>
        </svg>
      </span>
      <span className="leaf leaf-3 pointer-events-none">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1C7 1 11 4 11 7C11 10 7 13 7 13C7 13 3 10 3 7C3 4 7 1 7 1Z" fill="#388E3C"/>
        </svg>
      </span>
      <WhatsAppIcon className="w-5 h-5" />
      {children}
    </button>
  );
};

export default WhatsAppButton;