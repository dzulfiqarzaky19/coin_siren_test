import { ICompany } from '@/types/company';
import Image from 'next/image';
import { Typography } from '../atoms/Typography';

interface IFooterCompanyInfoProps {
  company: ICompany;
}

export const FooterCompanyInfo = ({ company }: IFooterCompanyInfoProps) => {
  return (
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
  );
};
