'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    question: 'С какими породами вы работаете?',
    answer: 'Я работаю со всеми породами собак, от чихуахуа до дога. Также работаю с метисами и беспородными собаками. Для каждой породы и индивидуальности подбирается свой подход и методы обучения.',
  },
  {
    question: 'Выезжаете ли вы на дом?',
    answer: 'Да, я выезжаю к клиентам в пределах города и ближайших пригородов. Стоимость выезда зависит от расстояния и обсуждается индивидуально. Также возможны занятия на нейтральной территории (площадки, парки).',
  },
  {
    question: 'Сколько занятий нужно для результата?',
    answer: 'Количество занятий зависит от возраста собаки, проблемы и ваших целей. Базовый курс обычно занимает 8-10 занятий. Коррекция поведения может потребовать от 4 до 12 занятий. Точный план составляется после первой консультации.',
  },
  {
    question: 'Можно ли заниматься онлайн?',
    answer: 'Да, я провожу онлайн-консультации для владельцев из других городов или тех, кто предпочитает удалённый формат. Онлайн-формат подходит для консультаций, разбора проблем и составления плана тренировок.',
  },
  {
    question: 'Используете ли вы строгие ошейники или электрошок?',
    answer: 'Нет, я категорически против aversive-методов (строгие ошейники, ЭШО, физическое наказание). Работаю только на позитивном подкреплении и современных методах, одобренных международной ассоциацией кинологов.',
  },
  {
    question: 'Какова стоимость одного занятия?',
    answer: 'Стоимость зависит от формата: индивидуальное занятие — от 2500₽, групповые занятия — от 1500₽, онлайн-консультация — от 1500₽. При покупке пакета из 5+ занятий предоставляется скидка 10%.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-text-secondary">
            Ответы на популярные вопросы о работе с собаками
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-xl border border-decor/30 shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-surface/50 transition-colors"
              >
                <span className="font-medium text-text-primary pr-4">{item.question}</span>
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-accent">
                  <AnimatePresence mode="wait" initial={false}>
                    {openIndex === index ? (
                      <motion.div
                        key="minus"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Minus size={18} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="plus"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Plus size={18} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5 text-text-secondary text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
