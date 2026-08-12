import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Technologies | Theoremlabs',
  description:
    'The latest AI technologies Theoremlabs tracks, evaluates, and deploys for Fintech clients.',
};

export default function AITechnologiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
