import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1.5',
        className
      )}
    >
      <Image
        src="/images/logo-white.png"
        alt=""
        width={500}
        height={500}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className="h-8 w-8 flex-shrink-0"
      />
      <span className="text-lg font-bold tracking-tight text-black whitespace-nowrap">
        Theoremlabs.io
      </span>
    </span>
  );
}
