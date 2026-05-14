'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Award, Clock, Users, Headphones } from 'lucide-react';

const achievements = [
  { value: 8, suffix: '+', label: 'лет опыта', icon: Clock },
  { value: 150, suffix: '+', label: 'счастливых собак', icon: Users },
  { value: 12, suffix: '+', label: 'сертификатов', icon: Award },
  { value: 24, suffix: '/7', label: 'поддержка клиентов', icon: Headphones },
];

function CountUp({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = value / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Фото */}
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden border-2 border-decor/30 shadow-lg">
              <Image
                src="https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779834/kristina_nldlib.jpg"
                alt="Кристина Лютик — кинолог"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Текст + видео */}
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary">
              О себе
            </h2>

            <div className="space-y-4 text-text-secondary">
              <p>
                Меня зовут Кристина, и я профессиональный кинолог с 8-летним опытом работы.
                Моя миссия — помочь вам и вашей собаке понять друг друга.
              </p>
              <p>
                Я работаю с породами любой сложности: от щенков до взрослых собак с поведенческими
                проблемами. Использую современные методы позитивного подкрепления без насилия.
              </p>
              <p>
                Имею 12+ сертификатов ведущих российских и международных школ кинологии.
                Регулярно повышаю квалификацию на семинарах и конференциях.
              </p>
            </div>

            {/* Видео */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-decor/30 bg-black">
              <video
                controls
                className="w-full aspect-video"
                preload="metadata"
                poster="https://res.cloudinary.com/dyqr2osxh/image/upload/v1778779845/video-poster_wsjrxp.jpg"
                playsInline
              >
                <source src="https://res.cloudinary.com/dyqr2osxh/video/upload/v1778782037/about_n7wfmc.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            </div>
          </div>
        </motion.div>

        {/* Счетчики достижений */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="bg-background rounded-xl p-6 text-center border border-decor/30 shadow-md hover:shadow-xl hover:border-accent/50 transition-all duration-300 hover:scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                  <Icon size={24} />
                </div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-accent mb-2">
                  <CountUp value={item.value} />
                  {item.suffix}
                </div>
                <p className="text-text-secondary text-sm">{item.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
