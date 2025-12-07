import { ICompany } from '@/types/company';
import Image from 'next/image';
import { Typography } from '../atoms/Typography';
import { ArrowRightSquare } from 'lucide-react';

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
              <Typography as="h2" variant="h2" className="text-[#2F2D2E]">
                {company.name.en}
              </Typography>
            </div>

            <Typography variant="body2" weight="black" className="text-[#343741]">
              {company.jargon}
            </Typography>
            <Typography variant="body2" weight="black" className="text-[#5E626F]">
              {company.phone}
            </Typography>
            <Typography variant="body2" weight="black" className="text-[#5E626F]">
              {company.email}
            </Typography>
          </div>

          <div className="lg:col-span-8 rounded-lg grid gap-4 grid-cols-[repeat(auto-fit,minmax(172px,1fr))]">
            {Object.values(SERVICE_CATEGORIES).map((category) => (
              <div key={category.en} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
                <div className="bg-[#EFF1F6] p-2 w-fit rounded-lg mb-3">
                  <Image src={category.icon} alt={category.en} width={24} height={24} />
                </div>
                <Typography variant="body2" weight="black" className="text-[#343741] mb-2">
                  {category.kr}
                </Typography>
                <div className="flex items-center gap-2 cursor-pointer text-[#5E626F]">
                  <Typography variant="body2" weight="black">
                    바로가기
                  </Typography>
                  <ArrowRightSquare className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-start">
          <div className="lg:col-span-4 flex gap-2 sm:gap-8">
            <div className="flex flex-col gap-1">
              <Typography variant="body2" weight="black" className="mb-4 text-[#343741]">
                상호명
              </Typography>
              <Typography variant="body2" weight="black" className="text-[#5E626F]">
                {company.name.kr}
              </Typography>
              <Typography variant="body2" weight="black" className="text-[#5E626F]">
                {company.name.in}
              </Typography>
            </div>

            <div className="flex flex-col gap-1">
              <Typography variant="body2" weight="black" className="mb-4 text-[#343741]">
                대표 CEO
              </Typography>
              <Typography variant="body2" weight="black" className="text-[#5E626F]">
                {company.ceo.kr}
              </Typography>
              <Typography variant="body2" weight="black" className="text-[#5E626F]">
                {company.ceo.en}
              </Typography>
            </div>
          </div>

          <div className="flex flex-col gap-1 lg:col-span-2">
            <Typography variant="body2" weight="black" className="mb-4 text-[#343741]">
              사업자등록번호 CIN
            </Typography>
            <Typography variant="body2" weight="black" className="text-[#5E626F]">
              {company.CIN.kr}
            </Typography>
            <Typography variant="body2" weight="black" className="text-[#5E626F]">
              {company.CIN.in}
            </Typography>
          </div>

          <div className="flex flex-col gap-1 lg:col-span-6">
            <Typography variant="body2" weight="black" className="mb-4 text-[#343741]">
              주소 ADDRESS
            </Typography>
            <Typography variant="body2" weight="black" className="text-[#5E626F]">
              {company.address.kr}
            </Typography>
            <Typography variant="body2" weight="black" className="text-[#5E626F]">
              {company.address.in}
            </Typography>
          </div>
        </div>

        <Typography variant="caption" weight="black" className="mt-10 text-[#5E626F]">
          &copy; 2023 {company.name.en}
        </Typography>
      </div>
    </section>
  );
};
