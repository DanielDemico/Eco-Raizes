import React from 'react';
import { Service } from '../types';
import WhatsAppButton from './WhatsAppButton';

const servicesData: Service[] = [
  {
    id: '1',
    title: "Manutenção de Áreas Verdes",
    description: "Cuidado especializado para jardins, condomínios, empresas e espaços públicos. Inclui poda, adubação, controle de pragas e irrigação.",
    icon: <SparklesIcon />,
  },
  {
    id: '2',
    title: "Projetos de Paisagismo",
    description: "Criação de projetos personalizados que harmonizam estética, funcionalidade e sustentabilidade para seu espaço.",
    icon: <PencilAltIcon />,
  },
  {
    id: '3',
    title: "Implantação de Jardins",
    description: "Execução completa de projetos paisagísticos, desde o preparo do solo até o plantio e acabamentos finais.",
    icon: <CollectionIcon />,
  },
  {
    id: '4',
    title: "Consultoria em Jardinagem",
    description: "Orientação técnica para cuidados com plantas, solução de problemas e otimização do seu jardim ou horta.",
    icon: <ChatAlt2Icon />,
  },
];

function SparklesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function PencilAltIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );
}

function CollectionIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );
}

function ChatAlt2Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  );
}

interface ServicesSectionProps {
  whatsappNumber: string;
  whatsappMessage: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ whatsappNumber, whatsappMessage }) => {
  return (
    <section id="servicos" className="py-16 sm:py-24 bg-eco-light">
      <div className="container mx-auto px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-eco-green-dark mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para cuidar do seu paraíso verde, com foco especial na excelência em <strong className="text-eco-green-dark">manutenção de áreas verdes</strong>.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={service.id} 
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center
                          ${index === 0 ? 'border-4 border-eco-green transform scale-105' : ''}`} // Highlight first service
            >
              <div className={`mb-6 p-3 rounded-full ${index === 0 ? 'bg-eco-green text-white' : 'bg-eco-light'}`}>
                {/* Ensure icon uses correct color when highlighted */}
                 {index === 0 ? React.cloneElement(service.icon as React.ReactElement, { className: 'h-10 w-10 text-white' }) : service.icon || <SparklesIcon />}
              </div>
              <h3 className={`text-2xl font-semibold mb-3 ${index === 0 ? 'text-eco-green-dark' : 'text-gray-800'}`}>
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
               {index === 0 && (
                <p className="text-sm text-eco-green-dark font-semibold mb-4">
                  Nosso serviço mais procurado!
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <WhatsAppButton 
            phoneNumber={whatsappNumber} 
            message={whatsappMessage}
            className="text-lg px-8 py-4"
          >
            Solicite um Orçamento
          </WhatsAppButton>
          <p className="mt-4 text-gray-600">Ou entre em contato para discutir suas necessidades específicas.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;