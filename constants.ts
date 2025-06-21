
import { Category } from './types';

export const WHATSAPP_NUMBER = "+5511999998888"; // Replace with actual number
export const WHATSAPP_GREETING_MESSAGE = "Olá! Tenho interesse nos serviços e produtos da Eco Raízes. Poderia me ajudar?";

export const STORE_CATEGORIES: Category[] = [
  {
    id: '1',
    name: "Mudas de Plantas",
    description: "Nativas, ornamentais e frutíferas para seu jardim.",
    imageUrl: "https://picsum.photos/400/300?random=10"
  },
  {
    id: '2',
    name: "Ferramentas de Jardinagem",
    description: "Equipamentos de qualidade para facilitar o cuidado com suas plantas.",
    imageUrl: "https://picsum.photos/400/300?random=11"
  },
  {
    id: '3',
    name: "Adubos e Fertilizantes",
    description: "Orgânicos e minerais para nutrir seu solo e plantas.",
    imageUrl: "https://picsum.photos/400/300?random=12"
  },
  {
    id: '4',
    name: "Vasos e Suportes",
    description: "Designs variados para complementar sua decoração.",
    imageUrl: "https://picsum.photos/400/300?random=13"
  },
  {
    id: '5',
    name: "Decoração de Jardim",
    description: "Itens para embelezar e personalizar seu espaço verde.",
    imageUrl: "https://picsum.photos/400/300?random=14"
  },
  {
    id: '6',
    name: "Sementes Diversas",
    description: "Flores, hortaliças e temperos para cultivar em casa.",
    imageUrl: "https://picsum.photos/400/300?random=15"
  }
];

export const NAV_LINKS = [
  { href: '#hero', label: 'Início' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#loja', label: 'Loja' },
];