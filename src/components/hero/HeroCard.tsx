type Props = {
  data: {
    id: string;
    name: string;
    role: string;
    experience: string;
    skills: string[];
    image?: string;
  };
};

export default function HeroCard({ data }: Props) {
  return (
    <div
      className={`
        bg-white 
        w-64 h-[350px] p-4 
        md:w-[292px] md:h-[408px] md:p-6 
        rounded-2xl text-gray-900 text-center shadow-2xl
      `}>
      <div
        className="w-24 h-24 mx-auto rounded-full bg-gray-200 overflow-hidden 
        md:w-[120px] md:h-[120px]"
      />

      <h3 className="text-xl font-bold mt-4 md:text-2xl">{data.name}</h3>

      <p className="text-blue-600 text-sm font-semibold mt-2">
        {data.role} · {data.experience}
      </p>

      <div className="flex flex-wrap gap-2 justify-center mt-6 md:mt-10">
        {data.skills.map((skill) => (
          <span key={skill} className="bg-gray-100 border border-gray-200 text-xs px-3 py-1 rounded-xl">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
