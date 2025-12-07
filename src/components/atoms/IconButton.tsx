import { cn } from '@/utils/cn';
import React from 'react';

interface IIconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
}

export const IconButton = ({ icon, onClick, className, ariaLabel }: IIconButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        'z-30 w-10 h-10 md:w-12 md:h-12 rounded-full cursor-pointer flex items-center justify-center transition-opacity hover:opacity-80 active:scale-95',
        className,
      )}>
      {icon}
    </button>
  );
};
