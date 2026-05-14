'use client';

import { motion } from 'framer-motion';
import { Dog, Brain, Users, Laptop } from 'lucide-react';

const services = [
  {
    title: 'Базовый курс послушания',
    description: 'Основные команды: сидеть, лежать, стоять, рядом, ко мне. Формирование правильного поведения в быту.',
    price: 'от 2 500 ₽',
    icon: Dog,
  },
  {
    title: 'Коррекция поведения',
    description: 'Работа с агрессией, страхами, деструктивным поведением. Индивидуальный подход к каждой проблеме.',
    price: 'от 3 000 ₽',
    icon: Brain,
  },
  {
    title: 'Социализация щенка',
    description: 'Адаптация к окружающей среде, знакомство с другими собаками и людьми. Правильный старт воспитания.',
    price: 'от 2 000 ₽',
    icon: Users,
  },
  {
    title: 'Онлайн-консультация',
    description: 'Дистанционная помощь для владельцев из других городов. Разбор ситуации, рекомендации, план действий.',
    price: 'от 1 500 ₽',
    icon: Laptop,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Услуги
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Подберу оптимальную программу обучения для вас и вашей собаки
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="bg-background rounded-xl p-6 border border-decor/30 shadow-md hover:shadow-xl hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-decor/30">
                  <span className="text-accent font-semibold">{service.price}</span>
                  <button
                    onClick={() => {
                      document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-accent hover:text-accent-light transition-colors font-medium"
                  >
                    Записаться →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
