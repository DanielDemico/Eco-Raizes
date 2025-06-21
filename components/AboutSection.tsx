import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-eco-green-dark mb-6">
              Sobre a Eco Raízes
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Na Eco Raízes, somos apaixonados pela natureza e dedicados a transformar espaços através de soluções de jardinagem e paisagismo criativas e sustentáveis. Com anos de experiência, nossa missão é conectar pessoas com o verde, promovendo bem-estar e valorizando cada ambiente.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Acreditamos que um jardim bem cuidado é mais do que estética; é um refúgio, uma fonte de inspiração e um compromisso com o meio ambiente. Por isso, oferecemos desde a <strong className="text-eco-green-dark">manutenção de áreas verdes</strong> de pequena à grande escala, até projetos paisagísticos personalizados que refletem a identidade de cada cliente.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossa equipe é formada por profissionais qualificados e comprometidos em entregar serviços de excelência, utilizando técnicas que respeitam os ciclos naturais e priorizam a saúde das plantas e do solo.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://picsum.photos/600/450?random=2&nature" 
              alt="Jardim bem cuidado pela Eco Raízes" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;