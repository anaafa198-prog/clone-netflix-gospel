import { Movie, MovieCategory, PaymentPlan } from './types';

export const featuredMovie: Movie = {
  id: '1',
  title: 'A Paixão de Cristo',
  description: 'Um épico bíblico que retrata os últimos dias de Jesus Cristo, desde sua entrada triunfal em Jerusalém até sua crucificação e ressurreição. Uma obra cinematográfica poderosa que toca o coração de milhões.',
  thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
  backdrop: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
  duration: '2h 7min',
  year: 2004,
  genre: ['Drama', 'Religioso', 'Épico'],
  rating: 4.8,
  isNew: false,
  isTrending: true
};

export const movieCategories: MovieCategory[] = [
  {
    id: 'trending',
    name: 'Em Alta',
    movies: [
      {
        id: '2',
        title: 'O Milagre de Fátima',
        description: 'A história das aparições de Nossa Senhora às três crianças pastoras em Fátima.',
        thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop',
        backdrop: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop',
        duration: '1h 52min',
        year: 2020,
        genre: ['Drama', 'Religioso'],
        rating: 4.6,
        isTrending: true
      },
      {
        id: '3',
        title: 'Ressurreição',
        description: 'A história da ressurreição de Jesus contada através dos olhos de um centurião romano.',
        thumbnail: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=400&h=600&fit=crop',
        backdrop: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=1200&h=600&fit=crop',
        duration: '1h 47min',
        year: 2016,
        genre: ['Drama', 'Aventura'],
        rating: 4.4,
        isTrending: true
      }
    ]
  },
  {
    id: 'biblical',
    name: 'Filmes Bíblicos',
    movies: [
      {
        id: '4',
        title: 'Moisés',
        description: 'A épica jornada de Moisés desde o Egito até a Terra Prometida.',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
        backdrop: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
        duration: '2h 30min',
        year: 2019,
        genre: ['Épico', 'Drama'],
        rating: 4.7
      },
      {
        id: '5',
        title: 'Davi e Golias',
        description: 'A história do jovem pastor que derrotou o gigante filisteu.',
        thumbnail: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=600&fit=crop',
        backdrop: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&h=600&fit=crop',
        duration: '1h 38min',
        year: 2018,
        genre: ['Aventura', 'Drama'],
        rating: 4.3
      }
    ]
  },
  {
    id: 'series',
    name: 'Séries Gospel',
    movies: [
      {
        id: '6',
        title: 'Os Escolhidos',
        description: 'Uma série que retrata a vida de Jesus e seus discípulos de forma única.',
        thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
        backdrop: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
        duration: 'Temporadas 1-4',
        year: 2021,
        genre: ['Drama', 'Série'],
        rating: 4.9,
        isNew: true
      },
      {
        id: '7',
        title: 'Histórias da Bíblia',
        description: 'Série que conta as principais histórias do Antigo e Novo Testamento.',
        thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop',
        backdrop: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=600&fit=crop',
        duration: '3 Temporadas',
        year: 2020,
        genre: ['Educativo', 'Família'],
        rating: 4.5
      }
    ]
  }
];

export const paymentPlans: PaymentPlan[] = [
  {
    id: 'basic',
    name: 'Básico',
    price: 19.90,
    features: [
      'Acesso a todo catálogo',
      '1 tela simultânea',
      'Qualidade HD',
      'Sem anúncios'
    ]
  },
  {
    id: 'standard',
    name: 'Padrão',
    price: 29.90,
    features: [
      'Acesso a todo catálogo',
      '2 telas simultâneas',
      'Qualidade Full HD',
      'Sem anúncios',
      'Download offline'
    ],
    popular: true
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 39.90,
    features: [
      'Acesso a todo catálogo',
      '4 telas simultâneas',
      'Qualidade 4K + HDR',
      'Sem anúncios',
      'Download offline',
      'Conteúdo exclusivo'
    ]
  }
];