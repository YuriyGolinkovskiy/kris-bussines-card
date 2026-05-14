'use client';

import Link from 'next/link';
import { FaTelegramPlane, FaWhatsapp, FaInstagram, FaVk } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-decor/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Копирайт */}
          <div className="text-text-secondary text-sm text-center md:text-left">
            <p>
              © {currentYear} Кристина Лютик. Все права защищены.
            </p>
            <p className="mt-1 flex items-center justify-center md:justify-start gap-1 text-xs">
              Сделано с <FaHeart size={12} className="text-accent fill-accent" /> для собак и их хозяев
            </p>
          </div>

          {/* Соцсети */}
          <div className="flex items-center gap-4">
            <a
              href="https://t.me/kristina_dogtrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#0088cc]/10 flex items-center justify-center text-[#0088cc] hover:bg-[#0088cc] hover:text-white transition-colors"
              aria-label="Telegram"
            >
              <FaTelegramPlane size={18} />
            </a>
            <a
              href="https://wa.me/79001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="https://instagram.com/kristina_dogtrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#E1306C]/10 flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://vk.com/kristina_dogtrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#0077FF]/10 flex items-center justify-center text-[#0077FF] hover:bg-[#0077FF] hover:text-white transition-colors"
              aria-label="VKontakte"
            >
              <FaVk size={18} />
            </a>
          </div>

          {/* Ссылки */}
          <nav className="flex items-center gap-6 text-sm text-text-secondary">
            <Link
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-accent transition-colors"
            >
              О себе
            </Link>
            <Link
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-accent transition-colors"
            >
              Услуги
            </Link>
            <Link
              href="#contacts"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-accent transition-colors"
            >
              Контакты
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
