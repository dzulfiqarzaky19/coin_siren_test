import { cn } from '@/utils/cn';
import { Typography } from '../atoms/Typography';

interface IFooterDetailItemProps {
  title: string;
  krDescription: string;
  enDescription: string;
  className?: string;
}

export const FooterDetailItem = ({ title, krDescription, enDescription, className }: IFooterDetailItemProps) => (
  <div className={cn(className, 'flex flex-col justify-between')}>
    <Typography variant="body2" weight="black" className="mb-4 text-[#343741]">
      {title}
    </Typography>
    <div className="space-y-1 text-[#5E626F] font-black body2">
      <Typography variant="body2" weight="black">
        {krDescription}
      </Typography>
      <Typography variant="body2" weight="black">
        {enDescription}
      </Typography>
    </div>
  </div>
);
