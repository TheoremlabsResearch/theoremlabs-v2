import type { Metadata } from 'next';
import { CheckCircle2, ClipboardList, Users2, Rocket } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTAButton } from '@/components/shared/CTAButton';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Setup Design Workshops | Theoremlabs',
  description:
    'Structured workshops that turn your AI ambitions into concrete implementation roadmaps. A focused 1-2 day engagement facilitated by Theoremlabs for Fintech leaders.',
};

interface WorkshopOutcome {
  text: string;
}

interface FormatPhase {
  icon: React.ReactNode;
  phase: string;
  title: string;
  items: string[];
}

interface AudienceRole {
  title: string;
}

const workshopOutcomes: WorkshopOutcome[] = [
  { text: 'Defined AI use-case priorities ranked by impact and feasibility' },
  { text: 'A concrete implementation roadmap with clear milestones and owners' },
  { text: 'Technology stack recommendations tailored to your existing infrastructure' },
  { text: 'Quick-win identification — high-value initiatives you can start within 30 days' },
];

const audienceRoles: AudienceRole[] = [
  { title: 'Chief Technology Officers' },
  { title: 'VPs of Engineering' },
  { title: 'Product Leaders' },
  { title: 'Innovation & Transformation Teams' },
  { title: 'Fintech Organizations exploring AI adoption' },
];

const formatPhases: FormatPhase[] = [
  {
    icon: <ClipboardList className="h-6 w-6 text-[#F97316]" aria-hidden="true" />,
    phase: '01',
    title: 'Pre-Workshop',
    items: [
      'Stakeholder intake questionnaire to surface context and constraints',
      'Review of existing tech stack, data assets, and strategic priorities',
      'Facilitation guide and agenda shared in advance',
      'Alignment call with workshop lead to validate scope',
    ],
  },
  {
    icon: <Users2 className="h-6 w-6 text-[#F97316]" aria-hidden="true" />,
    phase: '02',
    title: 'During Workshop',
    items: [
      'Structured discovery sessions with cross-functional stakeholders',
      'AI use-case ideation and prioritization exercises',
      'Live roadmap drafting and dependency mapping',
      'Technology stack review and recommendation framing',
    ],
  },
  {
    icon: <Rocket className="h-6 w-6 text-[#F97316]" aria-hidden="true" />,
    phase: '03',
    title: 'Post-Workshop',
    items: [
      'Documented roadmap with prioritized initiative list',
      'Written technology stack recommendations',
      'Quick-win action plan with 30/60/90-day framing',
      'Optional follow-on advisory or build engagement',
    ],
  },
];

export default function WorkshopsPage() {
  return (
    <main className="bg-[#0F1B2D] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Engage"
        title="Setup Design Workshops"
        subtitle="Structured workshops that turn your AI ambitions into concrete implementation roadmaps."
      />

      {/* What Is a Setup Design Workshop */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Description */}
            <div className="flex flex-col gap-6">
              <SectionHeader
                eyebrow="The Engagement"
                title="What is a Setup Design Workshop?"
                align="left"
              />
              <p className="text-[#94A3B8] text-base leading-relaxed">
                A Setup Design Workshop is a focused 1-2 day engagement where Theoremlabs
                facilitates structured discovery, stakeholder alignment, and roadmap creation for AI
                and Fintech initiatives. It is designed to replace months of unproductive back-and-forth
                with a single, high-intensity session that produces decisions, not slide decks.
              </p>
              <p className="text-[#94A3B8] text-base leading-relaxed">
                Our practitioners bring deep Fintech domain knowledge and AI implementation
                experience directly into the room with your team. By the end, your organization
                walks away with a clear, prioritized plan — and the confidence to execute it.
              </p>
            </div>

            {/* Who it's for */}
            <div className="flex flex-col gap-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                Who It&apos;s For
              </p>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {audienceRoles.map((role) => (
                  <li key={role.title} className="flex items-center gap-3">
                    <CheckCircle2
                      className="h-5 w-5 text-[#F97316] flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[#F8FAFC] text-base">{role.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Outcomes */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <SectionHeader
            eyebrow="What You Get"
            title="Workshop Outcomes"
            subtitle="Every Setup Design Workshop produces four concrete deliverables your team can act on immediately."
            align="center"
          />

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 m-0">
            {workshopOutcomes.map((outcome, index) => (
              <li
                key={index}
                className={cn(
                  'flex items-start gap-4 bg-[#1A2B45] border border-[#1E3A5F] rounded-xl p-6',
                  'transition-colors duration-200 hover:border-[#F97316]/40'
                )}
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#0F1B2D] border border-[#1E3A5F]">
                  <CheckCircle2 className="h-5 w-5 text-[#F97316]" aria-hidden="true" />
                </div>
                <p className="text-[#F8FAFC] text-sm leading-relaxed pt-1.5">{outcome.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Workshop Format */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <SectionHeader
            eyebrow="The Format"
            title="How the Workshop Runs"
            subtitle="Three deliberate phases ensure every participant arrives prepared and every session ends with decisions."
            align="center"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {formatPhases.map((phase, index) => (
              <div
                key={phase.phase}
                className={cn(
                  'relative flex flex-col gap-6 rounded-xl bg-[#1A2B45] border border-[#1E3A5F] p-8',
                  'transition-colors duration-200 hover:border-[#F97316]'
                )}
              >
                {/* Connector line between cards (desktop only) */}
                {index < formatPhases.length - 1 && (
                  <span className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-[#1E3A5F] z-10" />
                )}

                {/* Phase number */}
                <span className="text-5xl font-black text-[#1E3A5F] leading-none select-none">
                  {phase.phase}
                </span>

                {/* Icon + phase label + title */}
                <div className="flex flex-col gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F1B2D] border border-[#1E3A5F]">
                    {phase.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316] mt-2">
                    Phase {phase.phase}
                  </span>
                  <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight">{phase.title}</h3>
                </div>

                {/* Items */}
                <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F97316]" />
                      <span className="text-[#94A3B8] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-xl bg-[#1A2B45] border border-[#1E3A5F] p-10 md:p-16 text-center flex flex-col items-center gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F8FAFC] max-w-2xl">
              Ready to turn ambition into a roadmap?
            </h2>
            <p className="text-[#94A3B8] text-base leading-relaxed max-w-xl">
              Book a Setup Design Workshop and leave with a clear AI implementation plan your team
              can act on immediately.
            </p>
            <CTAButton href="/engage/contact" variant="primary" className="mt-2 px-8 py-4 text-base">
              Book a Workshop
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
