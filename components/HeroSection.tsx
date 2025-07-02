import React from 'react';
import WhatsAppButton from './WhatsAppButton';

interface HeroSectionProps {
  whatsappNumber: string;
  whatsappMessage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ whatsappNumber, whatsappMessage }) => {
  return (
    <section id="hero" className="relative bg-cover bg-center h-[calc(100vh-80px)] min-h-[500px] flex items-center justify-center text-white" style={{ backgroundImage: "url('/eco-raizes-hero-section.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg leading-tight">
          Eco Raízes: Especialistas em <span className="text-eco-green">Manutenção de Áreas Verdes</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-md">
          Transformamos seu espaço com paixão, profissionalismo e soluções sustentáveis em jardinagem e paisagismo.
        </p>
        <WhatsAppButton 
          phoneNumber={whatsappNumber} 
          message={whatsappMessage}
          className="text-lg px-8 py-4"
        >
          Fale Conosco pelo WhatsApp
        </WhatsAppButton>
        <p className="mt-6 text-sm text-gray-200">
          Cuidamos do seu jardim para que você possa apenas relaxar e aproveitar a natureza.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;