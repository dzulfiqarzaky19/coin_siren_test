import { NextResponse } from 'next/server';

export async function GET() {
  const sampleData = [
    {
      id: 'Abhishek-Gupta-1',
      name: 'Abhishek Gupta',
      role: '마케팅',
      experience: '2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
    {
      id: 'Abhishek-Gupta-2',
      name: 'Abhishek Gupta',
      role: '마케팅',
      experience: '2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
    {
      id: 'Abhishek-Gupta-3',
      name: 'Abhishek Gupta',
      role: '마케팅',
      experience: '2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
  ];

  return NextResponse.json(sampleData);
}
