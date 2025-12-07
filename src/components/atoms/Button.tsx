import { cn } from '@/utils/cn';
import Link from 'next/link';
import { Typography } from './Typography';
import React from 'react';

type ButtonVariant = 'primary' | 'ghost' | 'icon' | 'text';

interface IButtonProps {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: ButtonVariant;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  label,
  icon,
  onClick,
  href,
  className,
  variant = 'primary',
  ariaLabel,
  type = 'button',
}: IButtonProps) => {
  const baseClasses = 'transition-all duration-200 flex items-center justify-center';

  const variantClasses = {
    primary: 'bg-white text-[#4A77FF] px-6 py-2 rounded-lg hover:bg-opacity-90 font-bold',
    ghost: 'bg-transparent text-white hover:opacity-80 p-0',
    icon: 'z-30 w-10 h-10 md:w-12 md:h-12 rounded-full cursor-pointer hover:opacity-80 active:scale-95',
    text: 'bg-transparent hover:opacity-90 p-0',
  };

  const content = (
    <>
      {icon && <span className={cn(label ? 'mr-2' : '')}>{icon}</span>}
      {label && (
        <Typography as="span" variant="body2" weight="bold">
          {label}
        </Typography>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseClasses, variantClasses[variant], className)}
        aria-label={ariaLabel || label}
        onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseClasses, variantClasses[variant], className)}
      aria-label={ariaLabel || label}>
      {content}
    </button>
  );
};
