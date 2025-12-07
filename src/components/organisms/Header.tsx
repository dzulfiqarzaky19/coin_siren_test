import { Logo } from '../atoms/Logo';
import { HeaderDesktopNav } from '../molecules/HeaderDesktopNav';
import { HeaderMobileMenu } from '../molecules/HeaderMobileMenu';
import { Typography } from '../atoms/Typography';

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white">
      <div className="container relative mx-auto px-4 h-20 flex items-center justify-between">
        <Logo />
        <HeaderDesktopNav />
        <button className="hidden md:block bg-white text-[#4A77FF] px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
          <Typography as="span" variant="body2" weight="bold">
            문의하기
          </Typography>
        </button>
        <HeaderMobileMenu />
      </div>
    </header>
  );
};

