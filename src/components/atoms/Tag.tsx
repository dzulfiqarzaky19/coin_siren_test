import { cn } from '@/utils/cn';
import { Typography } from './Typography';

interface ITagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag = ({ children, className }: ITagProps) => (
  <Typography
    as="li"
    variant="caption"
    weight="black"
    className={cn(
      'bg-gray/40 border border-gray-[#C1C5CF] text-[11px] sm:text-sm px-3 py-1 rounded-md text-[#5E626F]',
      className,
    )}>
    {children}
  </Typography>
);
