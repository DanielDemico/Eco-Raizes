import React, { useRef, useState } from 'react';
import { STORE_CATEGORIES } from '../constants';
import { Category } from '../types';
import WhatsAppButton from './WhatsAppButton';
// WhatsAppButton is not directly used here for each card, but a general one is at the bottom.
// If individual buttons were needed, import WhatsAppButton from './WhatsAppButton';

interface StoreCarouselProps {
  whatsappNumber: string;
  whatsappMessage: string; // General message for the main button
}

const CARD_WIDTH = 320 + 24; // w-80 + space-x-6 (Tailwind: 320px + 24px)

const StoreCarousel: React.FC<StoreCarouselProps> = ({ whatsappNumber, whatsappMessage }) => {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const total = STORE_CATEGORIES.length;

  // Centraliza o card no carrossel
  const scrollToCard = (idx: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const containerWidth = container.offsetWidth;
      const scrollX = idx * CARD_WIDTH - (containerWidth - CARD_WIDTH) / 2;
      container.scrollTo({ left: scrollX, behavior: 'smooth' });
    }
  };

  // Handle arrow click
  const handleArrow = (dir: 'left' | 'right') => {
    let next = current + (dir === 'left' ? -1 : 1);
    if (next < 0) next = 0;
    if (next > total - 1) next = total - 1;
    setCurrent(next);
    scrollToCard(next);
    cardRefs.current[next]?.focus();
  };

  // Handle indicator click
  const handleIndicator = (idx: number) => {
    setCurrent(idx);
    scrollToCard(idx);
    cardRefs.current[idx]?.focus();
  };

  // Sync scroll position with current index (for touch/drag)
  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const idx = Math.round((container.scrollLeft + (container.offsetWidth - CARD_WIDTH) / 2) / CARD_WIDTH);
      if (idx !== current) setCurrent(idx);
    }
  };

  // Centraliza o card ao focar via teclado
  const handleCardFocus = (idx: number) => {
    setCurrent(idx);
    scrollToCard(idx);
  };

  return (
    <section id="loja" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-eco-green-dark mb-4">
            Categorias de Produtos em Nossa Loja
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore nossa seleção de produtos de alta qualidade para jardinagem e paisagismo. Tudo o que você precisa para seu espaço verde.
          </p>
        </div>
        <div className="relative">
          {/* Setas */}
          <button
            aria-label="Anterior"
            onClick={() => handleArrow('left')}
            className="hidden md:flex items-center justify-center absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-eco-green hover:text-white transition disabled:opacity-30"
            disabled={current === 0}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            aria-label="Próximo"
            onClick={() => handleArrow('right')}
            className="hidden md:flex items-center justify-center absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-eco-green hover:text-white transition disabled:opacity-30"
            disabled={current === total - 1}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {/* Carrossel */}
          <div
            ref={scrollRef}
            className="flex space-x-6 pb-8 pt-4 snap-x snap-mandatory scroll-smooth no-scrollbar select-none px-8"
            style={{scrollBehavior: 'smooth', overflowX: 'hidden', cursor: 'grab'}}
            tabIndex={-1}
            onScroll={handleScroll}
          >
            {STORE_CATEGORIES.map((category: Category, idx: number) => (
              <div
                key={category.id}
                ref={el => cardRefs.current[idx] = el}
                className={`snap-center flex-shrink-0 w-80 bg-eco-light rounded-xl shadow-lg transition-transform duration-300
                  ${idx === current ? 'scale-105 border-4 border-eco-green z-10' : 'opacity-70'}
                  focus:outline-none focus:ring-4 focus:ring-eco-green/50
                `}
                style={{scrollSnapAlign: 'center', outline: 'none'}}
                tabIndex={0}
                onFocus={() => handleCardFocus(idx)}
              >
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-eco-green-dark mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 h-20 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">{category.description}</p>
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre a categoria: ${category.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-eco-green hover:text-eco-green-dark font-medium inline-flex items-center group"
                  >
                    Consultar via WhatsApp
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* Indicadores */}
          <div className="flex justify-center mt-4 gap-2">
            {STORE_CATEGORIES.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Ir para categoria ${idx + 1}`}
                className={`w-3 h-3 rounded-full border border-eco-green transition bg-white ${idx === current ? 'bg-eco-green' : ''}`}
                onClick={() => handleIndicator(idx)}
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
           <p className="text-lg text-gray-700 mb-6">
            Não encontrou o que procurava ou precisa de ajuda?
          </p>
          <WhatsAppButton
            phoneNumber={whatsappNumber}
            message={whatsappMessage}
            className="text-lg px-8 py-4"
          >
            Fale com um Especialista
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default StoreCarousel;