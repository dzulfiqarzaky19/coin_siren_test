import { Typography } from '../atoms/Typography';
import { Bubble } from '../atoms/Bubble';
import { IntroAnimation } from '../atoms/IntroAnimation';
import { HERO_SECTION_DATA as HeroSectionData } from '@/constants/hero';
import { Button } from '../atoms/Button';

export const HeroContent = () => {
  return (
    <div className="flex flex-col items-start gap-6">
      <IntroAnimation animation="fadeInUp" delay={0.3}>
        <Bubble
          className="mb-2"
          bubbleClassName="bg-[#8BC4FF] md:bg-[#E9F7EF] before:bg-[#8BC4FF] before:md:bg-[#E9F7EF]"
          arrowPosition="left">
          <Typography
            as="span"
            variant="caption"
            weight="black"
            className="text-white md:text-[#40E2E8] px-3 py-1 rounded-lg block">
            {HeroSectionData.topLabel}
          </Typography>
        </Bubble>
      </IntroAnimation>

      <IntroAnimation animation="fadeInUp">
        <div className="space-y-4">
          <Typography as="h1" variant="h1" weight="black" className="max-w-3xl leading-snug">
            {HeroSectionData.title.a}
            <br />
            {HeroSectionData.title.b}
          </Typography>

          <Typography as="p" variant="body1" className="opacity-90 leading-[34px]">
            {HeroSectionData.description}
          </Typography>

          <Button
            variant="text"
            label={HeroSectionData.cta}
            className="hidden md:inline-block mt-6 py-3 text-left underline group font-black"
          />
        </div>
      </IntroAnimation>
    </div>
  );
};
