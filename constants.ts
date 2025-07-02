
import { Category } from './types';

export const WHATSAPP_NUMBER = "(14) 99895-6066"; // Replace with actual number
export const WHATSAPP_GREETING_MESSAGE = "Olá! Tenho interesse nos serviços e produtos da Eco Raízes. Poderia me ajudar?";

export const STORE_CATEGORIES: Category[] = [
  {
    id: '1',
    name: "Mudas de Plantas",
    description: "Nativas, ornamentais e frutíferas para seu jardim.",
    imageUrl: "./eco-seedlings.png"
  },
  {
    id: '2',
    name: "Pimenteiras",
    description: "Variedades de pimentas para cultivo e tempero.",
    imageUrl: "/eco-peppers.png"
  },
  {
    id: '3',
    name: "Suculentas",
    description: "Plantas resistentes e decorativas, ideais para ambientes internos.",
    imageUrl: "/eco-succulents.png"
  },
  {
    id: '4',
    name: "Ornamentais",
    description: "Plantas que embelezam jardins, varandas e interiores.",
    imageUrl: "/eco-ornamentals.png"
  },
  {
    id: '5',
    name: "Demonstração de carrosel",
    description: "Lorem Ipsum in dolor",
    imageUrl: "https://picsum.photos/400/300?random=14"
  },
  {
    id: '6',
    name: "Demonstração de carrosel",
    description: "Lorem Ipsum in dolor",
    imageUrl: "https://picsum.photos/400/300?random=15"
  }
];

export const NAV_LINKS = [
  { href: '#hero', label: 'Início' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#loja', label: 'Loja' },
];