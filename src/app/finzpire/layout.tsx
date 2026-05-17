import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Theoremlabs · FinZpire 2026',
  description: 'Proof of Work — Theoremlabs at FinZpire 2026, Charlotte NC',
};

export default function FinzpireLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
