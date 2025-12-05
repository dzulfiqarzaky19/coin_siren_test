'use client';
import { useRef, useState } from 'react';

export const HeroFilter = () => {
  const filter = ['한국어 능력', '업무 수행 능력', '겸업 여부', '평판 조회'];
  const checkboxRef = useRef<HTMLInputElement>(null);

  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (item: string) => {
    setSelected((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));
  };

  return (
    <div className="flex flex-wrap gap-4">
      {filter.map((item, index) => (
        <label
          key={index}
          className="flex gap-2 px-4 py-2 rounded-lg font-semibold hover:bg-white/80 transition cursor-pointer">
          <input
            ref={checkboxRef}
            type="checkbox"
            className="form-checkbox text-cyan-700"
            value={item}
            checked={selected.includes(item)}
            onChange={() => handleChange(item)}
          />
          {item}
        </label>
      ))}
    </div>
  );
};
