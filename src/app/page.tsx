import { Header } from '@/components/organisms/Header';
import { HeroSection } from '@/components/organisms/HeroSection';
import { Footer } from '@/components/organisms/Footer';
import { Suspense } from 'react';

import { GET as getTalents } from '@/app/api/talents/route';
import { GET as getServices } from '@/app/api/services/route';
import { GET as getCompany } from '@/app/api/company/route';

export default async function Home() {
  const [talents, services, company] = await Promise.all([
    getTalents().then((r) => r.json()),
    getServices().then((r) => r.json()),
    getCompany().then((r) => r.json()),
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
