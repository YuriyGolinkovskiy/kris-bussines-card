'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaHome } from 'react-icons/fa';
import { colors } from '@/lib/design-tokens';

const lostDogs = [
  {
    id: 1,
    name: 'Бобик',
    status: 'lost',
    location: 'Анапа, ул. Крымская',
    date: '12.05.2026',
    description: 'Черный дворовой пес, средний размер. Пропал возле парка.',
    image: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779833/lost-dog-1_c2zmvx.jpg',
  },
  {
    id: 2,
    name: 'Эрни',
    status: 'found',
    location: 'Анапа, пос. Витязево',
    date: '13.05.2026',
    description: 'Найден доберман без ошейника. Очень дружелюбный.',
    image: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779828/found-dog-1_oe9xth.jpg',
  },
  {
    id: 3,
    name: 'Луна',
    status: 'lost',
    location: 'Анапа, ул. Шевченко',
    date: '10.05.2026',
    description: 'Хаски, голубые глаза. Откликнулась на зов и убежала.',
    image: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779834/lost-dog-2_mly9zy.jpg',
  },
];

export default function LostAndFound() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState<'all' | 'lost' | 'found'>('all');

  const filteredDogs = lostDogs.filter((dog) => filter === 'all' || dog.status === filter);

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Потеряшки Анапы
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8">
            Доска объявлений о потерянных и найденных собаках. Если вы потеряли питомца или нашли его, напишите нам.
          </p>

          {/* Фильтры */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setFilter('all')}
              className="px-6 py-2 rounded-full border transition-colors"
              style={{
                backgroundColor: filter === 'all' ? colors.accent : 'transparent',
                color: filter === 'all' ? '#fff' : colors.textSecondary,
                borderColor: filter === 'all' ? colors.accent : colors.decor + '4D',
              }}
              onMouseEnter={(e) => {
                if (filter !== 'all') e.currentTarget.style.borderColor = colors.accent;
              }}
              onMouseLeave={(e) => {
                if (filter !== 'all') e.currentTarget.style.borderColor = colors.decor + '4D';
              }}
            >
              Все
            </button>
            <button
              onClick={() => setFilter('lost')}
              className="px-6 py-2 rounded-full border transition-colors flex items-center gap-2"
              style={{
                backgroundColor: filter === 'lost' ? colors.accent : 'transparent',
                color: filter === 'lost' ? '#fff' : colors.textSecondary,
                borderColor: filter === 'lost' ? colors.accent : colors.decor + '4D',
              }}
              onMouseEnter={(e) => {
                if (filter !== 'lost') e.currentTarget.style.borderColor = colors.accent;
              }}
              onMouseLeave={(e) => {
                if (filter !== 'lost') e.currentTarget.style.borderColor = colors.decor + '4D';
              }}
            >
              <FaSearch size={14} /> Потеряны
            </button>
            <button
              onClick={() => setFilter('found')}
              className="px-6 py-2 rounded-full border transition-colors flex items-center gap-2"
              style={{
                backgroundColor: filter === 'found' ? colors.accent : 'transparent',
                color: filter === 'found' ? '#fff' : colors.textSecondary,
                borderColor: filter === 'found' ? colors.accent : colors.decor + '4D',
              }}
              onMouseEnter={(e) => {
                if (filter !== 'found') e.currentTarget.style.borderColor = colors.accent;
              }}
              onMouseLeave={(e) => {
                if (filter !== 'found') e.currentTarget.style.borderColor = colors.decor + '4D';
              }}
            >
              <FaHome size={14} /> Найдены
            </button>
          </div>

          {/* Сетка карточек */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {filteredDogs.map((dog) => (
              <motion.div
                key={dog.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4 }}
                className="bg-background rounded-xl overflow-hidden border border-decor/30 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={dog.image}
                    alt={dog.name}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white ${
                      dog.status === 'lost' ? 'bg-red-600' : 'bg-green-600'
                    }`}
                  >
                    {dog.status === 'lost' ? 'ПОТЕРЯН' : 'НАЙДЕН'}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
                    {dog.name}
                  </h3>
                  <p className="text-sm text-text-secondary mb-1">📍 {dog.location}</p>
                  <p className="text-sm text-text-secondary mb-3">📅 {dog.date}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {dog.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Кнопка добавить объявление */}
          <a
            href="https://t.me/kristina_dogtrainer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-white font-medium rounded-full shadow-md"
            style={{ backgroundColor: colors.accent }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.accentLight;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.accent;
            }}
          >
            Добавить объявление в Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
