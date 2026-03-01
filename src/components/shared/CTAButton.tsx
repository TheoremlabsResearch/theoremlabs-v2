import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function CTAButton({
  href,
  children,
  variant = 'primary',
  className,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200',
        variant === 'primary'
          ? 'bg-[#F97316] text-white hover:bg-[#ea6a0a] active:bg-[#d45e08]'
          : 'border border-[#1E3A5F] text-[#F8FAFC] hover:border-[#F97316] hover:text-[#F97316]',
        className
      )}
    >
      {children}
    </Link>
  );
}
