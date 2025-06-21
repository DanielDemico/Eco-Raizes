import React from 'react';

interface FooterProps {
  whatsappNumber: string;
}

const Footer: React.FC<FooterProps> = ({ whatsappNumber }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/ecoraizes', icon: InstagramIcon },
    { name: 'Facebook', href: 'https://facebook.com/ecoraizes', icon: FacebookIcon },
    // { name: 'LinkedIn', href: '#', icon: LinkedInIcon }, // Example
  ];

  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent("Olá! Visitei o site da Eco Raízes e gostaria de mais informações.")}`;

  return (
    <footer className="bg-eco-green-dark text-eco-light pt-12 pb-8">
      <div className="container mx-auto px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Eco Raízes</h3>
            <p className="text-sm leading-relaxed">
              Sua parceira em jardinagem, paisagismo e manutenção de áreas verdes. Conectando você com a natureza.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#loja" className="hover:text-white transition-colors">Loja</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center">
                  <WhatsAppFooterIcon className="w-5 h-5 mr-2 flex-shrink-0" /> <span className="truncate">WhatsApp: {whatsappNumber}</span>
                </a>
              </li>
              <li>
                <a href="mailto:contato@ecoraizes.com.br" className="hover:text-white transition-colors flex items-center">
                  <MailIcon className="w-5 h-5 mr-2 flex-shrink-0" /> <span className="truncate">contato@ecoraizes.com.br</span>
                </a>
              </li>
              <li className="flex items-start"> {/* items-start for better alignment with multi-line text */}
                <LocationMarkerIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0" /> 
                <span>São Paulo, SP <br/>(Atendemos toda a região)</span>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map(social => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-eco-light hover:text-white transition-colors">
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-eco-green pt-8 text-center text-xs text-gray-400"> {/* Smaller text */}
          <p>&copy; {currentYear} Eco Raízes. Todos os direitos reservados.</p>
          <p className="mt-1">Design e Conteúdo pensados para conectar você à natureza.</p>
        </div>
      </div>
    </footer>
  );
};


// Placeholder SVG Icons - ideally, import from an icon library or separate files
const WhatsAppFooterIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.712-1.001zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z"/></svg>
);
const MailIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const LocationMarkerIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const InstagramIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919.058-1.265.07-1.644.07-4.849zm0 1.441c-3.111 0-3.465.011-4.673.067-2.618.118-3.832 1.332-3.95 3.95-.054 1.208-.065 1.562-.065 4.673s.011 3.465.065 4.673c.118 2.618 1.332 3.832 3.95 3.95 1.208.054 1.562.065 4.673.065s3.465-.011 4.673-.065c2.618-.118 3.832-1.332 3.95-3.95.054-1.208.065-1.562.065-4.673s-.011-3.465-.065-4.673c-.118-2.618-1.332-3.832-3.95-3.95-1.208-.054-1.562.065-4.673-.065zm0 5.816a3.535 3.535 0 100 7.07 3.535 3.535 0 000-7.07zm0 5.625a2.09 2.09 0 110-4.18 2.09 2.09 0 010 4.18zM16.949 5.17a1.229 1.229 0 100 2.458 1.229 1.229 0 000-2.458z"/></svg>
);
const FacebookIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
);


export default Footer;