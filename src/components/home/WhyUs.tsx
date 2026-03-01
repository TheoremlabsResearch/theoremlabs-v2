import Image from 'next/image';
import { SectionHeader } from '@/components/shared/SectionHeader';

export function WhyUs() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#0F1B2D]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
          {/* Text block */}
          <div className="flex flex-col gap-8 md:w-1/2">
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Built Different, For Fintech"
              align="left"
            />
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Theoremlabs blends management consulting with build &amp; experimentation labs, offering
              tailored solutions for Fintech products. We leverage AI, Data, Cloud, and Web 3
              technologies to deliver innovative, scalable, and future-ready financial solutions,
              bridging the gap between vision and execution.
            </p>
            <div className="w-16 h-0.5 rounded-full bg-[#F97316]" aria-hidden="true" />
          </div>

          {/* Image block */}
          <div className="relative md:w-1/2 overflow-hidden rounded-2xl border border-[#1E3A5F]">
            <Image
              src="/images/Why%20Us%20and%20Team.png"
              alt="Why Theoremlabs — our team and approach"
              width={700}
              height={500}
              className="w-full h-auto object-cover"
            />
            {/* Subtle gradient overlay on bottom edge */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0F1B2D]/60 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
