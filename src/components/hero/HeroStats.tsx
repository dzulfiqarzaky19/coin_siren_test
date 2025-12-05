export default function HeroStats() {
  const stats = [
    { label: '평균 월 120만원', value: '임금을 해당 국가를 기준으로 계산합니다.' },
    { label: '최대 3회 인력교체', value: '막상 채용해보니 맞지 않아도 걱정하지 마세요.' },
    { label: '평균 3일, 최대 10일', value: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.' },
  ];

  return (
    <div className="grid  md:grid-cols-3 gap-6 text-white mt-10">
      {stats.map((item) => (
        <div key={item.label} className="space-y-2">
          <div className="border-t-2 w-[129px]"></div>
          <p className="text-md font-bold">{item.label}</p>
          <p className="text-sm opacity-90">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
