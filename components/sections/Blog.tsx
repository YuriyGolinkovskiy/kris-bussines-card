'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: 'Как приучить щенка к туалету?',
    excerpt: '5 простых шагов для быстрого результата без стресса для питомца.',
    content: `
      <p class="mb-4">Приучение щенка к туалету — одна из первых задач нового владельца. Вот несколько важных правил:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Режим:</strong> Выводите щенка на улицу сразу после сна, еды и активной игры.</li>
        <li><strong>Похвала:</strong> Всегда хвалите собаку и давайте лакомство сразу после того, как она сделала дела на улице.</li>
        <li><strong>Никаких наказаний:</strong> Тыкать носом в лужу бесполезно и вредно. Это только научит щенка бояться вас и есть свои экскременты.</li>
        <li><strong>Уборка:</strong> Тщательно мойте места промахов специальными средствами, уничтожающими запах.</li>
      </ul>
      <p>Помните, что до 6 месяцев щенок физиологически не может терпеть долго. Будьте терпеливы!</p>
    `,
    image: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778780309/puppy-potty_cftw2q.jpg',
    date: '10 мая 2024',
    readTime: '5 мин',
  },
  {
    id: 2,
    title: 'Почему собака тянет поводок?',
    excerpt: 'Разбираем основные причины и способы обучения хождению на провисшем поводке.',
    content: `
      <p class="mb-4">Тяга поводка — самая частая проблема. Причины могут быть разными:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Избыток энергии:</strong> Собака не выгуляна физически и ментально.</li>
        <li><strong>Привычка:</strong> Если раньше ей было можно тянуть (например, в шлейке), она будет делать это по инерции.</li>
        <li><strong>Страх или интерес:</strong> Стремление убежать от страха или быстрее добраться до цели.</li>
      </ul>
      <p>Мы используем метод «дерева»: останавливаемся каждый раз, когда поводок натягивается. Идем дальше только когда он провис.</p>
    `,
    image: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778780308/leash-pulling_emzfxs.jpg',
    date: '15 мая 2024',
    readTime: '7 мин',
  },
  {
    id: 3,
    title: 'Социализация: мифы и реальность',
    excerpt: 'Почему просто "водить на площадку" недостаточно, а иногда и вредно.',
    content: `
      <p class="mb-4">Социализация — это не только общение с другими собаками. Это адаптация к миру:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Шум города, транспорт, люди в одежде, дети, другие животные.</li>
        <li>Важно показывать щенку мир в период до 4-5 месяцев (период социализации).</li>
        <li>Общение с собаками должно быть дозированным и только с адекватными партнерами.</li>
      </ul>
      <p>Негативный опыт в детстве может испортить жизнь взрослой собаке, поэтому контролируйте все контакты.</p>
    `,
    image: 'https://res.cloudinary.com/dyqr2osxh/image/upload/v1778780309/socialization_ddyhex.jpg',
    date: '20 мая 2024',
    readTime: '6 мин',
  },
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  return (
    <section id="blog" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Блог и советы
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Полезные материалы для владельцев собак
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              className="bg-background rounded-xl overflow-hidden border border-decor/30 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedArticle(article)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-text-secondary mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {article.readTime}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <span className="mt-auto text-accent font-medium text-sm group-hover:underline">
                  Читать далее
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Модальное окно статьи */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-background rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 w-full flex-shrink-0">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                className="object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors shadow-lg"
                onClick={() => setSelectedArticle(null)}
                aria-label="Закрыть"
              >
                <X size={20} className="text-text-primary" />
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {selectedArticle.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {selectedArticle.readTime}
                </span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-6">
                {selectedArticle.title}
              </h3>
              <div 
                className="prose prose-stone max-w-none text-text-secondary"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}