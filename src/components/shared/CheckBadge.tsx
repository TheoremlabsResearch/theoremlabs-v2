import { cn } from '@/lib/utils';

interface CheckBadgeProps {
  className?: string;
}

export function CheckBadge({ className }: CheckBadgeProps) {
  return (
    <span
      className={cn(
        'mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/15',
        className
      )}
    >
      <svg
        className="h-3 w-3 text-primary"
        fill="currentColor"
        viewBox="0 0 12 12"
        aria-hidden="true"
      >
        <path d="M10.28 2.28a.75.75 0 00-1.06 0L4.5 7l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l5.25-5.25a.75.75 0 000-1.06z" />
      </svg>
    </span>
  );
}
