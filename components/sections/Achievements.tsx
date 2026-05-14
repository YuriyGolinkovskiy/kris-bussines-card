'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Award, Clock, Users, Headphones } from 'lucide-react';

const achievements = [
  {
    value: 8,
    suffix: '+',
    label: 'лет опыта',
    icon: Clock,
  },
  {
    value: 150,
    suffix: '+',
    label: 'счастливых собак',
    icon: Users,
  },
  {
    value: 12,
    suffix: '+',
    label: 'сертификатов',
    icon: Award,
  },
  {
    value: 24,
    suffix: '/7',
    label: 'поддержка клиентов',
    icon: Headphones,
  },
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

export default function Achievements() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="bg-surface rounded-xl p-6 text-center border border-decor/30 shadow-md hover:shadow-xl hover:border-accent/50 transition-all duration-300 hover:scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
