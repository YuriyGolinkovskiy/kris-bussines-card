'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import PromoBanner from './PromoBanner';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <PromoBanner />

      {/* Кнопка "Наверх" */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-accent text-white shadow-lg transition-all duration-300 hover:bg-accent-light ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Наверх"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
