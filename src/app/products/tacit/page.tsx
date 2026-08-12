import type { Metadata } from 'next';
import {
  Brain,
  BookOpen,
  Network,
  FileText,
  Users,
  BarChart2,
  Search,
  Layers,
  Rocket,
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTAButton } from '@/components/shared/CTAButton';
import { CheckBadge } from '@/components/shared/CheckBadge';

export const metadata: Metadata = {
  title: 'Tacit | Theoremlabs',
  description:
    'Tacit transforms tacit knowledge - the expertise locked inside your best people - into structured, shareable learning. AI-powered knowledge capture, structuring, and delivery for Fintech organizations.',
};

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface UseCase {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Brain className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: 'AI Knowledge Extraction',
    description:
      'Tacit uses AI-driven interviews and document analysis to surface the implicit knowledge that lives in your experts\' heads - the reasoning, judgment calls, and context that never makes it into official documentation.',
  },
  {
    icon: <Layers className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: 'Automatic Content Structuring',
    description:
      'Raw knowledge inputs - transcripts, documents, wikis, recordings - are automatically organized into structured learning modules, SOPs, and playbooks. No manual content authoring required.',
  },
  {
    icon: <Network className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: 'Living Knowledge Graph',
    description:
      'Tacit builds a connected map of your organizational knowledge - linking concepts, people, processes, and decisions. As your organization evolves, the knowledge graph evolves with it.',
  },
  {
    icon: <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: 'Personalized Learning Paths',
    description:
      'Deliver the right knowledge to the right person at the right time. Tacit adapts learning pathways based on role, experience level, and gaps - so every employee gets exactly what they need.',
  },
  {
    icon: <FileText className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: 'SOP & Playbook Generation',
    description:
      'Turn expert interviews and process walkthroughs into polished, audit-ready standard operating procedures and playbooks - in a fraction of the time it takes to write them manually.',
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: 'Knowledge Gap Analytics',
    description:
      'Identify where critical knowledge is concentrated, who holds it, and what happens if they leave. Tacit surfaces organizational knowledge risk before it becomes a business crisis.',
  },
];

const steps: Step[] = [
  {
    number: '01',
    icon: <Search className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Capture Knowledge at the Source',
    description:
      'Tacit ingests knowledge from wherever it lives - structured interviews with subject-matter experts, existing documents, wikis, meeting recordings, and process walkthroughs. Our AI asks the right follow-up questions to pull out the reasoning behind the rules.',
  },
  {
    number: '02',
    icon: <Layers className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Structure, Connect, and Verify',
    description:
      'Captured knowledge is automatically organized into structured formats - modules, SOPs, FAQs, playbooks - and linked into a knowledge graph. Subject-matter experts review and approve outputs before they go live.',
  },
  {
    number: '03',
    icon: <Rocket className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Deploy and Keep It Current',
    description:
      'Publish learning content directly to your teams via Tacit\'s delivery layer or integrate with your existing LMS. As processes change, Tacit flags outdated content and guides experts through updates.',
  },
];

const useCases: UseCase[] = [
  {
    title: 'New Employee Onboarding',
    description: 'Give new hires access to the institutional knowledge it used to take years to accumulate - structured, searchable, and always current.',
  },
  {
    title: 'Succession Planning',
    description: "Before your most experienced people retire or move on, capture what they know. Tacit ensures their expertise stays inside the organization.",
  },
  {
    title: 'Compliance Training',
    description: 'Convert regulatory guidance and compliance expertise into structured training materials that are easy to update when rules change.',
  },
  {
    title: 'M&A Knowledge Integration',
    description: "When organizations merge, knowledge silos collide. Tacit maps and merges institutional knowledge from both sides, accelerating integration.",
  },
  {
    title: 'Process Documentation',
    description: 'Stop chasing SMEs for process documentation. Tacit interviews them, structures their knowledge, and produces draft SOPs for their review.',
  },
  {
    title: 'Customer-Facing Enablement',
    description: 'Build a knowledge base your front-line teams can actually use - accurate, searchable, and built from the expertise of your best performers.',
  },
];

