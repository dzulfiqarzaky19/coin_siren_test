'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IntroAnimation } from '../ui/animation/IntroAnimation';

const categoriesDummy = [
  { id: 1, title: '해외 마케팅', icon: 'marketing' },
  { id: 2, title: '퍼블리셔', icon: 'publisher' },
  { id: 3, title: '개발자(제도사)', icon: 'developer' },
  { id: 4, title: '해외 세일즈', icon: 'sales' },
  { id: 5, title: '해외 CS', icon: 'cs' },
];

const DELAY = 5000; // 5 seconds
export const HeroCategory = () => {
  const [categories, setCategories] = useState(categoriesDummy);

  useEffect(() => {
    const swapDelay = setInterval(() => {
      setCategories((prev) => {
        if (prev.length === 0) return prev;

        const newCategories = [...prev];
        const last = newCategories.pop();
        if (!last) return prev;

        newCategories.unshift(last);
        return newCategories;
      });
    }, DELAY);

    return () => clearInterval(swapDelay);
  }, []);

  return (
    <IntroAnimation className="container hidden sm:visible mt-20 mx-auto sm:flex overflow-x-auto scrollbar-hidden  flex-nowrap gap-2.5">
      {categories.map((category) => (
        <motion.div
          layout
          key={category.id}
          className="mt-8 w-[332px] min-w-[332px] h-[88px] text-center bg-white/20 p-4 rounded-xl flex gap-6 items-center ">

          <div className="w-14 h-14 bg-white/40 rounded-lg" />
          
          <span className="text-white text-xl font-black px-4 py-2 rounded-full ">{category.title}</span>
        </motion.div>
      ))}
    </IntroAnimation>
  );
};
