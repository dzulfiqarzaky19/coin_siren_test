import { Check } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Typography } from './Typography';

interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export const Checkbox = ({ label, className, ...props }: ICheckboxProps) => (
  <label
    className={cn(
      'flex gap-2 items-center py-2 rounded-lg cursor-pointer hover:bg-white/80 transition relative',
      className,
    )}>
    <div className="relative flex items-center justify-center w-6 h-6">
      <input
        type="checkbox"
        className="peer appearance-none h-6 w-6 rounded-md cursor-pointer bg-indigo-100 border-2 border-indigo-200 checked:bg-indigo-100"
        {...props}
      />

      <Check className="absolute h-4 w-4 text-[#2C599B] stroke-[3px] pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" />
    </div>

    {label && (
      <Typography as="span" variant="body1" weight="bold">
        {label}
      </Typography>
    )}
  </label>
);
