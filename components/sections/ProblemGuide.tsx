'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaDog, FaVolumeUp, FaCouch, FaWalking, FaCheckCircle } from 'react-icons/fa';
import { colors } from '@/lib/design-tokens';

const problems = [
  {
    id: 'pulling',
    title: 'Тянет поводок',
    icon: FaWalking,
    advice: 'Используйте шлейку с передним креплением и отрабатывайте команду «Рядом». Начните с коротких прогулок без раздражителей.',
  },
  {
    id: 'barking',
    title: 'Лает на всех подряд',
    icon: FaVolumeUp,
    advice: 'Не ругайте за лай, а переключайте внимание. Научите собаку команде «Тише» и поощряйте спокойствие.',
  },
  {
    id: 'chewing',
    title: 'Грызет мебель и вещи',
    icon: FaCouch,
    advice: 'Уберите ценные вещи, обеспечьте собаку игрушками. Часто это признак скуки или недостатка активности.',
  },
  {
    id: 'aggression',
    title: 'Агрессия к другим собакам',
    icon: FaDog,
    advice: 'Держите дистанцию от других собак и работайте над выдержкой. В сложных случаях нужна очная консультация.',
  },
];

export default function ProblemGuide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProblem = problems.find((p) => p.id === selectedId);

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
            Гид по проблемам поведения
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Выберите проблему, с которой вы столкнулись, чтобы получить первую рекомендацию.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {problems.map((problem) => (
            <button
              key={problem.id}
              onClick={() => setSelectedId(problem.id)}
              className="p-6 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center gap-3"
              style={{
                backgroundColor: selectedId === problem.id ? colors.accent : colors.surface,
                color: selectedId === problem.id ? '#fff' : colors.textPrimary,
                borderColor: selectedId === problem.id ? colors.accent : colors.decor + '4D',
                boxShadow: selectedId === problem.id ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none',
                transform: selectedId === problem.id ? 'scale(1.05)' : 'scale(1)',
              }}
              onMouseEnter={(e) => {
                if (selectedId !== problem.id) {
                  e.currentTarget.style.borderColor = colors.accent;
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedId !== problem.id) {
                  e.currentTarget.style.borderColor = colors.decor + '4D';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              <problem.icon size={32} />
              <span className="font-medium text-sm md:text-base">{problem.title}</span>
            </button>
          ))}
        </div>

        {selectedProblem && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-surface p-8 rounded-xl border border-decor/30 shadow-md max-w-3xl mx-auto text-center"
          >
            <h3
              className="font-heading text-2xl font-bold mb-4"
              style={{ color: selectedId === selectedProblem.id ? colors.accent : colors.textPrimary }}
            >
              {selectedProblem.title}
            </h3>
            <p className="mb-6 leading-relaxed" style={{ color: colors.textSecondary }}>
              {selectedProblem.advice}
            </p>
            <a
              href="#contacts"
              className="inline-flex items-center justify-center px-8 py-3 text-white font-medium rounded-full shadow-md"
              style={{ backgroundColor: colors.accent }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.accentLight;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.accent;
              }}
            >
              Записаться на консультацию
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
