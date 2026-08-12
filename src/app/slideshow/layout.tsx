import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Theoremlabs Partners LLC - Company Overview',
  description: 'Company presentation slideshow for Theoremlabs Partners LLC - The New Software Era',
};

export default function SlideshowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
