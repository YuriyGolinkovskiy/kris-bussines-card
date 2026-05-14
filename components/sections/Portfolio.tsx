'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

const portfolioItems = [
  {
    id: 1,
    before: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778780376/before-1_f2i3qp.jpg',
    after: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778780362/after-1_jy7i2k.jpg',
    title: 'Агрессия к другим собакам',
    description: 'Немецкая овчарка, 2 года. Курс коррекции — 2 месяца.',
  },
  {
    id: 2,
    before: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778780378/before-2_igkehp.jpg',
    after: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778780364/after-2_ywkoa3.jpg',
    title: 'Страх прогулок',
    description: 'Йоркширский терьер, 1 год. Социализация — 6 недель.',
  },
  {
    id: 3,
    before: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778780382/before-3_hikt2n.jpg',
    after: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778780366/after-3_etxqk1.jpg',
    title: 'Разрушение дома',
    description: 'Лабрадор, 8 месяцев. Базовый курс послушания — 3 месяца.',
  },
  {
    id: 4,
    before: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778780383/before-4_ble6no.jpg',
    after: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778780369/after-4_ufqrcr.jpg',
    title: 'Тянет поводок',
    description: 'Хаски, 3 года. Коррекция поведения на прогулке — 1 месяц.',
  },
  {
    id: 5,
    before: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778780386/before-5_ega6ov.jpg',
    after: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778780371/after-5_nv3jhw.jpg',
    title: 'Не слушается команд',
    description: 'Джек-рассел, 1.5 года. Интенсивный курс — 2 месяца.',
  },
  {
    id: 6,
    before: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778780388/before-6_et15lm.jpg',
    after: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778780374/after-6_sjjdak.jpg',
    title: 'Боится людей',
    description: 'Шелти, 4 года. Работа со страхами — 2 месяца.',
  },
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Портфолио
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Реальные кейсы работы с собаками: до и после курса занятий
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-background rounded-xl overflow-hidden border border-decor/30 shadow-md hover:shadow-xl hover:border-accent/50 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.after}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-medium bg-accent px-2 py-1 rounded">
                  До / После
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Модальное окно */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent-light transition-colors"
            onClick={() => setSelectedItem(null)}
            aria-label="Закрыть"
          >
            <X size={32} />
          </button>
          <div
            className="max-w-4xl w-full bg-surface rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-2 gap-1">
              <div className="relative aspect-video">
                <span className="absolute top-2 left-2 bg-accent text-white text-xs px-2 py-1 rounded z-10">
                  До
                </span>
                <Image
                  src={selectedItem.before}
                  alt={`${selectedItem.title} — до`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video">
                <span className="absolute top-2 left-2 bg-success text-white text-xs px-2 py-1 rounded z-10">
                  После
                </span>
                <Image
                  src={selectedItem.after}
                  alt={`${selectedItem.title} — после`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-text-secondary">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
