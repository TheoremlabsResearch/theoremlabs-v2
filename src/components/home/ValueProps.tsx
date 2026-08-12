'use client';

import { Award, Handshake, Zap, ShieldCheck, MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { cn } from '@/lib/utils';

interface ValueCard {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const VALUE_CARDS: ValueCard[] = [
  {
    id: 1,
    title: 'Battle-Hardened Experts',
    description:
      "Proven leaders from Fintech, AI, and management consulting who've built and shipped real products",
    icon: Award,
  },
  {
    id: 2,
    title: 'Walk the Talk',
    description:
      "We've built what we recommend. Our team has hands-on experience with every technology we advise on",
    icon: Handshake,
  },
  {
    id: 3,
    title: 'Lean & Agile Teams',
    description:
      'Move fast without the bureaucracy. Small, expert teams that deliver results quickly',
    icon: Zap,
  },
  {
    id: 4,
    title: 'Risk-Literate AI',
    description:
      'Built with compliance and risk management in mind from day one. AI that regulators can trust',
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: 'Prime Location',
    description:
      'Charlotte, NC: a thriving Fintech hub at the heart of the US banking ecosystem',
    icon: MapPin,
  },
];

function CardIcon({ card }: { card: ValueCard }) {
  const Icon = card.icon;
  return (
    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
      <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={1.5} />
    </div>
  );
}

function ValueCard({ card }: { card: ValueCard }) {
  return (
    <div
      className={cn(
        'bg-card border border-border rounded-xl p-6',
        'hover:border-primary/40 transition-colors',
        'flex flex-col gap-4'
      )}
    >
      <CardIcon card={card} />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-foreground leading-snug">{card.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
      </div>
    </div>
  );
}

export function ValueProps() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <SectionHeader
          eyebrow="What Sets Us Apart"
          title="Our Value Propositions"
          align="center"
        />

        {/* 5-card grid: 1 col → 2 col → 3 col.
            On lg, the last 2 cards are centered by placing them inside a
            full-width flex row that justifies center. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_CARDS.slice(0, 3).map((card) => (
            <ValueCard key={card.id} card={card} />
          ))}

          {/* Last row: 2 cards centered on desktop */}
          <div className="contents lg:hidden">
            {VALUE_CARDS.slice(3).map((card) => (
              <ValueCard key={card.id} card={card} />
            ))}
          </div>
        </div>

        {/* Desktop-only centered last row */}
        <div className="hidden lg:flex justify-center gap-6">
          {VALUE_CARDS.slice(3).map((card) => (
            <div key={card.id} className="w-full max-w-[calc((100%-1.5rem)/3)]">
              <ValueCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
