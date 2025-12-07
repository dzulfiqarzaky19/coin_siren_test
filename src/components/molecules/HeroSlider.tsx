'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { wrap } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IntroAnimation } from '../atoms/IntroAnimation';
import { ITalents } from '@/types/talents';
import { HeroSliderItem } from './HeroSliderItem';
import { IconButton } from '../atoms/IconButton';

const VISIBLE_RANGE = 1;

interface IHeroSliderProps {
  talents: ITalents[];
}

export const HeroSlider = ({ talents }: IHeroSliderProps) => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
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
      <IconButton
        icon={<ChevronLeft className="w-6 h-6" />}
        onClick={prev}
        className="absolute -left-2 md:left-0 top-1/2"
        ariaLabel="Previous slide"
      />

      <IconButton
        icon={<ChevronRight className="w-6 h-6" />}
        onClick={next}
        className="absolute -right-2 md:right-0 top-1/2"
        ariaLabel="Next slide"
      />

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

          return (
            <HeroSliderItem
              key={item.id}
              item={item}
              offset={offset}
              isCenter={isCenter}
              baseOffset={baseOffset}
              index={i}
            />
          );
        })}
      </div>
    </IntroAnimation>
  );
};
