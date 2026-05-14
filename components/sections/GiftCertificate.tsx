'use client';

import { motion } from 'framer-motion';
import { Gift, Star, Check } from 'lucide-react';

export default function GiftCertificate() {
  return (
    <section id="gift-certificate" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4 flex items-center justify-center gap-3">
            <Gift className="text-accent" size={32} />
            Подарочный сертификат
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Лучший подарок для владельцев собак — знания и гармония в отношениях с питомцем
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Визуализация сертификата */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group perspective-1000"
          >
            <div className="relative bg-gradient-to-br from-surface to-background border border-decor/40 rounded-2xl p-8 shadow-2xl transform transition-transform duration-500 hover:rotate-y-6 hover:scale-[1.02]">
              {/* Золотая рамка */}
              <div className="absolute inset-4 border-2 border-accent/30 rounded-xl pointer-events-none" />
              
              <div className="text-center space-y-6 relative z-10">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Star className="text-accent" size={32} fill="currentColor" />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-2xl font-bold text-text-primary">Сертификат</h3>
                  <p className="text-accent font-medium tracking-widest uppercase text-sm mt-1">На обучение собак</p>
                </div>

                <div className="py-4 border-t border-b border-decor/20">
                  <p className="text-text-secondary italic">
                    "На курс дрессировки или консультацию кинолога"
                  </p>
                </div>

                <div className="flex justify-between items-end pt-2">
                  <div className="text-left">
                    <p className="text-xs text-text-secondary uppercase tracking-wider">Кому:</p>
                    <p className="font-handwriting text-xl text-text-primary mt-1">Счастливчику</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-text-secondary uppercase tracking-wider">Номинал:</p>
                    <p className="font-heading text-xl text-accent font-bold mt-1">Любой</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Описание и преимущества */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-heading text-2xl font-semibold text-text-primary">
                Почему это идеальный подарок?
              </h3>
              <ul className="space-y-3">
                {[
                  "Помогает решить проблемы с поведением собаки",
                  "Укрепляет связь между хозяином и питомцем",
                  "Действует бессрочно",
                  "Можно использовать для онлайн-консультации",
                  "Красивое оформление (PDF или печатная версия)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-text-secondary">
                    <div className="mt-1 min-w-[20px]">
                      <Check size={16} className="text-accent" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-decor/30">
              <p className="text-sm text-text-secondary mb-4">
                Номинал сертификата может быть любым: от одной консультации до полного курса дрессировки.
              </p>
              <a
                href="#contacts"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.querySelector('#contacts');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                  // Можно было бы добавить логику автозаполнения темы письма, но пока просто скролл
                }}
                className="block w-full py-4 bg-accent text-white text-center font-medium rounded-full hover:bg-accent-light transition-colors shadow-lg hover:shadow-accent/20"
              >
                Заказать сертификат
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}