type Props = {
  data: {
    id: string;
    name: string;
    role: string;
    experience: string;
    skills: string[];
    image?: string;
  };
  isCenter?: boolean;
};

export default function HeroCard({ data, isCenter }: Props) {
  return (
    <div
      className={`
        bg-white w-[292px] h-[408px] p-6 rounded-2xl text-gray-900 text-center shadow-lg
        ${isCenter ? 'shadow-2xl' : 'border border-gray-200'}
      `}>
      <div className="w-[120px] h-[120px] mx-auto rounded-full bg-gray-200 overflow-hidden" />

      <h3 className="text-2xl font-bold mt-4">{data.name}</h3>

      <p className="text-blue-600 text-sm font-semibold mt-2">
        {data.role} · {data.experience}
      </p>

      <div className="flex flex-wrap gap-2 justify-center mt-10">
        {data.skills.map((skill) => (
          <span key={skill} className="bg-gray-100 border border-gray-200 text-xs px-3 py-1 rounded-xl">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
