import { motion } from 'framer-motion';
import { HeroCard } from '../molecules/HeroCard';
import { Bubble } from '../atoms/Bubble';
import { Typography } from '../atoms/Typography';
import Image from 'next/image';
import { ITalents } from '@/types/talents';

interface IHeroSliderItemProps {
  item: ITalents;
  offset: number;
  isCenter: boolean;
  baseOffset: number;
  index: number;
}

export const HeroSliderItem = ({ item, offset, isCenter, baseOffset, index }: IHeroSliderItemProps) => {
  const scale = isCenter ? 1 : 0.85;
  const x = offset * baseOffset;
  const z = isCenter ? 20 : 10;
  const y = 40;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ zIndex: z }}
      animate={{
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
      }}
      whileHover={{ scale: isCenter ? 1.05 : 0.9 }}
      transition={{
        type: 'tween',
        stiffness: 100,
        damping: 22,
        delay: index * 0.05,
      }}>
      <HeroCard talents={item} />

      {isCenter && (
        <Bubble className="absolute -top-10 md:top-20 lg:top-10 xl:-top-5 bg-white text-[#00C696] rounded-lg">
          <div className="bg-[#BBF3D2] w-[26px] h-[26px] min-w-[26px] min-h-[26px] rounded-full flex items-center justify-center">
            <Image alt="dollar-sign" src={'/dollar.png'} width={12} height={12} />
          </div>

          <Typography as="h3" variant="h3" weight="black" className="text-base md:text-xl">
            {item.salary}
          </Typography>
        </Bubble>
      )}
    </motion.div>
  );
};
