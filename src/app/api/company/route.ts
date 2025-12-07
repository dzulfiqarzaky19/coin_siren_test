import { NextResponse } from 'next/server';

export async function GET() {
  const company = {
    name: {
      en: 'hyperhire',
      kr: '하이퍼하이어',
      in: 'Hyperhire India Private Limited',
    },
    ceo: {
      kr: '김주현',
      en: 'Juhyun Kim',
    },
    jargon: '우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.',
    phone: '010-0000-0000',
    email: 'aaaaa@naver.com',
    CIN: {
      kr: '427-86-01187',
      in: 'U74110DL2016PTC290812',
    },
    address: {
      kr: '서울특별시 강남대로 479, 지하 1층 238호 ',
      in: 'D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India',
    },
};

  return NextResponse.json(company);
}
