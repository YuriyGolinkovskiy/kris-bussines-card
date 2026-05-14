'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  // Показываем баннер после небольшой задержки, чтобы не пугать пользователя сразу
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosed(true);
    setIsVisible(false);
  };

  if (isClosed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-[400px] z-40"
        >
          <div className="bg-surface border border-accent/30 shadow-2xl rounded-xl p-4 flex items-start gap-4 relative overflow-hidden">
            {/* Декоративный элемент */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
            
            <div className="bg-accent/10 p-2 rounded-lg text-accent shrink-0">
              <Gift size={24} />
            </div>
            
            <div className="flex-grow pr-6">
              <h4 className="font-heading font-bold text-text-primary text-sm mb-1">
                Скидка 10% на первый урок!
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Запишитесь на консультацию до конца месяца и получите скидку на любой курс дрессировки.
              </p>
            </div>

            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Закрыть"
            >
              <X size={16} />
            </button>

            <a
              href="#contacts"
              onClick={(e) => {
                e.preventDefault();
                handleClose(); // Закрываем баннер при клике
                document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="absolute bottom-0 right-0 left-0 h-1 bg-accent/20 hover:bg-accent transition-colors cursor-pointer"
              title="Перейти к записи"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}