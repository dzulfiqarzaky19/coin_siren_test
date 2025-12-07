import { Product } from '@/types/product';
import { ArrowRightSquare } from 'lucide-react';
import Image from 'next/image';

interface IFooterSectionProps {
  data: Product; // Adjust the type as per your data structure
}

const FOOTER_SECTION_DATA = {
  company: {
    name: {
      en: 'hyperhire',
      kr: '하이퍼하이어',
      in: 'Hyperhire India Private Limited',
    },
    ceo: {
      kr: '김주현',
      en: 'Juhyun Kim',
    },
    jargon: '우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.',
    phone: '010-0000-0000',
    email: 'aaaaa@naver.com',
    CIN: {
      kr: '427-86-01187',
      in: 'U74110DL2016PTC290812',
    },
    address: {
      kr: '서울특별시 강남대로 479, 지하 1층 238호 ',
      in: 'D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India',
    },
  },
};

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

export const FooterSection = ({ data }: IFooterSectionProps) => {
  return (
    <section className=" bg-[#FBFBFB] py-10">
      <div className="container mx-auto px-4 space-y-16">
        <div className="grid gap-8 items-start grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
          <div className="space-y-4">
            <div className="flex gap-1 items-center">
              <Image src={'/hyperhire-logo.ico'} alt="Hyperhire Logo" width={50} height={50} />
              <h2 className="text-3xl font-bold">{FOOTER_SECTION_DATA.company.name.en}</h2>
            </div>

            <p className="text-black font-black text-[14px]">{FOOTER_SECTION_DATA.company.jargon}</p>
            <p className="text-black font-black text-[14px]">{FOOTER_SECTION_DATA.company.phone}</p>
            <p className="text-black font-black text-[14px]">{FOOTER_SECTION_DATA.company.email}</p>
          </div>

          <div className="rounded-lg grid gap-4 grid-cols-[repeat(auto-fit,minmax(172px,1fr))]">
            {Object.values(SERVICE_CATEGORIES).map((service, index) => (
              <div
                key={index}
                className="flex flex-col justify-between gap-4 items-baseline bg-white p-4 rounded-xl shadow">
                <div className="bg-[#EFF1F6] w-10 h-10 p-2 grid place-items-center rounded-lg">

                  <Image src={service.icon} alt={service.kr} width={40} height={40} />
                </div>
                <div className="text-[14px] text-black font-black">{service.kr}</div>

                <button className="flex text-[#5E626F] text-[14px] justify-center items-center gap-2">
                  바로가기
                  <Image src={'/arrow-right-square.png'} alt="Arrow Right Square" width={20} height={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold mb-4">상호명</h3>
            <p className="font-bold">{FOOTER_SECTION_DATA.company.name.kr}</p>
            <p className="font-bold">{FOOTER_SECTION_DATA.company.name.in}</p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-semibold mb-4">대표 CEO</h3>
            <p className="font-bold">{FOOTER_SECTION_DATA.company.ceo.kr}</p>
            <p className="font-bold">{FOOTER_SECTION_DATA.company.ceo.en}</p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-semibold mb-4">사업자등록번호 CIN</h3>
            <p className="font-bold">{FOOTER_SECTION_DATA.company.CIN.kr}</p>
            <p className="font-bold">{FOOTER_SECTION_DATA.company.CIN.in}</p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-semibold mb-4">주소 ADDRESS</h3>
            <p className="font-bold">{FOOTER_SECTION_DATA.company.address.kr}</p>
            <p className="font-bold">{FOOTER_SECTION_DATA.company.address.in}</p>
          </div>
        </div>

        <div className="mt-10 font-black text-black text-sm">&copy; 2023 {FOOTER_SECTION_DATA.company.name.en}</div>
      </div>
    </section>
  );
};
