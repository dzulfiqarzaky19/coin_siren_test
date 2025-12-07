import { NextResponse } from 'next/server';

export async function GET() {
  const talentsDummy = [
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

  return NextResponse.json(talentsDummy);
}
