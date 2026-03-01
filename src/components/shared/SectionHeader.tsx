import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'text-center items-center' : 'items-start'
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-semibold text-[#F8FAFC] tracking-tight sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-[#94A3B8] leading-relaxed max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
