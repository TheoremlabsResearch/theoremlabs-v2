import { Hero } from '@/components/home/Hero';
import { WhyUs } from '@/components/home/WhyUs';
import { ThreePillars } from '@/components/home/ThreePillars';
import { ValueProps } from '@/components/home/ValueProps';
import { ProductsCarousel } from '@/components/home/ProductsCarousel';
import { KirdarFeatureBlock } from '@/components/home/KirdarFeatureBlock';
import { Testimonial } from '@/components/home/Testimonial';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <ThreePillars />
      <ValueProps />
      <ProductsCarousel />
      <KirdarFeatureBlock />
      <Testimonial />
    </>
  );
}
