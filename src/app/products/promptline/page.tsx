import type { Metadata } from 'next';
import {
  Phone,
  MessageSquare,
  Zap,
  ShieldCheck,
  BarChart2,
  Plug,
  Settings,
  Bot,
  TrendingUp,
  ExternalLink,
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTAButton } from '@/components/shared/CTAButton';
import { CheckBadge } from '@/components/shared/CheckBadge';

export const metadata: Metadata = {
  title: 'PromptLine | Theoremlabs',
  description:
    'PromptLine is an AI-powered conversational platform for financial services - intelligent voice and text interfaces that handle customer queries, route complex cases, and integrate with core banking systems.',
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
    icon: <Phone className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: 'AI Voice Calls',
    description:
      'Natural, human-like voice conversations powered by large language models. PromptLine handles inbound and outbound calls - answering questions, collecting information, and resolving issues - without ever putting customers on hold.',
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: 'SMS & Text Automation',
    description:
      'Two-way text conversations that feel personal. Send proactive notifications, handle replies intelligently, and drive customer actions through a channel they already use - all with zero manual intervention from your team.',
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: 'Instant Intelligent Routing',
    description:
      'When a conversation requires a human, PromptLine routes it to the right agent with full context - no repeat explanations, no dropped handoffs. Complex cases escalate cleanly; routine cases resolve automatically.',
  },
  {
    icon: <Plug className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: 'Core Banking Integration',
    description:
      'Deep integrations with core banking platforms, CRM systems, and data warehouses. PromptLine reads and writes real data during conversations, enabling it to check balances, initiate transactions, and update records in real time.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: 'Compliance & Audit Trails',
    description:
      'Every conversation is logged, transcribed, and audit-ready. Built-in compliance guardrails prevent the AI from crossing regulatory lines, with full export capabilities for your compliance and legal teams.',
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-primary" aria-hidden="true" />,
    title: 'Real-Time Analytics',
    description:
      'Dashboards that surface containment rates, resolution times, sentiment trends, and escalation patterns. Continuously optimize your conversation flows with data that makes the impact of every change visible.',
  },
];

const steps: Step[] = [
  {
    number: '01',
    icon: <Settings className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Configure Your Conversation Flows',
    description:
      "Define the intents, data sources, and escalation rules that govern how PromptLine handles your customers. Our flow builder lets your team configure AI behavior in plain language - no prompt engineering PhD required.",
  },
  {
    number: '02',
    icon: <Bot className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Deploy Across Voice & Text Channels',
    description:
      'Go live on your phone number and SMS shortcodes in days. PromptLine connects to your existing telephony infrastructure and messaging platforms, with no rip-and-replace required.',
  },
  {
    number: '03',
    icon: <TrendingUp className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Measure, Learn, and Scale',
    description:
      'Monitor containment rates and customer satisfaction from day one. Use real conversation data to refine flows, expand coverage, and scale confident that quality improves as volume grows.',
  },
];

const useCases: UseCase[] = [
  {
    title: 'Account Inquiries',
    description: 'Balance checks, transaction history, and statement requests resolved instantly - 24/7, without agent involvement.',
  },
  {
    title: 'Loan & Credit Queries',
    description: 'Answer eligibility questions, collect application information, and guide customers through next steps with zero wait time.',
  },
  {
    title: 'Collections & Reminders',
    description: 'Proactive outreach that is firm but empathetic. PromptLine negotiates payment arrangements and logs outcomes automatically.',
  },
  {
    title: 'KYC & Identity Verification',
    description: 'Guide customers through identity verification workflows conversationally, reducing friction and abandonment rates.',
  },
  {
    title: 'Appointment Scheduling',
    description: 'Let customers book branch visits, advisor calls, and loan closings through voice or text - integrated with your calendar systems.',
  },
  {
    title: 'Fraud Alerts & Confirmations',
    description: 'Reach customers instantly when suspicious activity is detected. Confirm or dispute transactions in a single, secure conversation.',
  },
];

