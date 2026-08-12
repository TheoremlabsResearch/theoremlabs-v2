import { CTAButton } from '@/components/shared/CTAButton';

export function KirdarFeatureBlock() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-background via-card to-background border-y border-primary/20">
      {/* Decorative orange glow blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[200px] w-[300px] rounded-full bg-primary/5 blur-3xl md:h-[400px] md:w-[600px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-5">
          <span className="w-6 h-px bg-primary" />
          Featured Product
          <span className="w-6 h-px bg-primary" />
        </span>

        {/* Headline */}
        <h2 className="text-2xl font-bold text-foreground tracking-tight leading-tight mb-5 max-w-3xl md:text-4xl lg:text-5xl">
          The Revolution is Here
        </h2>

        {/* Subtext */}
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
          Kirdar.ai is an AI-powered employee training simulator that transforms
          onboarding, role-play training, and skill gap analysis. Built for the
          future of work.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/products/kirdar-ai" variant="primary">
            Explore Kirdar.ai
          </CTAButton>
          <CTAButton href="/engage/contact" variant="secondary">
            Book a Demo
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
