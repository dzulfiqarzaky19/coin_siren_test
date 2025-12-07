import { Logo } from '../atoms/Logo';
import { HeaderDesktopNav } from '../molecules/HeaderDesktopNav';
import { HeaderMobileMenu } from '../molecules/HeaderMobileMenu';
import { Button } from '../atoms/Button';

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white">
      <div className="container relative mx-auto px-4 h-20 flex items-center justify-between">
        <Logo />
        <HeaderDesktopNav />
        <HeaderMobileMenu />
        <Button label="문의하기" href="#" className="hidden md:flex" />
      </div>
    </header>
  );
};
