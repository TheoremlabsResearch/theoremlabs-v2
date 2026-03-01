import type { Metadata } from 'next';
import {
  Cloud,
  Landmark,
  Briefcase,
  GraduationCap,
  BrainCircuit,
  Lightbulb,
  MapPin,
  Handshake,
  CheckCircle2,
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTAButton } from '@/components/shared/CTAButton';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Partnerships | Theoremlabs',
  description:
    'Theoremlabs partner ecosystem — technology vendors, financial institutions, implementation partners, and academic collaborators building the future of Fintech AI together.',
};

interface PartnerCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string;
}

interface WhyPartnerBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const partnerCategories: PartnerCategory[] = [
  {
    icon: <Cloud className="h-6 w-6 text-[#F97316]" aria-hidden="true" />,
    title: 'Technology Partnerships',
    description:
      'We collaborate with leading cloud platforms, AI model providers, and data infrastructure vendors to bring best-in-class tooling to our Fintech AI solutions. These partnerships ensure our clients always have access to the most capable and compliant technology stack.',
    examples: 'Cloud platforms · AI model providers · Data infrastructure vendors',
  },
  {
    icon: <Landmark className="h-6 w-6 text-[#F97316]" aria-hidden="true" />,
    title: 'Financial Institution Partnerships',
    description:
      'Banks, credit unions, and Fintech companies partner with Theoremlabs to co-develop and pilot AI solutions against real-world financial data and workflows. Charlotte, NC — home to Bank of America headquarters and major financial institutions — is at the center of this ecosystem.',
    examples: 'Banks · Credit unions · Fintech companies',
  },
  {
    icon: <Briefcase className="h-6 w-6 text-[#F97316]" aria-hidden="true" />,
    title: 'Implementation Partnerships',
    description:
      'Consulting firms and systems integrators who deliver Theoremlabs methodologies to enterprise clients at scale. We equip our implementation partners with the frameworks, tooling, and training needed to bring our AI solutions to market effectively.',
    examples: 'Consulting firms · Systems integrators · Delivery partners',
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-[#F97316]" aria-hidden="true" />,
    title: 'Academic & Research Partnerships',
    description:
      'We work alongside universities and research labs advancing the frontier of AI innovation in financial services. These collaborations fuel applied research, talent pipelines, and early access to emerging models and methods before they reach mainstream adoption.',
    examples: 'Universities · Research labs · AI innovation centers',
  },
];

const whyPartnerBenefits: WhyPartnerBenefit[] = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-[#F97316]" aria-hidden="true" />,
    title: 'Fintech-Specific AI Expertise',
    description:
      'Gain access to a team with deep domain knowledge across banking, payments, capital markets, and insurance. We understand the regulatory landscape, data constraints, and integration challenges unique to financial services — so you can move faster without the learning curve.',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-[#F97316]" aria-hidden="true" />,
    title: 'Co-Innovation Opportunities',
    description:
      'Partners collaborate directly with our build lab to co-develop new AI capabilities, pilot novel use cases, and shape product roadmaps. You bring the domain knowledge; we bring the engineering and AI depth — together we build what neither could alone.',
  },
  {
    icon: <MapPin className="h-8 w-8 text-[#F97316]" aria-hidden="true" />,
    title: 'Charlotte Fintech Ecosystem Access',
    description:
      'Theoremlabs is embedded in Charlotte, NC — the second-largest banking hub in the United States and home to Bank of America headquarters and dozens of major financial institutions. Our network gives partners direct access to decision-makers across this concentrated ecosystem.',
  },
  {
    icon: <Handshake className="h-8 w-8 text-[#F97316]" aria-hidden="true" />,
    title: 'Joint Go-to-Market',
    description:
      'We structure partnerships around shared commercial success. Through co-branded initiatives, joint thought leadership, and aligned sales motions, Theoremlabs partners gain a credible co-seller and market amplifier in the Fintech AI space.',
  },
];

const philosophyPoints: string[] = [
  'Co-creation over vendor relationships — we build alongside partners, not just beside them',
  'Ecosystem thinking that makes every participant stronger',
  'Shared accountability for outcomes, not just deliverables',
  'Long-term alignment over transactional engagements',
];

export default function PartnershipsPage() {
  return (
    <main className="bg-[#0F1B2D] min-h-screen">
      {/* Section 1 — Hero */}
      <PageHero
        eyebrow="About"
        title="Partnerships"
        subtitle="Building the Fintech AI ecosystem through strategic partnerships and collaboration."
      />

      {/* Section 2 — Our Partnership Philosophy */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="flex flex-col gap-5">
              <SectionHeader
                eyebrow="Our Philosophy"
                title="Co-creating the future of Fintech AI."
                align="left"
              />
              <p className="text-[#94A3B8] text-base leading-relaxed">
                Theoremlabs believes the best Fintech solutions are co-created with ecosystem
                partners. No single company holds all of the expertise, infrastructure, or market
                access required to truly transform financial services with AI. That is why we
                intentionally bring together technology vendors, implementation partners, financial
                institutions, and domain experts — weaving a fabric of collaboration that produces
                outcomes none of us could achieve working alone.
              </p>
              <p className="text-[#94A3B8] text-base leading-relaxed">
                Our partnership model is built on mutual investment and shared success. We do not
                treat partners as channels or vendors; we treat them as co-builders of a Fintech AI
                ecosystem centered on the Charlotte, NC financial hub and extending globally.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                How We Partner
              </p>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {philosophyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-5 w-5 text-[#F97316] mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[#F8FAFC] text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Partnership Categories */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <SectionHeader
            eyebrow="Partnership Types"
            title="How we collaborate"
            subtitle="Four distinct partnership models — each designed to create focused, high-impact relationships across the Fintech AI value chain."
            align="center"
          />

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 m-0">
            {partnerCategories.map((category) => (
              <li
                key={category.title}
                className={cn(
                  'bg-[#1A2B45] border border-[#1E3A5F] rounded-xl p-7 flex flex-col gap-4',
                  'transition-colors duration-200 hover:border-[#F97316]/40'
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#0F1B2D] border border-[#1E3A5F]">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#F8FAFC] leading-snug">
                    {category.title}
                  </h3>
                </div>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{category.description}</p>
                <p className="text-xs font-medium text-[#F97316] tracking-wide">
                  {category.examples}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 4 — Why Partner with Theoremlabs */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <SectionHeader
            eyebrow="Why Theoremlabs"
            title="Why partner with Theoremlabs?"
            subtitle="What you gain when you build alongside us."
            align="center"
          />

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
            {whyPartnerBenefits.map((benefit) => (
              <li
                key={benefit.title}
                className="bg-[#1A2B45] border border-[#1E3A5F] rounded-xl p-7 flex flex-col gap-5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F1B2D] border border-[#1E3A5F]">
                  {benefit.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-[#F8FAFC] leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 5 — Partnership Inquiry CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-xl bg-[#1A2B45] border border-[#1E3A5F] p-10 md:p-14 flex flex-col items-center text-center gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
              Work Together
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F8FAFC] max-w-2xl">
              Ready to build the Fintech AI ecosystem together?
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed max-w-xl">
              Whether you are a technology vendor, financial institution, systems integrator, or
              research organization — if you are serious about AI in financial services, let&apos;s
              talk about what we can build together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <CTAButton href="/engage/become-a-partner" variant="primary">
                Explore a Partnership
              </CTAButton>
              <CTAButton href="/engage/contact" variant="secondary">
                Get in Touch
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
