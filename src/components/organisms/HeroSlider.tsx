'use client';

import { motion, wrap } from 'framer-motion';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { HeroCard } from '../molecules/HeroCard';
import { IntroAnimation } from '../atoms/IntroAnimation';
import { ChevronLeft, ChevronRight, CloudCog, LucideDollarSign } from 'lucide-react';
import { Bubble } from '../atoms/Bubble';
import Image from 'next/image';
import { ITalents } from '@/types/talents';


// sliding window should be [-1, 0, 1]
// so the visible range is <= 1
const VISIBLE_RANGE = 1;

interface IHeroSliderProps {
  talents: ITalents[]
}

export const HeroSlider = ({ talents }: IHeroSliderProps) => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);


  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const total = useMemo(() => talents?.length || 0, [talents]);

  const next = useCallback(() => {
    setIndex((i) => i + 1);
  }, [setIndex]);

  const prev = useCallback(() => {
    setIndex((i) => i - 1);
  }, [setIndex]);

  return (
    <IntroAnimation className="mt-12 md:mt-0 w-full md:w-xl flex justify-center relative mx-auto">
      <button
        onClick={prev}
        className="absolute -left-2 md:left-0 top-1/2 z-30 w-10 h-10 md:w-12 md:h-12 
        rounded-full cursor-pointer flex items-center justify-center">
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute -right-2 md:right-0 top-1/2 z-30 w-10 h-10 md:w-12 md:h-12 
        rounded-full cursor-pointer flex items-center justify-center">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="h-[360px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {talents?.map((item, i) => {
          const virtualIndex = wrap(0, total, index);
          const offset = wrap(-1, total - 1, i - virtualIndex);

          const isInsideWindow = Math.abs(offset) <= VISIBLE_RANGE;

          if (!isInsideWindow) {
            return null;
          }

          const isCenter = offset === 0;
          const baseOffset = width < 640 ? 60 : 110;

          const scale = isCenter ? 1 : 0.85;
          const x = offset * baseOffset;
          const z = isCenter ? 20 : 10;
          const y = 40;

          return (
            <motion.div
              key={item.id}
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

              <HeroCard talents={item} />

              {isCenter && (
                <Bubble className="absolute -top-10 md:top-20 lg:top-10 xl:-top-5 bg-white text-[#00C696] rounded-lg">
                  <div className='bg-[#BBF32D] w-[26px] h-[26px] min-w-[26px] min-h-[26px] rounded-full flex talents-center justify-center'>
                    <Image alt='dollar-sign' src={'/dollar.png'} width={12} height={12} />
                  </div>

                  <h3 className="text-m md:text-xl font-black">{item.salary}</h3>
                </Bubble>
              )}

            </motion.div>
          );
        })}
      </div>
    </IntroAnimation>
  );
}
