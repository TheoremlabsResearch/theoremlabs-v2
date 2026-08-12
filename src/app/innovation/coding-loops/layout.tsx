import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Coding Loops | Theoremlabs',
  description: 'The Agentic Shift 2026 framework for AI-powered software engineering.',
};

export default function CodingLoopsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
