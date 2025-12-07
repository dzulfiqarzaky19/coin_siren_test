'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IntroAnimation } from '../atoms/IntroAnimation';
import Image from 'next/image';
import { IServices } from '@/types/services';
import { Typography } from '../atoms/Typography';

const DELAY = 5000;
const LEFT_PADDING = `
  pl-4 
  sm:pl-[calc((100vw-640px)/2+1rem)] 
  md:pl-[calc((100vw-768px)/2+1rem)] 
  lg:pl-[calc((100vw-1024px)/2+1rem)] 
  xl:pl-[calc((100vw-1280px)/2+1rem)] 
  2xl:pl-[calc((100vw-1536px)/2+1rem)]
`;

interface IHeroCategoryProps {
  services: IServices[];
}

export const HeroCategory = ({ services }: IHeroCategoryProps) => {
  const [categories, setCategories] = useState(services);

  useEffect(() => {
    if (!services || services?.length === 0) return;

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
  }, [services]);

  if (!categories?.length) return null;

  return (
    <IntroAnimation
      className={`hidden sm:visible mt-20 sm:flex overflow-x-auto scrollbar-hidden flex-nowrap gap-2.5 ${LEFT_PADDING}`}>
      {categories?.map((category) => (
        <motion.div
          layout
          key={category.id}
          className="mt-8 w-[332px] min-w-[332px] h-[88px] text-center bg-white/20 p-4 rounded-xl flex gap-6 items-center ">
          <div className="w-14 h-14 bg-white/40 rounded-lg flex items-center justify-center overflow-hidden">
            <Image src={category.icon} width={32} height={32} alt={category.title} className="object-contain" />
          </div>

          <Typography as="span" variant="h3" weight="black" className="text-white px-4 py-2 rounded-full">
            {category.title}
          </Typography>
        </motion.div>
      ))}
    </IntroAnimation>
  );
};
