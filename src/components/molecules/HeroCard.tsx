import { ITalents } from '@/types/talents';
import Image from 'next/image';
import { Typography } from '../atoms/Typography';
import { Tag } from '../atoms/Tag';

type Props = {
  talents: ITalents;
};

export const HeroCard = ({ talents }: Props) => (
  <article
    className={`
        bg-white 
        w-[220px] h-[320px] p-3 
        sm:w-64 sm:h-[350px] sm:p-4
        md:w-[292px] md:h-[408px] md:p-6 
        rounded-2xl text-gray-900 text-center shadow-2xl
      `}>
    <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 md:w-[120px] md:h-[120px]">
      <Image
        fill
        className="object-cover rounded-full border border-gray-200"
        src={talents.imageUrl}
        alt={talents.name}
        sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 120px"
        priority
      />

      <Image
        className="absolute bottom-1 right-1"
        src={talents.countryImageUrl}
        alt="Country flag"
        width={25}
        height={18}
      />
    </div>

    <Typography as="h3" variant="h3" weight="black" className="mt-4 text-[#24252F]">
      {talents.name}
    </Typography>

    <Typography variant="caption" weight="bold" className="text-[#4A77FF] mt-2">
      {talents.role} · <span className="font-black">{talents.experience}</span>
    </Typography>

    <ul className="flex flex-wrap gap-1.5 sm:gap-[4px] justify-center mt-4 sm:mt-6 md:mt-10">
      {talents.skills?.map((skill) => (
        <Tag key={skill}>{skill}</Tag>
      ))}
    </ul>
  </article>
);
