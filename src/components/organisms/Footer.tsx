import { ICompany } from '@/types/company';
import Image from 'next/image';

interface IFooterSectionProps {
  company: ICompany;
}



const SERVICE_CATEGORIES = {
  remoteOverseasDevelopers: {
    kr: '해외 개발자 원격 채용',
    en: 'Remote hiring of overseas developers',
    icon: '/footer-code.png',
  },
  remoteForeignNonDev: {
    kr: '외국인 원격 채용 (비개발)',
    en: 'Remote hiring of foreign workers (non-developer roles)',
    icon: '/footer-user.png',
  },
  koreanSpeakingForeignTalent: {
    kr: '한국어 가능 외국인 채용',
    en: 'Hiring foreign talent proficient in Korean',
    icon: '/footer-KOR.png',
  },
  overseasDevServices: {
    kr: '해외 개발자 활용 서비스',
    en: 'Service for utilizing overseas developers',
    icon: '/footer-setting.png',
  },
};

export const Footer = ({ company }: IFooterSectionProps) => {
  return (
    <section className=" bg-[#FBFBFB] py-20">
      <div className="container mx-auto px-4 space-y-16">
        <div className="grid gap-16 items-start grid-cols-1 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <div className="flex gap-1 items-center">
              <Image src={'/hyperhire-logo.ico'} alt="Hyperhire Logo" width={50} height={50} />
              <h2 className="text-3xl font-bold text-[#2F2D2E]">{company.name.en}</h2>
            </div>

            <p className="text-[#343741] font-black text-[14px]">{company.jargon}</p>
            <p className="text-[#5E626F] font-black text-[14px]">{company.phone}</p>
            <p className="text-[#5E626F] font-black text-[14px]">{company.email}</p>
          </div>

          <div className="lg:col-span-8 rounded-lg grid gap-4 grid-cols-[repeat(auto-fit,minmax(172px,1fr))]">
            {Object.values(SERVICE_CATEGORIES).map((service, index) => (
              <div
                key={index}
                className="flex flex-col justify-between gap-4 items-baseline bg-white p-4">
                <div className="bg-[#EFF1F6] w-10 h-10 p-2 grid place-items-center rounded-lg">

                  <Image src={service.icon} alt={service.kr} width={40} height={40} />
                </div>
                <div className="text-[14px] text-[#343741] font-black">{service.kr}</div>

                <button className="flex text-[#5E626F] text-[14px] justify-center items-center gap-2">
                  바로가기
                  <Image src={'/arrow-right-square.png'} alt="Arrow Right Square" width={20} height={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 flex gap-2 sm:gap-8">
            <div className="flex flex-col gap-1">
              <h3 className="font-black mb-4 text-[#343741]">상호명</h3>
              <p className="font-black text-[#5E626F]">{company.name.kr}</p>
              <p className="font-black text-[#5E626F]">{company.name.in}</p>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-black mb-4 text-[#343741]">대표 CEO</h3>
              <p className="font-black   text-[#5E626F]">{company.ceo.kr}</p>
              <p className="font-black text-[#5E626F]">{company.ceo.en}</p>
            </div>
          </div>

          <div className="flex flex-col gap-1 lg:col-span-2">
            <h3 className="font-black mb-4 text-[#343741]">사업자등록번호 CIN</h3>
            <p className="font-black text-[#5E626F]">{company.CIN.kr}</p>
            <p className="font-black text-[#5E626F]">{company.CIN.in}</p>
          </div>

          <div className="flex flex-col gap-1 lg:col-span-6">
            <h3 className="font-black mb-4 text-[#343741]">주소 ADDRESS</h3>
            <p className="font-black text-[#5E626F]">{company.address.kr}</p>
            <p className="font-black text-[#5E626F]">{company.address.in}</p>
          </div>
        </div>

        <div className="mt-10 font-black text-[#5E626F] text-sm">&copy; 2023 {company.name.en}</div>
      </div>
    </section>
  );
};
