'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaPaw, FaHeart, FaBrain } from 'react-icons/fa';

const methods = [
  {
    id: 1,
    title: 'Без удавок и строгачей',
    description: 'Я использую только гуманные методы дрессировки. Никакого физического насилия, удавок или электрошоковых ошейников. Мы работаем на доверии.',
    icon: FaPaw,
  },
  {
    id: 2,
    title: 'Мотивация и позитив',
    description: 'В основе моего подхода — положительное подкрепление. Мы поощряем желаемое поведение, что делает обучение радостным для собаки и владельца.',
    icon: FaHeart,
  },
  {
    id: 3,
    title: 'Зоопсихология',
    description: 'Я учитываю индивидуальные особенности психики каждой собаки. Понимание причин поведения важнее, чем просто подавление симптомов.',
    icon: FaBrain,
  },
];

export default function Methods() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Мои методы
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Я верю, что дрессировка должна быть комфортной для обоих. Вот три кита, на которых строится моя работа.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="bg-background p-8 rounded-xl border border-decor/30 shadow-sm flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <method.icon size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                {method.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
