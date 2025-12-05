import { NextResponse } from 'next/server';

export async function GET() {
  const sampleData = [
    { id: 1, name: 'Samsung Galaxy S24', price: 12000000 },
    { id: 2, name: 'iPhone 16 Pro', price: 19000000 },
  ];

  return NextResponse.json(sampleData);
}
