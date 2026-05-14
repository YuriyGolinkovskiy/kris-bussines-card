'use client';

import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const instagramPosts = [
  { id: 1, src: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779832/insta-1_lvhxpd.jpg', alt: 'Дрессировка щенка' },
  { id: 2, src: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779831/insta-2_be1xj3.jpg', alt: 'Прогулка с хаски' },
  { id: 3, src: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779832/insta-3_uw9mlo.jpg', alt: 'Команда Рядом' },
  { id: 4, src: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779833/insta-4_zlyebq.jpg', alt: 'Счастливый владелец' },
];

export default function InstagramFeed() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4 flex items-center justify-center gap-3">
            <FaInstagram className="text-[#E1306C]" size={32} />
            Я в Instagram
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Подписывайтесь, чтобы следить за успехами наших подопечных и получать полезные советы
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/kristina_dogtrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square group overflow-hidden rounded-xl cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Оверлей при наведении */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FaInstagram className="text-white transform scale-50 group-hover:scale-100 transition-transform duration-300" size={32} />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://instagram.com/kristina_dogtrainer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#E1306C] text-[#E1306C] font-medium rounded-full hover:bg-[#E1306C] hover:text-white transition-colors"
          >
            <FaInstagram size={20} />
            Подписаться на аккаунт
          </a>
        </div>
      </div>
    </section>
  );
}