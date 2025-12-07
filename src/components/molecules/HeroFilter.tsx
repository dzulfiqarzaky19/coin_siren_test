import { Checkbox } from '../atoms/Checkbox';

const filter = ['한국어 능력', '업무 수행 능력', '겸업 여부', '평판 조회'];

export const HeroFilter = () => (
  <div className="grid grid-cols-2">
    {filter.map((item) => (
      <Checkbox key={item} label={item} defaultChecked readOnly />
    ))}
  </div>
);
