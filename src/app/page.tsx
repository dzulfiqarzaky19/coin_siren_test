// import { Banner } from '@/types/banner';
// import { TCategory } from '@/types/categories';
// import { Product } from '@/types/product';

import { HeaderSection } from '@/components/header/HeaderSection';
import { HeroSection } from '@/components/hero/HeroSection';
import { FooterSection } from '@/components/footer/FooterSection';

async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  });

  return res.json();
}

export default async function Home() {
  const [banners, categories, footer] = await Promise.all([
    fetch('http://localhost:3000/api/banners', { cache: 'no-store' }).then((r) => r.json()),
    fetch('http://localhost:3000/api/categories', { cache: 'no-store' }).then((r) => r.json()),
    fetch('http://localhost:3000/api/footer', { cache: 'no-store' }).then((r) => r.json()),
  ]);

  return (
    <main>
      <HeaderSection />

      <HeroSection />

      {/* <BannerCarousel banners={banners} />

      <CategoriesSection categories={categories} />
*/}
      <FooterSection data={footer} />
    </main>
  );
}
