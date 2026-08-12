import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export function CTAButton({
  href,
  children,
  variant = 'primary',
  className,
  onClick,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200',
        variant === 'primary'
          ? 'bg-primary text-white hover:bg-[#ea6a0a] active:bg-[#d45e08]'
          : 'border border-border text-foreground hover:border-primary hover:text-primary',
        className
      )}
    >
      {children}
    </Link>
  );
}
