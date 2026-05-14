'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    name: 'Анна М.',
    photo: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779835/review-1_j2rbys.jpg',
    rating: 5,
    text: 'Кристина — настоящий профессионал! Наша собака перестала тянуть поводок уже после третьего занятия. Очень довольны результатом!',
    isVideo: false,
  },
  {
    id: 2,
    name: 'Дмитрий К.',
    photo: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779836/review-2_fg4wpb.jpg',
    rating: 5,
    text: 'Обратились с проблемой агрессии у лабрадора. Через 2 месяца занятий собака стала спокойной и послушной. Рекомендую!',
    isVideo: false,
  },
  {
    id: 3,
    name: 'Елена В.',
    photo: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779839/review-3_rav1kk.jpg',
    rating: 5,
    text: 'Проходили курс социализации для щенка корги. Кристина нашла подход и к собаке, и к нам. Спасибо за терпение!',
    isVideo: true,
    videoUrl: 'https://www.youtube.com/embed/Qb4KUktbpzQ?si=2hTvg5_p-htdaTa2',
  },
  {
    id: 4,
    name: 'Михаил С.',
    photo: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779840/review-4_uztko2.jpg',
    rating: 5,
    text: 'Онлайн-консультация помогла решить проблему с разрушением дома. Думали, что придётся отдавать собаку, но Кристина спасла ситуацию.',
    isVideo: false,
  },
  {
    id: 5,
    name: 'Ольга П.',
    photo: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779853/review-5_bmqx66.jpg',
    rating: 5,
    text: 'Замечательный специалист! Наша хаски теперь ходит рядом без поводка. Курс прошёл легко и с удовольствием для собаки.',
    isVideo: false,
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-background bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Что говорят владельцы собак о нашей работе
          </p>
        </motion.div>

        {/* Карусель */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / visibleCount}% - 1rem)` }}
                >
                  <motion.div
                    className="bg-background rounded-xl p-6 border border-decor/30 shadow-md h-full flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Фото и имя */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src={review.photo}
                          alt={review.name}
                          fill
                          className="rounded-full object-cover border-2 border-decor/30"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary">{review.name}</p>
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={14} className="fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Текст отзыва */}
                    <p className="text-text-secondary text-sm flex-grow mb-4">{review.text}</p>

                    {/* Видео-отзыв */}
                    {review.isVideo && (
                      <button
                        onClick={() => setShowVideo(review.id)}
                        className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm font-medium mt-auto"
                      >
                        <Play size={16} />
                        Смотреть видео-отзыв
                      </button>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопки навигации */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-surface p-2 rounded-full shadow-lg border border-decor/30 hover:bg-accent hover:text-white transition-colors hidden md:block"
              aria-label="Предыдущий"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {currentIndex < maxIndex && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-surface p-2 rounded-full shadow-lg border border-decor/30 hover:bg-accent hover:text-white transition-colors hidden md:block"
              aria-label="Следующий"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Индикаторы */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(maxIndex + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentIndex ? 'bg-accent' : 'bg-decor/30'
              }`}
              aria-label={`Перейти к отзыву ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Модалка для видео */}
      {showVideo !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowVideo(null)}
        >
          <div
            className="bg-surface rounded-xl overflow-hidden max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video">
              <iframe
                src={reviews.find((r) => r.id === showVideo)?.videoUrl}
                title="Видео-отзыв"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
