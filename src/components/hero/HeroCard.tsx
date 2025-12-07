import Image from "next/image";

type Props = {
  data: {
    id: string;
    name: string;
    role: string;
    experience: string;
    skills: string[];
    imageUrl: string;
    countryImageUrl: string
  };
};

export default function HeroCard({ data }: Props) {
  return (
    <div
      className={`
        bg-white 
        w-[220px] h-[320px] p-3 
        sm:w-64 sm:h-[350px] sm:p-4
        md:w-[292px] md:h-[408px] md:p-6 
        rounded-2xl text-gray-900 text-center shadow-2xl
      `}>
      <div
        className="relative"
      >
        <Image className="cover w-20 h-20 mx-auto rounded-full bg-gray-200 overflow-hidden
        sm:w-24 sm:h-24
        md:w-[120px] md:h-[120px]" src={data.imageUrl} alt={data.name} width={100} height={100} />

        <Image className="absolute bottom-0 right-18 z-50" src={data.countryImageUrl} alt="Country" width={25} height={18} />
      </div>

      <h3 className="text-lg sm:text-xl font-bold mt-4 md:text-2xl">{data.name}</h3>

      <p className="text-blue-600 text-sm font-semibold mt-2">
        {data.role} · {data.experience}
      </p>

      <div className="flex flex-wrap gap-1.5 sm:gap-[4px] justify-center mt-4 sm:mt-6 md:mt-10">
        {data.skills.map((skill) => (
          <span key={skill} className="bg-gray-100 border border-gray-300 text-[11px] sm:text-sm px-3 py-1 rounded-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
