// import { Banner } from '@/types/banner';
// import { TCategory } from '@/types/categories';
// import { Product } from '@/types/product';

import { FooterSection } from '@/components/footer/FooterSection';
import HeroSection from '@/components/hero/HeroSection';

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
      <HeroSection />

      {/* <BannerCarousel banners={banners} />

      <CategoriesSection categories={categories} />
*/}
      <FooterSection data={footer} />
    </main>
  );
}
