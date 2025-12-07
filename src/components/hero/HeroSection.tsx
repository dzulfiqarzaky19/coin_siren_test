import { HeroStats } from './HeroStats';
import { HeroSlider } from './HeroSlider';
import { IntroAnimation } from '../ui/animation/IntroAnimation';
import { HeroCategory } from './HeroCategory';
import { HeroFilter } from './HeroFilter';
import { Bubble } from '../ui/Bubble';

const HeroSectionData = {
  topLabel: '풀타임, 파트타임',
  title: {
    a: '최고의 실력을 가진',
    b: '외국인 인재를 찾고 계신가요?',
  },
  description: '법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.',
  cta: '개발자가 필요하신가요?',
};

const sampleData = [
  {
    id: 'Abhishek-Gupta-1',
    name: 'Abhishek Gupta 1',
    role: '마케팅',
    experience: '2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    salary: '월 100만원',
    imageUrl: '/coders.png',
    countryImageUrl: '/country.png',
  },
  {
    id: 'Abhishek-Gupta-2',
    name: 'Abhishek Gupta 2',
    role: '마케팅',
    experience: '2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    salary: '월 200만원',
    imageUrl: '/coders.png',
    countryImageUrl: '/country.png',
  },
  {
    id: 'Abhishek-Gupta-3',
    name: 'Abhishek Gupta 3',
    role: '마케팅',
    experience: '2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    salary: '월 300만원',
    countryImageUrl: '/country.png',
    imageUrl: '/coders.png',
  },
  {
    id: 'Abhishek-Gupta-4',
    name: 'Abhishek Gupta 4',
    role: '마케팅',
    experience: '2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    salary: '월 400만원',
    imageUrl: '/coders.png',
    countryImageUrl: '/country.png',
  },
  {
    id: 'Abhishek-Gupta-5',
    name: 'Abhishek Gupta 5',
    role: '마케팅',
    experience: '2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    salary: '월 500만원',
    imageUrl: '/coders.png',
    countryImageUrl: '/country.png',
  },
];



export const HeroSection = () => {

  return (
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

              <div className="text-white md:text-[#40E2E8] text-s font-semibold px-3 py-1 rounded-lg">
                {HeroSectionData.topLabel}
              </div>
            </Bubble>
          </IntroAnimation>

          <IntroAnimation animation="fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">{HeroSectionData.title.a}</h1>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">{HeroSectionData.title.b}</h1>

            <p className="md:text-lg opacity-90 mt-4">{HeroSectionData.description}</p>

            <button className="mt-6 hidden md:block py-3 bg-transparent font-bold underline hover:opacity-90 transition">
              {HeroSectionData.cta}
            </button>
          </IntroAnimation>

          <div className="mt-12 hidden md:block">
            <IntroAnimation>
              <HeroStats />
            </IntroAnimation>
          </div>
        </div>

        <HeroSlider items={sampleData} />
      </div>

      <IntroAnimation className="container mx-auto px-4 mt-12 md:hidden space-y-4 flex flex-col items-baseline justify-baseline">
        <HeroFilter />

        <button className="py-3 bg-transparent font-bold underline hover:opacity-90 transition text-[#FBFF23]">
          {HeroSectionData.cta}
        </button>
      </IntroAnimation>

      <HeroCategory />
    </section>
  );
}
