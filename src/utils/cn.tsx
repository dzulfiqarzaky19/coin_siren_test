import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// This is the common "cn" utility function
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
