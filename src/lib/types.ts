export interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  backdrop: string;
  duration: string;
  year: number;
  genre: string[];
  rating: number;
  videoUrl?: string;
  isNew?: boolean;
  isTrending?: boolean;
}

export interface MovieCategory {
  id: string;
  name: string;
  movies: Movie[];
}

export interface PaymentPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}