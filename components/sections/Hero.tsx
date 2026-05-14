'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { colors } from '@/lib/design-tokens';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background z-10" />
        <Image
          src="https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779825/hero-bg_eauiei.webp"
          alt="Кинолог с собакой в лесу"
          fill
          priority
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Контент */}
      <motion.div
        className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Кристина Лютик
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/90 mb-2 drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Профессиональный кинолог
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Помогу вам найти общий язык с вашей собакой. Воспитание, коррекция поведения, социализация — с любовью и профессионализмом.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href="#contacts"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-8 py-4 text-white font-medium rounded-full shadow-lg"
            style={{
              backgroundColor: colors.accent,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.accentLight;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.accent;
            }}
          >
            Записаться на консультацию
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
