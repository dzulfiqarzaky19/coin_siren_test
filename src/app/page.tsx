import { HeaderSection } from '@/components/header/HeaderSection';
import { HeroSection } from '@/components/hero/HeroSection';
import { FooterSection } from '@/components/footer/FooterSection';


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

      <FooterSection data={footer} />
    </main>
  );
}
