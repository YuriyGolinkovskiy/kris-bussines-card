'use client';

import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTelegramPlane, FaWhatsapp, FaInstagram, FaVk } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Динамический импорт карты для SSR
const MapComponent = dynamic(() => import('@/components/ui/Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[300px] bg-decor/20 rounded-lg flex items-center justify-center">
      <p className="text-text-secondary">Загрузка карты...</p>
    </div>
  ),
});

const formSchema = z.object({
  name: z.string().min(2, 'Введите имя'),
  phone: z.string().min(10, 'Введите корректный номер'),
  breed: z.string().optional(),
  message: z.string().min(10, 'Сообщение должно быть не менее 10 символов'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contacts() {
  const [isMounted, setIsMounted] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubmit = async (data: FormData) => {
    setFormStatus('sending');

    // EmailJS конфигурация
    // ВАЖНО: Замените эти значения на свои из dashboard.emailjs.com
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

    const templateParams = {
      from_name: data.name,
      from_phone: data.phone,
      dog_breed: data.breed || 'Не указано',
      message: data.message,
      to_name: 'Кристина',
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setFormStatus('success');
      reset();
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('Ошибка отправки:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section id="contacts" className="py-20 md:py-28 bg-background bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Контакты
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Свяжитесь со мной удобным способом или оставьте заявку
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Левая колонка — контакты */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-background rounded-xl p-6 border border-decor/30 shadow-md">
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-6">
                Контактная информация
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:+79001234567"
                  className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <FaPhoneAlt size={18} />
                  </div>
                  <span>+7 (900) 123-45-67</span>
                </a>

                <a
                  href="mailto:kristina@dogtrainer.ru"
                  className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <FaEnvelope size={18} />
                  </div>
                  <span>kristina@dogtrainer.ru</span>
                </a>

                <div className="flex items-center gap-4 text-text-secondary">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <span>Анапа и Краснодарский край</span>
                </div>
              </div>
            </div>

            {/* Соцсети */}
            <div className="bg-background rounded-xl p-6 border border-decor/30 shadow-md">
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">
                Социальные сети
              </h3>
              <div className="flex gap-4">
                {/* Telegram */}
                <a
                  href="https://t.me/kristina_dogtrainer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#0088cc]/10 flex items-center justify-center text-[#0088cc] hover:bg-[#0088cc] hover:text-white transition-colors"
                  aria-label="Telegram"
                >
                  <FaTelegramPlane size={20} />
                </a>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/79001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com/kristina_dogtrainer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#E1306C]/10 flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                 <FaInstagram size={20} />
                </a>
                {/* VK */}
                <a
                  href="https://vk.com/kristina_dogtrainer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#0077FF]/10 flex items-center justify-center text-[#0077FF] hover:bg-[#0077FF] hover:text-white transition-colors"
                  aria-label="VKontakte"
                >
                  <FaVk size={20} />
                </a>
              </div>
            </div>

            {/* Карта зоны выезда */}
            <div className="bg-background rounded-xl p-6 border border-decor/30 shadow-md">
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">
                Зона выезда
              </h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                {isMounted && <MapComponent />}
              </div>
              <div className="mt-3 space-y-2 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>До 5 км от центра — базовая стоимость</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>5-20 км от центра — +500₽ к стоимости</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>Более 20 км — обсуждается индивидуально</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Правая колонка — форма */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-background rounded-xl p-8 border border-decor/30 shadow-md"
            >
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-6">
                Записаться на консультацию
              </h3>

              {formStatus === 'success' && (
                <div className="mb-4 p-3 bg-success/10 text-success rounded-lg text-sm">
                  Спасибо! Ваша заявка отправлена. Я свяжусь с вами в ближайшее время.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-4 p-3 bg-error/10 text-error rounded-lg text-sm">
                  Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь со мной по телефону.
                </div>
              )}

              <div className="space-y-5">
                {/* Имя */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Ваше имя *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-decor/30 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors text-text-primary placeholder:text-text-secondary/50"
                    placeholder="Анна"
                  />
                  {errors.name && (
                    <p className="text-error text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Телефон */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">
                    Телефон *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-decor/30 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors text-text-primary placeholder:text-text-secondary/50"
                    placeholder="+7 (___) ___-__-__"
                  />
                  {errors.phone && (
                    <p className="text-error text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Порода собаки */}
                <div>
                  <label htmlFor="breed" className="block text-sm font-medium text-text-secondary mb-2">
                    Порода собаки
                  </label>
                  <input
                    {...register('breed')}
                    type="text"
                    id="breed"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-decor/30 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors text-text-primary placeholder:text-text-secondary/50"
                    placeholder="Например: Лабрадор, 2 года"
                  />
                </div>

                {/* Сообщение */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Описание проблемы *
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-decor/30 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors text-text-primary placeholder:text-text-secondary/50 resize-none"
                    placeholder="Расскажите кратко о вашей ситуации..."
                  />
                  {errors.message && (
                    <p className="text-error text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Кнопка отправки */}
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-4 bg-accent text-white font-medium rounded-full hover:bg-accent-light transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? 'Отправка...' : 'Отправить заявку'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
