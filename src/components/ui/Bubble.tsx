import { cn } from '@/utils/cn';
import React from 'react';

type TArrowPosition = 'left' | 'center' | 'right';

interface IBubbleProps {
  children: React.ReactNode;
  className?: string;
  bubbleClassName?: string;
  arrowPosition?: TArrowPosition;
}

const baseClass = 'relative bg-white text-[#00C696] flex items-center justify-center gap-2 p-2 rounded-lg';

const arrowBaseClasses =
  "before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rotate-45 before:-bottom-1 before:z-10";

export const Bubble = ({ children, className = '', arrowPosition = 'center', bubbleClassName = '' }: IBubbleProps) => {

  const positionClasses = {
    left: 'before:left-6 before:-translate-x-1/2',
    center: 'before:left-1/2 before:-translate-x-1/2',
    right: 'before:right-8 before:translate-x-1/2',
  };

  const finalArrowClasses = cn(arrowBaseClasses, positionClasses[arrowPosition], bubbleClassName);

  return (
    <div className={cn('relative inline-block', className)}>
      <div className={cn(baseClass, finalArrowClasses)}>{children}</div>
    </div>
  );
};
