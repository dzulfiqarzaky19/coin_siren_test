import { Divider } from '../atoms/Divider';
import { Typography } from '../atoms/Typography';
import { HERO_STATS } from '@/constants/hero';

export const HeroStats = () => (
  <div className="grid  md:grid-cols-3 gap-6 text-white mt-10">
    {HERO_STATS.map((item) => (
      <div key={item.label} className="space-y-2">
        <Divider />

        <Typography variant="body1" weight="black">
          {item.label}
        </Typography>

        <Typography variant="caption" weight="black" className="opacity-80">
          {item.value}
        </Typography>
      </div>
    ))}
  </div>
);
