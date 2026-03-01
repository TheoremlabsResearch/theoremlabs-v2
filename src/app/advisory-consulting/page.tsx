import Image from 'next/image';
import type { Metadata } from 'next';
import {
  BrainCircuit,
  Database,
  Cloud,
  Coins,
  ShieldCheck,
  CheckCircle2,
  Lightbulb,
  Users,
  TrendingUp,
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTAButton } from '@/components/shared/CTAButton';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Advisory & Consulting | Theoremlabs',
  description:
    'Theoremlabs advisory practice delivers AI strategy, data modernization, cloud migration, and Web3 readiness for financial institutions — guided by practitioners who have built what they advise on.',
};

interface ServiceArea {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Differentiator {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ApproachBullet {
  text: string;
}

const serviceAreas: ServiceArea[] = [
  {
    icon: <BrainCircuit className="h-6 w-6 text-[#F97316]" aria-hidden="true" />,
    title: 'AI Strategy & Implementation',
    description:
      'We help financial institutions move from AI experimentation to production with confidence. From use-case prioritization and model selection to governance frameworks and MLOps, we bridge the gap between proof-of-concept and enterprise-grade deployment.',
  },
  {
    icon: <Database className="h-6 w-6 text-[#F97316]" aria-hidden="true" />,
    title: 'Data Modernization',
    description:
      'Architect modern data platforms that power AI, analytics, and real-time decisioning. We design end-to-end data strategies — from ingestion pipelines and lakehouse foundations to data mesh patterns — purpose-built for the regulatory demands of financial services.',
  },
  {
    icon: <Cloud className="h-6 w-6 text-[#F97316]" aria-hidden="true" />,
    title: 'Cloud & Infrastructure',
    description:
      'Navigate cloud migration and optimization for financial workloads with a team that understands both the technical complexity and the compliance landscape. We deliver cloud strategies that cut costs, improve resilience, and accelerate time-to-market.',
  },
  {
    icon: <Coins className="h-6 w-6 text-[#F97316]" aria-hidden="true" />,
    title: 'Web3 & Digital Assets',
    description:
      'Navigate blockchain, tokenization, and digital asset opportunities in Fintech with clarity. We help institutions assess DeFi protocols, design tokenized product architectures, and build the operational and compliance structures required to participate safely.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-[#F97316]" aria-hidden="true" />,
    title: 'Risk & Compliance',
    description:
      'Embed risk management and regulatory compliance into your AI and data programs from day one. We translate evolving regulatory expectations — from model risk management to data privacy — into practical governance frameworks that enable innovation without exposure.',
  },
];

const approachBullets: ApproachBullet[] = [
  { text: 'Practitioners, not theorists — we have shipped what we advise on' },
  { text: 'Fintech-specific depth across banking, capital markets, payments, and insurance' },
  { text: 'AI-native thinking embedded in every engagement, not bolted on afterward' },
  { text: 'Outcome-oriented engagements structured around your delivery milestones' },
  { text: 'Access to our build lab when strategy needs to become reality fast' },
];

const differentiators: Differentiator[] = [
  {
    icon: <Lightbulb className="h-8 w-8 text-[#F97316]" aria-hidden="true" />,
    title: 'Built, Not Just Advised',
    description:
      'Our advisors have served as operators, engineers, and executives inside financial institutions. Every recommendation is grounded in the lived experience of making technology decisions under real constraints.',
  },
  {
    icon: <Users className="h-8 w-8 text-[#F97316]" aria-hidden="true" />,
    title: 'Fintech-Fluent by Design',
    description:
      'We speak the language of compliance officers, quants, and CTOs simultaneously. Our cross-functional fluency means we can operate across the full stakeholder map without losing depth in any domain.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-[#F97316]" aria-hidden="true" />,
    title: 'Strategy That Executes',
    description:
      'Advisory engagements connect directly to our build capabilities. When you need to move from roadmap to running code, we can extend seamlessly — no handoff friction, no context lost between strategy and delivery.',
  },
];

export default function AdvisoryConsultingPage() {
  return (
    <main className="bg-[#0F1B2D] min-h-screen">
      {/* Section 1 — Hero */}
      <PageHero
        eyebrow="Services"
        title="Advisory & Consulting"
        subtitle="Strategic guidance from practitioners who've built what they advise on."
      />

      {/* Visual Banner */}
      <section className="relative w-full overflow-hidden h-[420px]">
        <Image
          src="/images/Advisory%20and%20Consulting.png"
          alt="Advisory and Consulting — Theoremlabs"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B2D]/80 via-[#0F1B2D]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B2D] via-transparent to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316] mb-3">
            Practitioners, not theorists
          </span>
          <p className="text-2xl md:text-3xl font-bold text-[#F8FAFC] max-w-xl leading-snug">
            Strategy forged from the experience of building — not just advising.
          </p>
        </div>
      </section>

      {/* Section 2 — Our Approach */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Philosophy paragraph */}
            <div className="flex flex-col gap-5">
              <SectionHeader eyebrow="Our Approach" title="Counsel grounded in craft." align="left" />
              <p className="text-[#94A3B8] text-base leading-relaxed">
                Too many advisory engagements end with decks that gather dust. At Theoremlabs, our
                advisory practice is run by operators who have sat on your side of the table — as
                CTOs, data engineers, product leaders, and risk managers inside financial
                institutions. We do not offer generic frameworks; we co-develop executable strategies
                shaped by the specific constraints of your organization, your regulators, and your
                market.
              </p>
              <p className="text-[#94A3B8] text-base leading-relaxed">
                Our hybrid model — management consulting meets AI and data build lab — means that
                when strategy needs to become software, we can make that transition without skipping
                a beat. The same team that designed your data architecture can build it.
              </p>
            </div>

            {/* Differentiator bullets */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                What Sets Us Apart
              </p>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {approachBullets.map((bullet) => (
                  <li key={bullet.text} className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-5 w-5 text-[#F97316] mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[#F8FAFC] text-base leading-relaxed">{bullet.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Service Areas */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <SectionHeader
            eyebrow="Service Areas"
            title="Where we engage"
            subtitle="Deep expertise across the dimensions that matter most for AI-ready financial institutions."
            align="center"
          />

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 m-0">
            {serviceAreas.map((service) => (
              <li
                key={service.title}
                className={cn(
                  'bg-[#1A2B45] border border-[#1E3A5F] rounded-xl p-7 flex flex-col gap-4',
                  'transition-colors duration-200 hover:border-[#F97316]/40'
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#0F1B2D] border border-[#1E3A5F]">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#F8FAFC] leading-snug">
                    {service.title}
                  </h3>
                </div>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 4 — Why Theoremlabs for Advisory */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <SectionHeader
            eyebrow="Why Theoremlabs"
            title="Why Theoremlabs for Advisory?"
            subtitle="The difference between an advisor who has read the map and one who has walked the terrain."
            align="center"
          />

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0 m-0">
            {differentiators.map((item) => (
              <li
                key={item.title}
                className="bg-[#1A2B45] border border-[#1E3A5F] rounded-xl p-8 flex flex-col gap-5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F1B2D] border border-[#1E3A5F]">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-[#F8FAFC] leading-snug">{item.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 5 — CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-xl bg-[#1A2B45] border border-[#1E3A5F] p-10 md:p-14 flex flex-col items-center text-center gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F8FAFC] max-w-2xl">
              Ready to turn strategy into an unfair advantage?
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed max-w-xl">
              Tell us where you are and where you want to go. We will bring the experience, the
              framework, and the team to get you there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <CTAButton href="/engage/contact" variant="primary">
                Start a Conversation
              </CTAButton>
              <CTAButton href="/products/accelerators" variant="secondary">
                Explore Our Accelerators
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
