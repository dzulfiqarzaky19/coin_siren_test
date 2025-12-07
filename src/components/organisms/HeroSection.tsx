import { HeroStats } from '../molecules/HeroStats';
import { HeroSlider } from '../molecules/HeroSlider';
import { IntroAnimation } from '../atoms/IntroAnimation';
import { HeroServices } from '../molecules/HeroServices';
import { HeroFilter } from '../molecules/HeroFilter';
import { Bubble } from '../atoms/Bubble';
import { ITalents } from '@/types/talents';
import { IServices } from '@/types/services';
import { Typography } from '../atoms/Typography';

import { HERO_SECTION_DATA as HeroSectionData } from '@/constants/hero';

interface IHeroSectionProps {
  talents: ITalents[];
  services: IServices[];
}

export const HeroSection = ({ talents, services }: IHeroSectionProps) => (
  <section
    className="w-full
    bg-cyan-700 opacity-80 bg-[url(/hero-bg.png)] bg-blend-color-burn bg-cover bg-center text-white py-20">
    <div className="container mx-auto px-4 md:flex">
      <div className="md:w-1/2 mt-12">
        <IntroAnimation animation="fadeInUp" delay={0.3}>
          <Bubble
            className="mb-5"
            bubbleClassName="bg-[#8BC4FF] md:bg-[#E9F7EF] before:bg-[#8BC4FF] before:md:bg-[#E9F7EF]"
            arrowPosition="left">
            <Typography
              as="div"
              variant="caption"
              weight="black"
              className="text-white md:text-[#40E2E8] px-3 py-1 rounded-lg">
              {HeroSectionData.topLabel}
            </Typography>
          </Bubble>
        </IntroAnimation>

        <IntroAnimation animation="fadeInUp">
          <Typography as="h1" variant="h1" weight="black" className="max-w-3xl">
            {HeroSectionData.title.a}
          </Typography>
          <Typography as="h1" variant="h1" weight="black" className="max-w-3xl">
            {HeroSectionData.title.b}
          </Typography>

          <Typography as="p" variant="body1" className="opacity-90 mt-4 leading-[34px]">
            {HeroSectionData.description}
          </Typography>

          <button className="mt-6 hidden md:block py-3 bg-transparent hover:opacity-90 transition text-left">
            <Typography as="span" weight="black" className="underline">
              {HeroSectionData.cta}
            </Typography>
          </button>
        </IntroAnimation>

        <div className="mt-12 hidden md:block">
          <IntroAnimation>
            <HeroStats />
          </IntroAnimation>
        </div>
      </div>

      <HeroSlider talents={talents} />
    </div>

    <IntroAnimation className="container mx-auto px-4 mt-12 md:hidden space-y-4 flex flex-col items-baseline justify-baseline">
      <HeroFilter />

      <button className="py-3 bg-transparent hover:opacity-90 transition">
        <Typography as="span" weight="black" className="underline text-[#FBFF23]">
          {HeroSectionData.cta}
        </Typography>
      </button>
    </IntroAnimation>

    <HeroServices servicesProps={services} />
  </section>
);
