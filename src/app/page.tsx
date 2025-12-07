import { Header } from '@/components/organisms/Header';
import { HeroSection } from '@/components/organisms/HeroSection';
import { Footer } from '@/components/organisms/Footer';
import { Suspense } from 'react';

import { getBaseUrl } from '@/utils/api';

export default async function Home() {
  const baseUrl = getBaseUrl();
  const [talents, services, company] = await Promise.all([
    fetch(`${baseUrl}/api/talents`, { cache: 'no-store' }).then((r) => r.json()),
    fetch(`${baseUrl}/api/services`, { cache: 'no-store' }).then((r) => r.json()),
    fetch(`${baseUrl}/api/company`, { cache: 'no-store' }).then((r) => r.json()),
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
