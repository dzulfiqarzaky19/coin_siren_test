import { Checkbox } from '../atoms/Checkbox';
import { HERO_FILTER_ITEMS } from '@/constants/hero';

export const HeroFilter = () => (
  <div className="grid grid-cols-2">
    {HERO_FILTER_ITEMS.map((item) => (
      <Checkbox key={item} label={item} defaultChecked readOnly />
    ))}
  </div>
);
