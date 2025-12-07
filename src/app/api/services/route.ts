import { NextResponse } from 'next/server';

export async function GET() {
  const services = [
    { id: 1, title: '해외 마케팅', icon: '/icon-marketing.png' },
    { id: 2, title: '퍼블리셔', icon: '/icon-image.png' },
    { id: 3, title: '개발자(제도사)', icon: '/icon-box.png' },
    { id: 4, title: '해외 세일즈', icon: '/icon-target.png' },
    { id: 5, title: '해외 CS', icon: '/icon-call.png' },
    {
      id: 6, title: '해외 마케팅', icon: '/icon-presentation.png'
    },
  ];

  return NextResponse.json(services);
}
