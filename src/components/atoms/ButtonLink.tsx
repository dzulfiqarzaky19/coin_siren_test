import { cn } from '@/utils/cn';
import { Typography } from './Typography';
import Link from 'next/link';

interface IButtonProps {
  label: string;
  href?: string;
  className?: string;
}

export const ButtonLink = ({ label, href = '#', className }: IButtonProps) => (
  <Link
    href={href}
    className={cn(
      'hidden md:block bg-white text-[#4A77FF] px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors',
      className,
    )}>
    <Typography as="span" variant="body2" weight="bold">
      {label}
    </Typography>
  </Link>
);
