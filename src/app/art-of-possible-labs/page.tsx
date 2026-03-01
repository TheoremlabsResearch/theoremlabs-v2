import Image from 'next/image';
import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTAButton } from '@/components/shared/CTAButton';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Art of Possible Labs | Theoremlabs',
  description:
    'Art of Possible Labs is Theoremlabs\u2019 rapid experimentation and build lab for Fintech. Time-boxed co-creation sprints that take your boldest ideas from concept to working prototype.',
};

interface Phase {
  number: string;
  name: string;
  description: string;
}

interface BuildCard {
  title: string;
  description: string;
}

const phases: Phase[] = [
  {
    number: '01',
    name: 'Define',
    description:
      'Scope the problem with precision. Align stakeholders on success criteria, identify constraints, and assemble a cross-functional team ready to move fast.',
  },
  {
    number: '02',
    name: 'Build',
    description:
      'Rapid prototype sprints powered by AI, modern data engineering, and battle-tested Fintech architecture. Real code. Real integrations. No slide decks.',
  },
  {
    number: '03',
    name: 'Validate',
    description:
      'Test with real users against the objectives set in Define. Measure outcomes, surface insights, and make a clear-eyed decision on the path forward.',
  },
];

const buildCards: BuildCard[] = [
  {
    title: 'AI Prototypes',
    description:
      'LLM-powered workflows, intelligent agents, and generative tooling scoped to your specific Fintech use case.',
  },
  {
    title: 'Data Pipelines',
    description:
      'End-to-end ingestion, transformation, and serving layers built to validate a data product hypothesis in days.',
  },
  {
    title: 'API Integrations',
    description:
      'Connect to core banking systems, third-party data providers, or internal services with production-grade integration patterns.',
  },
  {
    title: 'Proof of Concepts',
    description:
      'Structured technical experiments that de-risk a strategic bet before committing to a full build cycle.',
  },
  {
    title: 'Internal Tools',
    description:
      'Ops dashboards, workflow automation, and decision-support tooling that unlocks team velocity immediately.',
  },
  {
    title: 'Customer-Facing Features',
    description:
      'Tested, deployable features your end-users actually interact with — not wireframes, working software.',
  },
];

export default function ArtOfPossibleLabsPage() {
  return (
    <main className="bg-[#0F1B2D] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Innovation"
        title="Art of Possible Labs"
        subtitle="Where ambitious ideas become working reality. Rapid prototyping and experimentation for Fintech."
      />

      {/* What Are the Labs */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
            {/* Text block */}
            <div className="flex flex-col gap-6 md:w-3/5">
              <SectionHeader
                eyebrow="The Concept"
                title="What Are the Labs?"
                align="left"
              />
              <p className="text-[#94A3B8] text-base leading-relaxed">
                Art of Possible Labs is a focused, time-boxed sprint environment where your team
                and Theoremlabs engineers co-create and stress-test real solutions — together. No
                lengthy discovery phases. No bloated SOWs. Just a structured cadence designed to
                compress months of deliberation into weeks of tangible progress.
              </p>
              <p className="text-[#94A3B8] text-base leading-relaxed">
                The Labs exist at the intersection of strategy and execution. We bring deep Fintech
                domain knowledge, modern AI and data engineering capability, and the discipline to
                ship something real. You bring the problem, the context, and the people closest to
                the challenge. Together, we find out what&apos;s actually possible — fast.
              </p>
              <p className="text-[#94A3B8] text-base leading-relaxed">
                Every Lab engagement ends with a working artifact: code you own, insights you can
                act on, and a validated signal on whether to scale, pivot, or park the idea. No
                ambiguity. No wasted cycles.
              </p>
            </div>

            {/* Hero Image */}
            <div className="flex flex-shrink-0 items-center justify-center md:w-2/5">
              <div className="relative overflow-hidden rounded-2xl border border-[#1E3A5F] w-full">
                <Image
                  src="/images/Art%20of%20Possible%20Labs.png"
                  width={600}
                  height={480}
                  alt="Art of Possible Labs — Theoremlabs experimentation lab"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0F1B2D]/60 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Labs Work — 3-Phase Process */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-t border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <SectionHeader
            eyebrow="The Process"
            title="How Labs Work"
            subtitle="Three deliberate phases that move from fuzzy problem to validated outcome without burning time on ceremony."
            align="center"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className={cn(
                  'relative flex flex-col gap-5 rounded-xl bg-[#1A2B45] border border-[#1E3A5F] p-8',
                  'transition-colors duration-200 hover:border-[#F97316]'
                )}
              >
                {/* Connector line between cards (desktop only) */}
                {index < phases.length - 1 && (
                  <span className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-[#1E3A5F] z-10" />
                )}

                <span className="text-5xl font-black text-[#1E3A5F] leading-none select-none">
                  {phase.number}
                </span>

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                    Phase {phase.number}
                  </span>
                  <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight">
                    {phase.name}
                  </h3>
                </div>

                <p className="text-[#94A3B8] text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build In Labs */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-t border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <SectionHeader
            eyebrow="Deliverables"
            title="What We Build In Labs"
            subtitle="Labs produce real, working software — not reports. Here is the range of artifacts we routinely deliver within a single engagement."
            align="center"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {buildCards.map((card) => (
              <div
                key={card.title}
                className={cn(
                  'flex flex-col gap-3 rounded-xl bg-[#1A2B45] border border-[#1E3A5F] p-6',
                  'transition-colors duration-200 hover:border-[#F97316]'
                )}
              >
                {/* Orange accent bar */}
                <span className="block h-0.5 w-8 rounded-full bg-[#F97316]" />
                <h3 className="text-base font-bold text-[#F8FAFC] tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-t border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-xl bg-[#1A2B45] border border-[#1E3A5F] p-10 md:p-16 text-center flex flex-col items-center gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F8FAFC] max-w-2xl">
              Ready to find out what&apos;s possible?
            </h2>
            <p className="text-[#94A3B8] text-base leading-relaxed max-w-xl">
              Bring us your hardest Fintech challenge. In a single Lab engagement we will scope it,
              build it, and validate it — so you know exactly what to do next.
            </p>
            <CTAButton href="/engage/contact" variant="primary" className="mt-2 px-8 py-4 text-base">
              Start a Lab Engagement
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
