'use client';

import { Movie } from '@/lib/types';
import { ChevronLeft, ChevronRight, Play, Plus } from 'lucide-react';
import { useState } from 'react';

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
}

export default function MovieCarousel({ title, movies }: MovieCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById(`carousel-${title}`);
    if (container) {
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : scrollPosition + scrollAmount;
      
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="relative mb-8">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4 px-4 md:px-12">
        {title}
      </h2>
      
      <div className="relative group">
        {/* Botão Esquerda */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Container dos filmes */}
        <div
          id={`carousel-${title}`}
          className="flex gap-2 overflow-x-auto scrollbar-hide px-4 md:px-12 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0 w-48 md:w-64 group/item cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={movie.thumbnail}
                  alt={movie.title}
                  className="w-full h-72 md:h-96 object-cover transition-transform duration-300 group-hover/item:scale-105"
                />
                
                {/* Overlay com informações */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm md:text-base mb-2">
                      {movie.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-green-400 text-sm font-semibold">
                        {movie.rating}/5
                      </span>
                      <span className="text-gray-300 text-sm">
                        {movie.year}
                      </span>
                      <span className="text-gray-300 text-sm">
                        {movie.duration}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-1">
                        <Play className="w-3 h-3" />
                        Assistir
                      </button>
                      <button className="bg-gray-600/80 text-white p-1 rounded-full hover:bg-gray-500 transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-2 left-2 flex gap-2">
                  {movie.isNew && (
                    <span className="bg-[#E50914] text-white text-xs px-2 py-1 rounded font-bold">
                      NOVO
                    </span>
                  )}
                  {movie.isTrending && (
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded font-bold">
                      EM ALTA
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Direita */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}