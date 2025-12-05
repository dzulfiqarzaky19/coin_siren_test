import { NextResponse } from 'next/server';

export async function GET() {
  const footer = {
    companyName: 'Hyperhire',
    description: '우리는 기술력을 바탕으로 최고의 인재를 제공합니다.',
    email: 'aaaaa@naver.com',
    phone: '010-0000-0000',
    addressKR: '서울특별시 강남구 122길 25호',
    addressIN: '1B-136, New Delhi, India',
    ceo: 'Juhyun Kim',
    bizNumber: '123-45-67890',
  };

  return NextResponse.json(footer);
}
