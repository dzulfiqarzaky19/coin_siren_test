import HeroStats from './HeroStats';
import HeroSlider from './HeroSlider';
import { IntroAnimation } from '../UI/animation/IntroAnimation';
import { HeroCategory } from './HeroCategory';
import { HeroFilter } from './HeroFilter';
import { Bubble } from '../UI/Bubble';

export default function HeroSection() {
  const HeroSection = {
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
    },
    {
      id: 'Abhishek-Gupta-2',
      name: 'Abhishek Gupta 2',
      role: '마케팅',
      experience: '2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      salary: '월 200만원',
    },
    {
      id: 'Abhishek-Gupta-3',
      name: 'Abhishek Gupta 3',
      role: '마케팅',
      experience: '2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      salary: '월 300만원',
    },
    {
      id: 'Abhishek-Gupta-4',
      name: 'Abhishek Gupta 4',
      role: '마케팅',
      experience: '2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      salary: '월 400만원',
    },
    {
      id: 'Abhishek-Gupta-5',
      name: 'Abhishek Gupta 5',
      role: '마케팅',
      experience: '2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      salary: '월 500만원',
    },
  ];

  const getFilteredData = (data: typeof sampleData, filter: string[]) => {
    if (!filter) return data;

    return data.filter((item) => item.skills.some((skill) => filter.includes(skill)));
  };

  const filteredData = getFilteredData(sampleData, ['마케팅 콘텐츠 제작']);

  return (
    <section
      className="w-full
    bg-cyan-700 opacity-80 bg-[url(/hero-bg.png)] bg-blend-color-burn bg-cover bg-center text-white py-20">
      <div className="container mx-auto px-4 sm:flex">
        <div className="sm:w-1/2 mt-12">
          <IntroAnimation animation="fadeInUp" delay={0.3}>
            <Bubble className="mb-5" arrowPosition="left">
              <div className="text-[#40E2E8] text-s bg-white font-semibold px-3 py-1 rounded-lg">
                {HeroSection.topLabel}
              </div>
            </Bubble>
          </IntroAnimation>

          <IntroAnimation animation="fadeInUp">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-3xl">{HeroSection.title.a}</h1>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-3xl">{HeroSection.title.b}</h1>

            <p className="sm:text-lg opacity-90 mt-4">{HeroSection.description}</p>

            <button className="mt-6 hidden sm:block py-3 bg-transparent font-bold underline hover:opacity-90 transition">
              {HeroSection.cta}
            </button>
          </IntroAnimation>

          <div className="mt-12 hidden sm:block">
            <IntroAnimation>
              <HeroStats />
            </IntroAnimation>
          </div>
        </div>

        <div className="mt-12 flex sm:w-2xl justify-center ">
          <HeroSlider items={filteredData} />
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 sm:hidden space-y-4 flex flex-col items-baseline justify-baseline">
        <HeroFilter />

        <button className="py-3 bg-transparent font-bold underline hover:opacity-90 transition text-[#FBFF23]">
          {HeroSection.cta}
        </button>
      </div>

      <HeroCategory />
    </section>
  );
}
