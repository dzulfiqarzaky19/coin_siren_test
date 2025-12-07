import { Check } from 'lucide-react';

const filter = ['한국어 능력', '업무 수행 능력', '겸업 여부', '평판 조회'];

export const HeroFilter = () => (
  <div className="grid grid-cols-2">
    {filter.map((item, index) => (
      <label
        key={index}
        className="flex gap-2 py-2 rounded-lg font-semibold hover:bg-white/80 transition cursor-pointer">

        <input
          type="checkbox"
          className="appearance-none h-6 w-6 rounded-md cursor-pointer bg-indigo-100 border-2 border-indigo-200"
          value={item}
          defaultChecked
          readOnly
        />

        <div className="absolute h-6 w-6 flex items-center justify-center pointer-events-none">
          <Check className="h-4 w-4 text-[#2C599B] stroke-3" />
        </div>
        {item}
      </label>
    ))}
  </div>
);
