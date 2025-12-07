import { cn } from '@/utils/cn';
import React from 'react';

type TVariant = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption';
type TWeight = 'regular' | 'bold' | 'black';

interface ITypographyProps extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType;
    variant?: TVariant;
    weight?: TWeight;
    children: React.ReactNode;
}

const variantStyles: Record<TVariant, string> = {
    h1: 'text-4xl md:text-5xl leading-tight',
    h2: 'text-3xl font-bold',
    h3: 'text-xl md:text-2xl', // Hero cards
    body1: 'text-base md:text-lg',
    body2: 'text-[14px]', // Footer items
    caption: 'text-sm',
};

const weightStyles: Record<TWeight, string> = {
    regular: 'font-normal', // 400
    bold: 'font-bold', // 700
    black: 'font-black', // 900
};

export const Typography = ({
    as: Component = 'p',
    variant = 'body1',
    weight = 'regular',
    className,
    children,
    ...props
}: ITypographyProps) => {
    return (
        <Component
            className={cn(variantStyles[variant], weightStyles[weight], className)}
            {...props}>
            {children}
        </Component>
    );
};
