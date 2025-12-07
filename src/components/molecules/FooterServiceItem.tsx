import Image from 'next/image';
import { ArrowRightSquare } from 'lucide-react';
import { Typography } from '../atoms/Typography';

export interface IServiceCategory {
    kr: string;
    en: string;
    icon: string;
}

interface IFooterServiceItemProps {
    category: IServiceCategory;
}

export const FooterServiceItem = ({ category }: IFooterServiceItemProps) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between">
            <div className="bg-[#EFF1F6] w-10 h-10 flex items-center justify-center rounded-lg mb-3">
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
    );
};
