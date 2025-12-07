import { HeroStatistics } from '../molecules/HeroStatistics';
import { HeroSlider } from '../molecules/HeroSlider';
import { IntroAnimation } from '../atoms/IntroAnimation';
import { HeroServices } from '../molecules/HeroServices';
import { HeroFilter } from '../molecules/HeroFilter';
import { ITalents } from '@/types/talents';
import { IServices } from '@/types/services';

import { HERO_SECTION_DATA as HeroSectionData } from '@/constants/hero';
import { HeroContent } from '../molecules/HeroContent';
import { Button } from '../atoms/Button';

interface IHeroSectionProps {
  talents: ITalents[];
  services: IServices[];
}

export const HeroSection = ({ talents, services }: IHeroSectionProps) => (
  <section
    className="w-full
    bg-cyan-700 opacity-80 bg-[url(/hero-bg.png)] bg-blend-color-burn bg-cover bg-center text-white py-20 overflow-hidden">
    <div className="container mx-auto px-4 md:flex items-center">
      <div className="md:w-1/2 mt-12 flex flex-col gap-8 z-10 relative">
        <HeroContent />

        <div className="hidden md:block">
          <IntroAnimation>
            <HeroStatistics />
          </IntroAnimation>
        </div>
      </div>

      <HeroSlider talents={talents} />
    </div>

    <IntroAnimation className="container mx-auto px-4 mt-12 md:hidden space-y-4 flex flex-col items-baseline justify-baseline">
      <HeroFilter />

      <Button variant="text" label={HeroSectionData.cta} className="py-3 text-[#FBFF23] underline font-black" />
    </IntroAnimation>

    <HeroServices servicesProps={services} />
  </section>
);