export default function PromptLinePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* ── Hero ── */}
      <PageHero
        eyebrow="Products"
        title="PromptLine"
        subtitle="Intelligent voice and text conversations for financial services - available 24/7, integrated with your core systems, and ready to scale."
      >
        <a
          href="https://promptline.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-[#ea6a0a] transition-colors duration-200"
        >
          Visit PromptLine.app
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </PageHero>

      {/* ── What is PromptLine? ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Text column */}
            <div className="flex flex-col gap-6">
              <SectionHeader eyebrow="Overview" title="What is PromptLine?" align="left" />
              <p className="text-base leading-relaxed text-muted-foreground">
                PromptLine is a conversational AI platform built for the speed and compliance
                demands of financial services. While legacy IVR systems frustrate customers with
                rigid menus and long hold times, PromptLine holds natural, contextually aware
                conversations - over the phone or via text - that resolve issues, collect
                information, and take action without any human in the loop.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Unlike generic chatbot builders, PromptLine is engineered from the ground up for
                Fintech. It understands financial terminology, connects directly to banking
                infrastructure, and operates within the guardrails your compliance team demands.
                Deploy it to any customer-facing channel and reclaim the agent capacity your team
                spends on repetitive, automatable work.
              </p>
              <div className="flex flex-col gap-3 pt-2">
                {[
                  'Resolve 70%+ of inquiries without agent involvement',
                  'Go live in days - not months',
                  'Full audit trail for every conversation',
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
                      <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">PromptLine</p>
                      <p className="text-xs text-muted-foreground">Call in progress · 00:42</p>
                    </div>
                    <span className="ml-auto flex items-center gap-1.5 rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      Live
                    </span>
                  </div>

                  {/* Waveform bars */}
                  <div className="mb-5 flex items-end justify-center gap-1 h-10" aria-hidden="true">
                    {[3, 6, 9, 12, 8, 14, 10, 7, 12, 9, 5, 11, 8, 6, 10, 13, 7, 9, 11, 6].map(
                      (h, i) => (
                        <span
                          key={i}
                          className="w-1.5 rounded-full bg-primary/60"
                          style={{ height: `${h * 2.5}px` }}
                        />
                      )
                    )}
                  </div>

                  {/* Transcript line */}
                  <div className="rounded-lg bg-background px-4 py-3 text-xs text-muted-foreground border border-border mb-5">
                    &ldquo;I&apos;d like to check my account balance and the last three transactions&hellip;&rdquo;
                  </div>
                  <div className="rounded-lg bg-primary/10 px-4 py-3 text-xs text-foreground border border-primary/20 mb-5">
                    &ldquo;Sure! Your current balance is $4,821.40. Your last three transactions were&hellip;&rdquo;
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 border-t border-border pt-5">
                    {[
                      { label: 'Containment', value: '78%' },
                      { label: 'Avg Handle', value: '1.8m' },
                      { label: 'Uptime', value: '99.9%' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-lg font-bold text-primary">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating channel badge */}
                <div className="absolute -right-4 -top-4 flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 shadow-lg">
                  <MessageSquare className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  <span className="text-xs font-medium text-foreground">Voice + SMS</span>
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
              title="Everything you need to automate customer conversations"
              subtitle="Six integrated capabilities built for the compliance, scale, and integration demands of financial services."
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
            title="Where PromptLine goes to work"
            subtitle="Built for the most common - and most costly - customer interaction patterns in financial services."
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
              title="Live in three steps"
              subtitle="PromptLine is built for rapid deployment. From configuration to your first automated call, the path is direct."
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
              title="Ready to put your customer conversations on autopilot?"
              subtitle="Talk to our team about your call volume, use cases, and integration requirements. We'll show you exactly what PromptLine can automate - and what it will cost you not to."
              align="center"
            />
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href="/engage/contact" variant="primary">
                Book a Demo
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
