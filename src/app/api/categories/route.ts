import { NextResponse } from 'next/server';

export async function GET() {
  const categories = [
    { id: 1, title: '해외 마케팅', icon: 'marketing' },
    { id: 2, title: '퍼블리셔', icon: 'publisher' },
    { id: 3, title: '개발자(제도사)', icon: 'developer' },
    { id: 4, title: '해외 세일즈', icon: 'sales' },
    { id: 5, title: '해외 CS', icon: 'cs' },
  ];

  return NextResponse.json(categories);
}
