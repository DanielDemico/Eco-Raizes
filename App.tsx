import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import StoreCarousel from './components/StoreCarousel';
import Footer from './components/Footer';
import PersonalizacaoVasos from './components/PersonalizacaoVasos';
import { WHATSAPP_NUMBER, WHATSAPP_GREETING_MESSAGE } from './constants';

const App: React.FC = () => {
  React.useEffect(() => {
    document.title = "Eco Raízes - Soluções em Paisagismo e Manutenção Verde";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar whatsappNumber={WHATSAPP_NUMBER} />
      <main className="flex-grow">
        <HeroSection 
          whatsappNumber={WHATSAPP_NUMBER} 
          whatsappMessage={WHATSAPP_GREETING_MESSAGE} 
        />
        <div className="container mx-auto px-12">
          <AboutSection />
          <ServicesSection 
            whatsappNumber={WHATSAPP_NUMBER} 
            whatsappMessage={WHATSAPP_GREETING_MESSAGE}
          />
          <PersonalizacaoVasos />
          <StoreCarousel 
            whatsappNumber={WHATSAPP_NUMBER} 
            whatsappMessage={WHATSAPP_GREETING_MESSAGE}
          />
        </div>
      </main>
      <Footer whatsappNumber={WHATSAPP_NUMBER} />
    </div>
  );
};

export default App;