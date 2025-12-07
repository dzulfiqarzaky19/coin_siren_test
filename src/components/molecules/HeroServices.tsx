'use client';
import { useEffect, useState } from 'react';
import { IntroAnimation } from '../atoms/IntroAnimation';
import { IServices } from '@/types/services';
import { HeroServicesItem } from './HeroServicesItem';

const DELAY = 5000;
const LEFT_PADDING = `
  pl-4 
  sm:pl-[calc((100vw-640px)/2+1rem)] 
  md:pl-[calc((100vw-768px)/2+1rem)] 
  lg:pl-[calc((100vw-1024px)/2+1rem)] 
  xl:pl-[calc((100vw-1280px)/2+1rem)] 
  2xl:pl-[calc((100vw-1536px)/2+1rem)]
`;

interface IHeroCategoryProps {
  servicesProps: IServices[];
}

export const HeroServices = ({ servicesProps }: IHeroCategoryProps) => {
  const [services, setServices] = useState(servicesProps);

  useEffect(() => {
    if (!services || services?.length === 0) return;

    const swapDelay = setInterval(() => {
      setServices((prev) => {
        if (prev.length === 0) return prev;

        const newServices = [...prev];
        const last = newServices.pop();

        if (!last) return prev;

        newServices.unshift(last);

        return newServices;
      });
    }, DELAY);

    return () => clearInterval(swapDelay);
  }, [services]);

  if (!services?.length) return null;

  return (
    <IntroAnimation
      className={`hidden sm:visible mt-20 sm:flex overflow-x-auto scrollbar-hidden flex-nowrap gap-2.5 ${LEFT_PADDING}`}>
      {services?.map((service) => (
        <HeroServicesItem key={service.id} service={service} />
      ))}
    </IntroAnimation>
  );
};
