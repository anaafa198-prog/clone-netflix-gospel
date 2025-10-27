'use client';

import { useState } from 'react';
import { Play, Info, Search, Bell, User, Menu } from 'lucide-react';
import MovieCarousel from '@/components/MovieCarousel';
import PaymentModal from '@/components/PaymentModal';
import { featuredMovie, movieCategories, paymentPlans } from '@/lib/movies-data';
import { PaymentPlan } from '@/lib/types';

export default function Home() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PaymentPlan>(paymentPlans[1]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const openPaymentModal = (plan: PaymentPlan) => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navbar */}
      <header className="fixed top-0 w-full z-40 bg-gradient-to-b from-black/80 to-transparent">
        <nav className="flex items-center justify-between px-4 md:px-12 py-4">
          <div className="flex items-center gap-8">
            <h1 className="text-[#E50914] text-2xl md:text-3xl font-bold">
              GOSPEL FLIX
            </h1>
            
            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Início</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Filmes</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Séries</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Minha Lista</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Search className="w-6 h-6 text-white cursor-pointer hover:text-gray-300" />
            <Bell className="w-6 h-6 text-white cursor-pointer hover:text-gray-300" />
            <User className="w-6 h-6 text-white cursor-pointer hover:text-gray-300" />
            
            {/* Menu Mobile */}
            <button
              className="md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </nav>

        {/* Menu Mobile Dropdown */}
        {showMobileMenu && (
          <div className="md:hidden bg-black/95 px-4 py-4 space-y-4">
            <a href="#" className="block text-white hover:text-gray-300">Início</a>
            <a href="#" className="block text-white hover:text-gray-300">Filmes</a>
            <a href="#" className="block text-white hover:text-gray-300">Séries</a>
            <a href="#" className="block text-white hover:text-gray-300">Minha Lista</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={featuredMovie.backdrop}
            alt={featuredMovie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex items-center h-full px-4 md:px-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {featuredMovie.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              {featuredMovie.description}
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold">
                ⭐ {featuredMovie.rating}/5
              </span>
              <span className="text-gray-300">{featuredMovie.year}</span>
              <span className="text-gray-300">{featuredMovie.duration}</span>
              <div className="flex gap-1">
                {featuredMovie.genre.map((g, i) => (
                  <span key={i} className="text-gray-400 text-sm">
                    {g}{i < featuredMovie.genre.length - 1 && ' • '}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Assistir Agora
              </button>
              <button className="bg-gray-600/80 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-500 transition-colors flex items-center justify-center gap-2">
                <Info className="w-5 h-5" />
                Mais Informações
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Planos de Assinatura */}
      <section className="py-16 px-4 md:px-12 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Escolha seu Plano
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Acesse milhares de filmes e séries gospel com qualidade HD/4K. 
            Cancele quando quiser. Pagamento fácil e seguro via PIX.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {paymentPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-[#222] rounded-lg p-6 relative ${
                  plan.popular ? 'ring-2 ring-[#E50914] scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#E50914] text-white text-sm px-4 py-1 rounded-full font-bold">
                      MAIS POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-[#E50914] mb-1">
                    R$ {plan.price.toFixed(2)}
                  </div>
                  <div className="text-gray-400 text-sm">por mês</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-[#E50914] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openPaymentModal(plan)}
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-colors ${
                    plan.popular
                      ? 'bg-[#E50914] hover:bg-[#f40612] text-white'
                      : 'bg-gray-600 hover:bg-gray-500 text-white'
                  }`}
                >
                  Assinar com PIX
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo de Filmes */}
      <section className="py-8">
        {movieCategories.map((category) => (
          <MovieCarousel
            key={category.id}
            title={category.name}
            movies={category.movies}
          />
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-[#141414] py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-[#E50914] text-xl font-bold mb-4">GOSPEL FLIX</h3>
              <p className="text-gray-400 text-sm">
                A maior plataforma de streaming de conteúdo gospel do Brasil.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Início</a></li>
                <li><a href="#" className="hover:text-white">Filmes</a></li>
                <li><a href="#" className="hover:text-white">Séries</a></li>
                <li><a href="#" className="hover:text-white">Documentários</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white">Privacidade</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Pagamento</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>💳 PIX Instantâneo</li>
                <li>🔒 Pagamento Seguro</li>
                <li>📱 Fácil e Rápido</li>
                <li>❌ Cancele Quando Quiser</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 Gospel Flix. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Modal de Pagamento */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        plan={selectedPlan}
      />
    </div>
  );
}