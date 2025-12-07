import Image from 'next/image';

export const Logo = () => (
    <div className="flex items-center">
        <Image src="/logo-header.svg" alt="Logo" width={114} height={21} className="h-6 w-auto" />
    </div>
);
