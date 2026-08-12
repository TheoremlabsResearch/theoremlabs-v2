'use client';

import Link from 'next/link';
import { Lightbulb, FlaskConical, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { cn } from '@/lib/utils';

interface Pillar {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const pillars: Pillar[] = [
  {
    title: 'Advisory & Consulting',
    description:
      'Strategic guidance for AI, Data, Cloud, and Web3 implementations across Fintech organizations',
    href: '/advisory-consulting',
    icon: Lightbulb,
  },
  {
    title: 'Art of Possible Labs',
    description:
      'A rapid experimentation lab where ambitious ideas are built, tested, and validated with real technology',
    href: '/art-of-possible-labs',
    icon: FlaskConical,
  },
  {
    title: 'Accelerators',
    description:
      'Pre-built, production-ready AI accelerators - ReconcileAI, KnowledgePulse, InsightBridge, SyntheticEdge, and PromptLine',
    href: '/products/accelerators',
    icon: Rocket,
  },
];

export function ThreePillars() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <SectionHeader
          eyebrow="What We Do"
          title="Three Pillars of Innovation"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.href}
                className={cn(
                  'flex flex-col gap-5 bg-card border border-border rounded-xl p-6 md:p-8',
                  'transition-colors duration-300 hover:border-primary/50'
                )}
                whileHover={{ y: -4 }}
                transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {pillar.description}
                  </p>
                </div>

                <Link
                  href={pillar.href}
                  className="text-sm font-medium text-primary hover:text-[#ea6a0a] transition-colors duration-200 self-start"
                >
                  Learn More &rarr;
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
