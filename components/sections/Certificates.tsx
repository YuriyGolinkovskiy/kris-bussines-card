'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const certificates = [
  { id: 1, src: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779834/cert1_t7uotv.jpg', alt: 'Сертификат — Школа кинологии K9' },
  { id: 2, src: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779816/cert2_aphlzi.jpg', alt: 'Сертификат — Курс коррекции поведения' },
  { id: 3, src: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779818/cert3_ylwl8b.jpg', alt: 'Сертификат — Семинар по социализации' },
  { id: 4, src: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779817/cert4_cqflma.jpg', alt: 'Сертификат — Международная конференция' },
  { id: 5, src: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779827/cert5_pwuzjo.png', alt: 'Сертификат — Позитивное подкрепление' },
  { id: 6, src: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779819/cert6_wxqcbj.jpg', alt: 'Сертификат — Работа с агрессией' },
];

export default function Certificates() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 768 ? 3 : 1);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, certificates.length - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-20 md:py-28 bg-background bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Сертификаты и дипломы
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Постоянно повышаю квалификацию на ведущих курсах и семинарах
          </p>
        </motion.div>

        {/* Карусель */}
        <div className="relative group">
          <motion.div
            className="overflow-hidden"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x > 50) prevSlide();
              else if (info.offset.x < -50) nextSlide();
            }}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <motion.div
                    className="cursor-pointer rounded-xl overflow-hidden border border-decor/30 shadow-md hover:shadow-xl hover:border-accent/50 transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => setSelectedIndex(certificates.findIndex((c) => c.id === cert.id))}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={300}
                      height={400}
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Кнопки навигации */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 bg-surface/90 p-2 rounded-full shadow-lg border border-decor/30 hover:bg-accent hover:text-white transition-colors z-10"
            aria-label="Предыдущий"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 bg-surface/90 p-2 rounded-full shadow-lg border border-decor/30 hover:bg-accent hover:text-white transition-colors z-10"
            aria-label="Следующий"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Lightbox */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-accent-light transition-colors"
              onClick={() => setSelectedIndex(null)}
              aria-label="Закрыть"
            >
              <X size={32} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent-light transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((selectedIndex - 1 + certificates.length) % certificates.length);
              }}
            >
              <ChevronLeft size={32} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent-light transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((selectedIndex + 1) % certificates.length);
              }}
            >
              <ChevronRight size={32} />
            </button>
            <Image
              src={certificates[selectedIndex].src}
              alt={certificates[selectedIndex].alt}
              width={800}
              height={1000}
              className="max-h-[85vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}
