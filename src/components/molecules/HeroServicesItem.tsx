import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typography } from '../atoms/Typography';
import { IServices } from '@/types/services';

interface IHeroServicesItemProps {
  service: IServices;
}

export const HeroServicesItem = ({ service }: IHeroServicesItemProps) => {
  return (
    <motion.div
      layout
      className="mt-8 w-[332px] min-w-[332px] h-[88px] text-center bg-white/20 p-4 rounded-xl flex gap-6 items-center cursor-pointer hover:bg-white/30 transition-colors">
      <div className="w-14 h-14 bg-white/40 rounded-lg flex items-center justify-center overflow-hidden">
        <Image src={service.icon} width={32} height={32} alt={service.title} className="object-contain" />
      </div>

      <Typography as="span" variant="h3" weight="black" className="text-white px-4 py-2 rounded-full">
        {service.title}
      </Typography>
    </motion.div>
  );
};
