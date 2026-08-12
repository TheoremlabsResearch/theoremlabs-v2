import type { Metadata } from 'next';
import { Users, BookOpen, BarChart2, Settings, Brain, TrendingUp } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTAButton } from '@/components/shared/CTAButton';
import { CheckBadge } from '@/components/shared/CheckBadge';

export const metadata: Metadata = {
  title: 'Kirdar.ai | Theoremlabs',
  description:
    'Kirdar.ai is an AI-powered employee training simulator that accelerates workforce readiness through immersive scenario simulation, live SOP-based feedback, and skill gap tracking - purpose-built for high-interaction industries.',
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

const features: Feature[] = [
  {
    icon: <Users className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: 'Real-World Scenario Simulation',
    description:
      'AI simulates the real conversations, escalations, and edge cases your employees face every day. From difficult client calls to high-stakes compliance scenarios, staff build confidence through guided practice in a consequence-free environment - before going live.',
  },
  {
    icon: <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: 'Live Feedback Based on Internal SOPs',
    description:
      "Kirdar.ai delivers in-the-moment coaching grounded in your organization's own standard operating procedures, not generic best practices. Every response is evaluated against your policies, so feedback is always accurate, relevant, and actionable.",
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: 'Skill Gap Identification & Tracking',
    description:
      'Continuously maps individual and team-level competency gaps across your workforce. Kirdar.ai tells you exactly where knowledge is missing, who needs intervention, and whether training is closing the gap - with data, not guesswork.',
  },
];

const steps: Step[] = [
  {
    number: '01',
    icon: <Settings className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Set Up Your Training Scenarios',
    description:
      "Define the roles, competencies, and real-world situations that matter most to your organization. Kirdar.ai's intuitive scenario builder lets you configure training programs in minutes, not months.",
  },
  {
    number: '02',
    icon: <Brain className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Employees Train With AI Simulations',
    description:
      'Your team engages in lifelike, AI-powered conversations and simulations that replicate the pressure and nuance of real workplace interactions. Instant feedback and adaptive dialogue keep every session meaningful.',
  },
  {
    number: '03',
    icon: <TrendingUp className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Track Progress and Close Skill Gaps With Data',
    description:
      'Comprehensive dashboards surface individual and team-level insights, letting leaders identify where training is working and where to intervene. Act on evidence, not intuition.',
  },
];

export default function KirdarAIPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* ── Hero ── */}
      <PageHero
        eyebrow="Products"
        title="Kirdar.ai"
        subtitle="The AI-powered employee training simulator that transforms how organizations onboard, upskill, and develop their teams."
      />

      {/* ── What is Kirdar.ai? ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Text column */}
            <div className="flex flex-col gap-6">
              <SectionHeader
                eyebrow="Overview"
                title="What is Kirdar.ai?"
                align="left"
              />
              <p className="text-base leading-relaxed text-muted-foreground">
                Kirdar.ai is a next-generation employee training simulator built on the premise that
                people learn best by doing. Traditional training programs rely on passive content
                consumption - videos, slides, and manuals that employees forget within days.
                Kirdar.ai replaces that passive model with interactive, AI-driven simulations that
                put employees in realistic scenarios, demand active responses, and deliver
                personalized feedback in real time.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Whether you are onboarding a new cohort, closing skill gaps on a tenured team, or
                preparing your people for complex client-facing situations, Kirdar.ai adapts to the
                challenge. The result is a workforce that is more confident, more capable, and ready
                for what comes next.
              </p>
              <div className="flex flex-col gap-3 pt-2">
                {['Reduce time-to-productivity for new hires', 'Scale training without scaling headcount', 'Build institutional knowledge that sticks'].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckBadge />
                    <span className="text-sm text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Outer glow card */}
                <div className="rounded-2xl border border-border bg-card p-8 shadow-xl">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                      <Brain className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">Kirdar.ai Simulator</span>
                  </div>

                  {/* Mock chat bubbles */}
                  <div className="flex flex-col gap-3">
                    <div className="self-start rounded-lg rounded-tl-none bg-background px-4 py-3 text-xs text-muted-foreground max-w-[80%] border border-border">
                      &ldquo;Walk me through how you&apos;d handle a difficult client escalation.&rdquo;
                    </div>
                    <div className="self-end rounded-lg rounded-tr-none bg-primary/10 px-4 py-3 text-xs text-foreground max-w-[80%] border border-primary/20">
                      &ldquo;I&apos;d start by acknowledging their concern and&hellip;&rdquo;
                    </div>
                    <div className="self-start rounded-lg rounded-tl-none bg-background px-4 py-3 text-xs text-muted-foreground max-w-[80%] border border-border">
                      Good start. Let&apos;s dig deeper &mdash; the client is now threatening to leave.
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
                    {[
                      { label: 'Onboarding', value: '10→3w' },
                      { label: 'First-Call Res.', value: '+25%' },
                      { label: 'Turnover', value: '-40%' },
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
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <span className="text-xs font-medium text-foreground">AI Active</span>
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
              title="Everything your training program needs"
              subtitle="Three integrated capabilities that work together to build a continuously improving workforce."
              align="center"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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

      {/* ── How It Works ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex justify-center">
            <SectionHeader
              eyebrow="How It Works"
              title="Up and running in three steps"
              subtitle="Kirdar.ai is designed for rapid deployment. From configuration to measurable results, the path is direct."
              align="center"
            />
          </div>

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Connector line — visible on md+ */}
            <div
              className="absolute left-0 right-0 top-9 hidden border-t border-dashed border-border md:block"
              aria-hidden="true"
            />

            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col gap-5">
                {/* Step number bubble */}
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

      {/* ── Proven Results ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <SectionHeader
            eyebrow="Proven Results"
            title="Real outcomes from real deployments"
            subtitle="Measured impact from a Retail Banking deployment - where Kirdar.ai compressed onboarding and transformed frontline performance."
            align="center"
          />
          <div className="grid grid-cols-1 gap-px bg-border rounded-2xl overflow-hidden sm:grid-cols-3">
            {[
              { value: '10 → 3', label: 'Weeks Onboarding Time', context: 'Retail Banking' },
              { value: '+25%', label: 'First-Call Resolution Rate', context: 'Retail Banking' },
              { value: '-40%', label: 'New Hire Turnover', context: 'Retail Banking' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2 bg-card px-8 py-10 text-center">
                <span className="text-4xl font-bold text-primary md:text-5xl">{stat.value}</span>
                <span className="text-sm font-medium text-foreground">{stat.label}</span>
                <span className="text-xs text-muted-foreground">{stat.context}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Ideal For</span>
              <span className="text-sm text-muted-foreground">Banking, retail, BPOs, and industries with high customer interaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl border border-border bg-card px-8 py-16 md:px-16 flex flex-col items-center gap-6">
            <SectionHeader
              eyebrow="Get Started"
              title="Ready to transform your training program?"
              subtitle="Join forward-thinking organizations using Kirdar.ai to build more capable, confident teams - faster than ever before."
              align="center"
            />
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href="/engage/contact" variant="primary">
                Book a Demo
              </CTAButton>
              <CTAButton href="/engage/contact" variant="secondary">
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
