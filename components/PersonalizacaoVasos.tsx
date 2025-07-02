import React from 'react';

const PersonalizacaoVasos: React.FC = () => (
  <section id="personalizacao-vasos" className="py-12 bg-eco-light flex flex-col items-center justify-center border-b border-eco-green/20">
    <div className="max-w-2xl mx-auto text-center">
      <div className="flex flex-col items-center mb-4">
        <div className="flex items-center gap-2 mb-2">
          {/* Ícone de pessoa cavando */}
          <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.5 2a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM13.5 6.5a1 1 0 00-1 1v2.09l-2.13 2.13a3.5 3.5 0 00-.97 2.48V18a1 1 0 001 1h1a1 1 0 001-1v-3.8l1.13-1.13 2.13 2.13V18a1 1 0 001 1h1a1 1 0 001-1v-4.8a3.5 3.5 0 00-.97-2.48l-3.13-3.13V7.5a1 1 0 00-1-1z" />
          </svg>
          {/* Ícone de chave inglesa */}
          <svg className="w-7 h-7 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.414 2.586a2 2 0 00-2.828 0l-2.121 2.121a1 1 0 00.707 1.707h.586v2a1 1 0 001 1h2v.586a1 1 0 001.707.707l2.121-2.121a2 2 0 000-2.828l-2.172-2.172zM7 8a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V9a1 1 0 00-1-1H7z" />
          </svg>
        </div>
        <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Em construção</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-eco-green-dark mb-2">Personalização de Vasos</h2>
      <p className="text-gray-700 text-base mb-2">Sessão em andamento</p>
    </div>
  </section>
);

export default PersonalizacaoVasos; 