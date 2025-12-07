import { ICompany } from '@/types/company';
import { Typography } from '../atoms/Typography';
import { FooterCompanyInfo } from '../molecules/FooterCompanyInfo';
import { FooterServiceItem } from '../molecules/FooterServiceItem';
import { FooterDetailItem } from '../molecules/FooterDetailItem';
import { SERVICE_CATEGORIES } from '@/constants/footer';

interface IFooterSectionProps {
  company: ICompany;
}

export const Footer = ({ company }: IFooterSectionProps) => {
  return (
    <section className=" bg-[#FBFBFB] py-20">
      <div className="container mx-auto px-4 space-y-16">
        <div className="grid gap-16 items-start grid-cols-1 lg:grid-cols-12">

          <FooterCompanyInfo company={company} />

          <div className="lg:col-span-8 rounded-lg grid gap-4 grid-cols-[repeat(auto-fit,minmax(172px,1fr))]">
            {Object.values(SERVICE_CATEGORIES).map((category) => (
              <FooterServiceItem key={category.en} category={category} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-start">
          <div className="lg:col-span-4 flex gap-2 sm:gap-8">
            <FooterDetailItem title="상호명"
              krDescription={company.name.kr}
              enDescription={company.name.in}
            />

            <FooterDetailItem title="대표 CEO"
              krDescription={company.ceo.kr}
              enDescription={company.ceo.en}
            />
          </div>

          <FooterDetailItem title="사업자등록번호 CIN" className="flex flex-col gap-1 lg:col-span-2"
            krDescription={company.CIN.kr}
            enDescription={company.CIN.in}
          />

          <FooterDetailItem title="주소 ADDRESS" className="flex flex-col gap-1 lg:col-span-6"
            krDescription={company.address.kr}
            enDescription={company.address.in}
          />

        </div>

        <Typography variant="caption" weight="black" className="mt-10 text-[#5E626F]">
          &copy; 2023 {company.name.en}
        </Typography>
      </div>
    </section >
  );
};

