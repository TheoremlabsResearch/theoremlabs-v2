import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, align = 'left', children }: PageHeroProps) {
  return (
    <section className="bg-background py-20 px-4 md:px-8 lg:px-16 border-b border-border">
      <div className={cn('max-w-7xl mx-auto', align === 'center' && 'text-center')}>
        {eyebrow && (
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
