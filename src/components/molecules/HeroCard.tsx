import { ITalents } from "@/types/talents";
import Image from "next/image";

type Props = {
  talents: ITalents
};

export const HeroCard = ({ talents }: Props) => (
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
        md:w-[120px] md:h-[120px]" src={talents.imageUrl} alt={talents.name} width={100} height={100} />

      <Image className="absolute bottom-0 right-18 z-50" src={talents.countryImageUrl} alt="Country" width={25} height={18} />
    </div>

    {/* text : 18px weight : 900 line height: 150% */}
    <h3 className="text-lg sm:text-xl font-black mt-4 md:text-2xl text-[#24252F]">{talents.name}</h3>

    <p className="text-[#4A77FF] text-sm font-semibold mt-2">
      {talents.role} · <span className="font-black">

        {talents.experience}
      </span>
    </p>

    <div className="flex flex-wrap gap-1.5 sm:gap-[4px] justify-center mt-4 sm:mt-6 md:mt-10">
      {talents.skills?.map((skill) => (
        <span key={skill} className="bg-gray/40 border border-gray-[#C1C5CF] text-[11px] sm:text-sm px-3 py-1 rounded-md text-[#5E626F] font-black">
          {skill}
        </span>
      ))}
    </div>
  </div>
);