export default function TacitPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* ── Hero ── */}
      <PageHero
        eyebrow="Products"
        title="Tacit"
        subtitle="Transform tacit knowledge into structured learning. Capture the expertise inside your best people - and make it available to everyone."
      />

      {/* ── What is Tacit? ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Text column */}
            <div className="flex flex-col gap-6">
              <SectionHeader eyebrow="Overview" title="What is Tacit?" align="left" />
              <p className="text-base leading-relaxed text-muted-foreground">
                Every organization has a knowledge problem. The expertise that makes your best
                people exceptional lives in their heads - the judgment calls, the unwritten rules,
                the &ldquo;this is just how we do it here&rdquo; that never makes it into any
                manual. When those people leave, that knowledge walks out with them.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Tacit is an AI platform that closes that gap. It captures the implicit,
                experience-based knowledge your organization depends on and converts it into
                structured learning content - training modules, SOPs, playbooks, and knowledge
                bases - that can be shared, updated, and delivered at scale. The result is an
                organization where institutional knowledge is an asset you own, not a liability
                you manage.
              </p>
              <div className="flex flex-col gap-3 pt-2">
                {[
                  'Reduce onboarding time by surfacing the knowledge that matters',
                  'Protect against knowledge loss from attrition and retirement',
                  'Build training content from expert interviews, not blank pages',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckBadge />
                    <span className="text-sm text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative UI mockup */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="rounded-2xl border border-border bg-card p-8 shadow-xl">
                  {/* Header */}
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                      <Brain className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Tacit</p>
                      <p className="text-xs text-muted-foreground">Knowledge capture session</p>
                    </div>
                  </div>

                  {/* Mock interview flow */}
                  <div className="flex flex-col gap-3 mb-5">
                    <div className="rounded-lg bg-background px-4 py-3 text-xs text-muted-foreground border border-border">
                      <span className="block text-primary font-medium mb-1">Tacit AI</span>
                      &ldquo;When a trade fails to settle, walk me through your first three steps - and why you do them in that order.&rdquo;
                    </div>
                    <div className="rounded-lg bg-primary/10 px-4 py-3 text-xs text-foreground border border-primary/20">
                      <span className="block text-primary/70 font-medium mb-1">Expert</span>
                      &ldquo;First I check the counterparty status, because 80% of fails are on their side&hellip;&rdquo;
                    </div>
                  </div>

                  {/* Output pill */}
                  <div className="flex items-center gap-2 rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-2.5 mb-5">
                    <FileText className="h-4 w-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                    <span className="text-xs text-green-300">SOP draft generated → &quot;Trade Fail Resolution&quot;</span>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 border-t border-border pt-5">
                    {[
                      { label: 'Nodes', value: '2.4k' },
                      { label: 'Modules', value: '38' },
                      { label: 'Experts', value: '12' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-lg font-bold text-primary">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -right-4 -top-4 flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 shadow-lg">
                  <Users className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  <span className="text-xs font-medium text-foreground">Knowledge Captured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex justify-center">
            <SectionHeader
              eyebrow="Core Capabilities"
              title="From expert brains to organization-wide knowledge"
              subtitle="Six integrated capabilities that capture, structure, and deliver what your best people know."
              align="center"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <SectionHeader
            eyebrow="Use Cases"
            title="Where Tacit makes the difference"
            subtitle="Wherever institutional knowledge creates risk or opportunity, Tacit turns it into an organizational asset."
            align="center"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/40"
              >
                <span className="block h-0.5 w-8 rounded-full bg-primary" aria-hidden="true" />
                <h3 className="text-base font-bold text-foreground">{uc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex justify-center">
            <SectionHeader
              eyebrow="How It Works"
              title="Capture. Structure. Deploy."
              subtitle="Three phases that take knowledge from your experts&apos; heads to every employee&apos;s fingertips."
              align="center"
            />
          </div>

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
            <div
              className="absolute left-0 right-0 top-9 hidden border-t border-dashed border-border md:block"
              aria-hidden="true"
            />

            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="relative z-10 flex h-[4.5rem] w-[4.5rem] flex-shrink-0 flex-col items-center justify-center rounded-full border-2 border-primary bg-background">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pl-1">
                  <div className="flex items-center gap-2">
                    {step.icon}
                    <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl border border-border bg-card px-8 py-16 md:px-16 flex flex-col items-center gap-6">
            <SectionHeader
              eyebrow="Get Started"
              title="Stop losing what your best people know"
              subtitle="Talk to us about where knowledge risk lives in your organization. We will show you how Tacit captures it, structures it, and makes it available to everyone who needs it."
              align="center"
            />
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href="/engage/contact" variant="primary">
                Book a Demo
              </CTAButton>
              <CTAButton href="https://tacit.theoremlabs.io" variant="secondary">
                Visit Tacit
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
