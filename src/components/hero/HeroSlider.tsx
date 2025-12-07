'use client';

import { motion, wrap } from 'framer-motion';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import HeroCard from './HeroCard';
import { IntroAnimation } from '../ui/animation/IntroAnimation';
import { ChevronLeft, ChevronRight, LucideDollarSign } from 'lucide-react';
import { Bubble } from '../ui/Bubble';

type Candidate = {
  id: string;
  name: string;
  role: string;
  experience: string;
  skills: string[];
  salary: string;
  imageUrl: string;
  countryImageUrl: string;
};

// our sliding window is -1, 0, 1
// so our visible range should be <= 1
const VISIBLE_RANGE = 1;

export default function HeroSlider({ items }: { items: Candidate[] }) {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const total = useMemo(() => items.length, [items]);

  const next = useCallback(() => {
    setIndex((i) => i + 1);
  }, [setIndex]);

  const prev = useCallback(() => {
    setIndex((i) => i - 1);
  }, [setIndex]);

  return (
    <IntroAnimation className="mt-12 sm:mt-0 w-full sm:w-xl flex justify-center relative mx-auto">
      <button
        onClick={prev}
        className="absolute -left-2 sm:left-0 top-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 
        p-2 sm:p-3 rounded-full hover:bg-white/60 cursor-pointer flex items-center justify-center">
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute -right-2 sm:right-0 top-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 
        p-2 sm:p-3 rounded-full hover:bg-white/60 cursor-pointer flex items-center justify-center">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="h-[360px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {items.map((item, i) => {
          const virtualIndex = wrap(0, total, index);
          const offset = wrap(-1, total - 1, i - virtualIndex);

          const isInsideWindow = Math.abs(offset) <= VISIBLE_RANGE;
          const isCenter = offset === 0;

          const baseOffset = width < 640 ? 50 : 120;
          const scale = isCenter ? 1 : 0.85;
          const x = offset * baseOffset;
          const z = isCenter ? 20 : 10;
          const y = 40;

          if (!isInsideWindow) {
            return null;
          }

          return (
            <React.Fragment key={item.id}>
              {isCenter && (
                <Bubble className="absolute top-0 bg-white text-[#00C696] rounded-lg">
                  <LucideDollarSign className="bg-[#BBF32D] rounded-full" stroke="#00C696" width={26} height={26} />

                  <h3 className="text-xl font-bold">{item.salary}</h3>
                </Bubble>
              )}

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ zIndex: z }}
                animate={{
                  transform: `translate(${x}px, ${y}px) scale(${scale})`,
                }}
                whileHover={{ scale: isCenter ? 1.05 : 0.9 }}
                transition={{
                  type: 'tween',
                  stiffness: 100,
                  damping: 22,
                  delay: i * 0.05,
                }}>
                <HeroCard data={item} />
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </IntroAnimation>
  );
}
