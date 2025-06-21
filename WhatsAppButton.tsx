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