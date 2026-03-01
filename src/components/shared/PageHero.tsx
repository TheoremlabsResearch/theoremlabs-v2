import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function PageHero({ eyebrow, title, subtitle, align = 'left' }: PageHeroProps) {
  return (
    <section className="bg-[#0F1B2D] py-20 px-4 md:px-8 lg:px-16 border-b border-[#1E3A5F]">
      <div className={cn('max-w-7xl mx-auto', align === 'center' && 'text-center')}>
        {eyebrow && (
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-[#F97316]">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#94A3B8]">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
