import { HeaderSection } from '@/components/header/HeaderSection';
import { HeroSection } from '@/components/hero/HeroSection';
import { FooterSection } from '@/components/footer/FooterSection';
import { Suspense } from 'react';


export default async function Home() {
  const [talents, services, company] = await Promise.all([
    fetch('http://localhost:3000/api/talents', { cache: 'no-store' }).then((r) => r.json()),
    fetch('http://localhost:3000/api/services', { cache: 'no-store' }).then((r) => r.json()),
    fetch('http://localhost:3000/api/company', { cache: 'no-store' }).then((r) => r.json()),
  ]);

  console.log({ services }, 123)

  return (
    <main>
      <HeaderSection />

      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection talents={talents} services={services} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <FooterSection company={company} />
      </Suspense>
    </main>
  );
}
