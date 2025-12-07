import { Header } from '@/components/organisms/Header';
import { HeroSection } from '@/components/organisms/HeroSection';
import { Footer } from '@/components/organisms/Footer';
import { Suspense } from 'react';

export default async function Home() {
  const [talents, services, company] = await Promise.all([
    fetch('http://localhost:3000/api/talents', { cache: 'no-store' }).then((r) => r.json()),
    fetch('http://localhost:3000/api/services', { cache: 'no-store' }).then((r) => r.json()),
    fetch('http://localhost:3000/api/company', { cache: 'no-store' }).then((r) => r.json()),
  ]);

  return (
    <main>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection talents={talents} services={services} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer company={company} />
      </Suspense>
    </main>
  );
}
