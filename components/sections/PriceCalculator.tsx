'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Check } from 'lucide-react';

// Базовые цены
const PRICES = {
  basic: 2500, // Базовый курс (за занятие)
  correction: 3000, // Коррекция поведения (за занятие)
  puppy: 2000, // Щенячий курс (за занятие)
  online: 1500, // Онлайн консультация
  homeVisit: 500, // Доплата за выезд на дом
};

export default function PriceCalculator() {
  const [serviceType, setServiceType] = useState<'basic' | 'correction' | 'puppy' | 'online'>('basic');
  const [sessions, setSessions] = useState(4);
  const [isHomeVisit, setIsHomeVisit] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let pricePerSession = PRICES[serviceType];
    
    if (serviceType === 'online') {
      // Для онлайн консультаций выезд не учитывается
      setTotalPrice(pricePerSession * sessions);
    } else {
      if (isHomeVisit) {
        pricePerSession += PRICES.homeVisit;
      }
      setTotalPrice(pricePerSession * sessions);
    }
  }, [serviceType, sessions, isHomeVisit]);

  return (
    <section id="calculator" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4 flex items-center justify-center gap-3">
            <Calculator className="text-accent" />
            Калькулятор стоимости
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Рассчитайте предварительную стоимость курса дрессировки
          </p>
        </motion.div>

        <div className="bg-background rounded-2xl p-8 border border-decor/30 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Левая колонка - настройки */}
            <div className="space-y-8">
              {/* Тип услуги */}
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-3">
                  Выберите услугу
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'basic', label: 'Базовый курс послушания' },
                    { id: 'correction', label: 'Коррекция поведения' },
                    { id: 'puppy', label: 'Щенячий курс (до 6 мес)' },
                    { id: 'online', label: 'Онлайн-консультация' },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setServiceType(option.id as any)}
                      className={`w-full text-left px-4 py-3 rounded-lg border transition-all flex items-center justify-between ${
                        serviceType === option.id
                          ? 'border-accent bg-accent/5 text-accent'
                          : 'border-decor/30 hover:border-accent/50 text-text-primary'
                      }`}
                    >
                      <span>{option.label}</span>
                      {serviceType === option.id && <Check size={18} />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Формат проведения (если не онлайн) */}
              {serviceType !== 'online' && (
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-3">
                    Место проведения
                  </label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setIsHomeVisit(false)}
                      className={`flex-1 py-2 px-4 rounded-lg border transition-all ${
                        !isHomeVisit
                          ? 'border-accent bg-accent/5 text-accent'
                          : 'border-decor/30 hover:border-accent/50 text-text-primary'
                      }`}
                    >
                      На площадке
                    </button>
                    <button
                      onClick={() => setIsHomeVisit(true)}
                      className={`flex-1 py-2 px-4 rounded-lg border transition-all ${
                        isHomeVisit
                          ? 'border-accent bg-accent/5 text-accent'
                          : 'border-decor/30 hover:border-accent/50 text-text-primary'
                      }`}
                    >
                      Выезд на дом (+500₽)
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Правая колонка - результат */}
            <div className="flex flex-col justify-between bg-surface rounded-xl p-6 border border-decor/20">
              <div>
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-6">
                  Детали расчета
                </h3>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between pb-2 border-b border-decor/20">
                    <span className="text-text-secondary">Тип услуги:</span>
                    <span className="font-medium text-text-primary">
                      {serviceType === 'basic' && 'Базовый курс'}
                      {serviceType === 'correction' && 'Коррекция'}
                      {serviceType === 'puppy' && 'Щенячий курс'}
                      {serviceType === 'online' && 'Онлайн'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b border-decor/20">
                    <span className="text-text-secondary">Количество занятий:</span>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setSessions(Math.max(1, sessions - 1))}
                        className="w-6 h-6 rounded-full bg-background border border-decor/30 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                      >
                        -
                      </button>
                      <span className="font-medium text-text-primary w-4 text-center">{sessions}</span>
                      <button 
                        onClick={() => setSessions(Math.min(20, sessions + 1))}
                        className="w-6 h-6 rounded-full bg-background border border-decor/30 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {serviceType !== 'online' && (
                    <div className="flex justify-between pb-2 border-b border-decor/20">
                      <span className="text-text-secondary">Формат:</span>
                      <span className="font-medium text-text-primary">
                        {isHomeVisit ? 'Выезд на дом' : 'Площадка'}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-decor/20">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-text-secondary">Итоговая стоимость:</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={totalPrice}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="font-heading text-3xl font-bold text-accent"
                    >
                      {totalPrice.toLocaleString('ru-RU')} ₽
                    </motion.span>
                  </AnimatePresence>
                </div>
                
                <a
                  href="#contacts"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block w-full py-3 bg-accent text-white text-center font-medium rounded-full hover:bg-accent-light transition-colors shadow-md"
                >
                  Записаться на занятия
                </a>
                <p className="text-xs text-text-secondary/60 text-center mt-3">
                  * Точная стоимость определяется после первичной консультации
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}