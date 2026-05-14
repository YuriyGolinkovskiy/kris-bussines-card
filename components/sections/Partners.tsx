'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { FaHeart, FaStar, FaCheckCircle } from 'react-icons/fa';

const partners = [
  {
    id: 1,
    name: 'ВетКлиника "Здоровый Хвост"',
    category: 'Ветеринария',
    description: 'Рекомендую для регулярных осмотров и вакцинации. Профессиональный подход и любовь к животным.',
    icon: FaHeart,
    link: '#',
  },
  {
    id: 2,
    name: 'Зоомагазин "Лапки-Царапки"',
    category: 'Корма и игрушки',
    description: 'Широкий выбор качественных кормов и безопасных игрушек для дрессировки.',
    icon: FaStar,
    link: '#',
  },
  {
    id: 3,
    name: 'Груминг-салон "Пушистик"',
    category: 'Груминг',
    description: 'Бережный уход за шерстью. Мастера умеют находить подход даже к самым непоседливым собакам.',
    icon: FaCheckCircle,
    link: '#',
  },
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Партнеры и рекомендации
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Специалисты и магазины, которым я доверяю своих подопечных.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.id}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="block bg-surface p-8 rounded-xl border border-decor/30 shadow-md hover:shadow-xl hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <partner.icon size={24} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-decor">
                  {partner.category}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
                {partner.name}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {partner.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
