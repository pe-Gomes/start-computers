export interface IProduct {
  id: number;
  description: string;
  price: number;
  priceDescription: string;
  image: string;
}

export interface ICartProduct extends IProduct {
  orderQuantity: number;
}

export const products = [
  {
    id: 1,
    description: 'Mouse gamer',
    price: 439.0,
    priceDescription: 'À vista no PIX',
    image: '../assets/mouse-3.jpg',
  },
  {
    id: 2,
    description: 'Monitor muito bom',
    price: 1200.5,
    priceDescription: 'À vista no PIX',
    desconto: 2000.0,
    image: '../assets/monitor-1.jpg',
  },
  {
    id: 3,
    description: 'Teclado excelente',
    price: 749.99,
    priceDescription: 'À vista no PIX',
    image: './assets/teclado-1.jpg',
  },
  {
    id: 4,
    description: 'Fone para quem joga FPS',
    price: 599.99,
    priceDescription: 'À vista no PIX',
    image: './assets/fone-de-ouvido-2.jpg',
  },
  {
    id: 5,
    description: 'Fone de ouvido',
    price: 299.99,
    priceDescription: 'À vista no PIX',
    image: './assets/fone-de-ouvido-1.jpg',
  },
  {
    id: 6,
    description: 'Fone de ouvido bom',
    price: 399.99,
    priceDescription: 'À vista no PIX',
    image: './assets/fone-de-ouvido-3.jpg',
  },
  {
    id: 7,
    description: 'HD 1TB',
    price: 499.99,
    priceDescription: 'À vista no PIX',
    image: './assets/hd.jpg',
  },
  {
    id: 8,
    description: 'Combo de placa de vídeos',
    price: 18449.99,
    priceDescription: 'À vista no PIX',
    image: './assets/placa-video.jpg',
  },
  {
    id: 9,
    description: 'Processador Ryzen',
    price: 1000,
    priceDescription: 'À vista no PIX',
    image: './assets/processador.jpg',
  },
  {
    id: 10,
    description: 'Notebook bom',
    price: 2500,
    priceDescription: 'À vista no PIX',
    image: './assets/laptop-1.jpg',
  },
  {
    id: 11,
    description: 'Notebook excelente',
    price: 4500,
    priceDescription: 'À vista no PIX',
    image: './assets/laptop-2.jpg',
  },
  {
    id: 12,
    description: 'Mouse barato',
    price: 20,
    priceDescription: 'À vista no PIX',
    image: './assets/mouse-1.png',
  },
  {
    id: 13,
    description: 'Mouse ótimo',
    price: 200,
    priceDescription: 'À vista no PIX',
    image: './assets/mouse-2.jpg',
  },
  {
    id: 14,
    description: 'Mouse pequeno',
    price: 50,
    priceDescription: 'À vista no PIX',
    image: './assets/mouse-4.jpg',
  },
  {
    id: 15,
    description: 'Teclado bom',
    price: 159.99,
    priceDescription: 'À vista no PIX',
    image: './assets/teclado-2.jpg',
  },
];
