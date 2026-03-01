'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Network,
  Plug,
  Database,
  FlaskConical,
  TrendingUp,
  ShieldCheck,
  Users,
  Bot,
  ArrowRight,
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTAButton } from '@/components/shared/CTAButton';
import { cn } from '@/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ModelItem {
  name: string;
  description: string;
}

interface CategoryCard {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

interface FintechFocusItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const aiModels: ModelItem[] = [
  {
    name: 'Claude (Anthropic)',
    description:
      "Anthropic's frontier models. Best for complex reasoning, long-context analysis, and safety-critical applications in Fintech.",
  },
  {
    name: 'GPT-4o (OpenAI)',
    description:
      'Multimodal flagship. Strong for document processing and customer-facing applications.',
  },
  {
    name: 'Gemini (Google DeepMind)',
    description:
      "Google's frontier model family. Deep integration with Google Cloud and strong code generation.",
  },
  {
    name: 'Open-Source (Llama, Mistral, DeepSeek)',
    description:
      'Self-hostable models for organizations with strict data residency requirements.',
  },
];

const fintechFocusItems: FintechFocusItem[] = [
  {
    icon: <ShieldCheck className="h-5 w-5 text-[#F97316]" />,
    title: 'Fraud Detection & AML',
    description: 'Real-time pattern recognition across transaction streams.',
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-[#F97316]" />,
    title: 'Regulatory Compliance',
    description: 'Automated monitoring and reporting with explainable AI.',
  },
  {
    icon: <Users className="h-5 w-5 text-[#F97316]" />,
    title: 'Customer Intelligence',
    description: 'Personalization at scale using behavioral AI.',
  },
  {
    icon: <Bot className="h-5 w-5 text-[#F97316]" />,
    title: 'Operational Automation',
    description: 'Back-office workflow automation with AI agents.',
  },
];

// ─── Animation variants ────────────────────────────────────────────────────────

const fadeUpVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function CategoryCard({
  icon,
  title,
  content,
  index,
}: CategoryCard & { index: number }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUpVariant}
      className="rounded-2xl border border-[#1E3A5F] bg-[#1A2B45] p-6 md:p-8"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F97316]/10">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-[#F8FAFC]">{title}</h3>
      </div>
      <div className="text-sm leading-relaxed text-[#94A3B8]">{content}</div>
    </motion.div>
  );
}

function ModelBadge({ name, description }: ModelItem) {
  return (
    <div className="rounded-xl border border-[#1E3A5F] bg-[#0F1B2D] p-4">
      <p className="mb-1 text-sm font-semibold text-[#F8FAFC]">{name}</p>
      <p className="text-xs leading-relaxed text-[#94A3B8]">{description}</p>
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-[#1E3A5F] bg-[#0F1B2D] px-3 py-1 text-xs font-medium text-[#94A3B8]">
      {label}
    </span>
  );
}

function InsightCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-lg border border-[#F97316]/30 bg-[#F97316]/5 px-4 py-3">
      <p className="text-xs leading-relaxed text-[#F97316]">{children}</p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AITechnologiesPage() {
  const categories: (CategoryCard & { index: number })[] = [
    {
      index: 0,
      icon: <Brain className="h-5 w-5 text-[#F97316]" />,
      title: 'AI Model Landscape',
      content: (
        <div className="flex flex-col gap-3">
          {aiModels.map((model) => (
            <ModelBadge key={model.name} {...model} />
          ))}
        </div>
      ),
    },
    {
      index: 1,
      icon: <Network className="h-5 w-5 text-[#F97316]" />,
      title: 'Agentic AI Frameworks',
      content: (
        <>
          <p className="mb-4">
            Multi-agent systems that coordinate LLMs to complete complex,
            multi-step workflows autonomously.
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            {['LangGraph', 'CrewAI', 'AutoGen'].map((fw) => (
              <Pill key={fw} label={fw} />
            ))}
          </div>
          <InsightCallout>
            Theoremlabs&apos; view: The shift from single-LLM to agentic
            multi-LLM is the most significant architectural change of 2025–2026.
          </InsightCallout>
        </>
      ),
    },
    {
      index: 2,
      icon: <Plug className="h-5 w-5 text-[#F97316]" />,
      title: 'MCP (Model Context Protocol)',
      content: (
        <>
          <div className="mb-3 space-y-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-[#F97316]">
                What it is
              </span>
              <p className="mt-1">
                An open standard by Anthropic that allows LLMs to connect to
                external tools, databases, and APIs in a structured, composable
                way.
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-[#F97316]">
                Why it matters
              </span>
              <p className="mt-1">
                Makes AI agents interoperable across tools — the &ldquo;USB
                standard&rdquo; for AI integrations.
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-[#F97316]">
                Fintech use cases
              </span>
              <p className="mt-1">
                Connect AI to core banking APIs, market data, and compliance
                databases.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      index: 3,
      icon: <Database className="h-5 w-5 text-[#F97316]" />,
      title: 'RAG (Retrieval Augmented Generation)',
      content: (
        <>
          <ul className="mb-4 list-inside list-disc space-y-2">
            <li>
              Augments LLM responses with retrieved context from proprietary
              data stores.
            </li>
            <li>
              Allows AI to reason over internal documents, regulations, and
              institutional knowledge without fine-tuning.
            </li>
          </ul>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-[#F97316]">
              Critical for
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {[
                'Regulatory document Q&A',
                'Internal knowledge bases',
                'Client-facing chatbots',
              ].map((uc) => (
                <Pill key={uc} label={uc} />
              ))}
            </div>
          </div>
        </>
      ),
    },
    {
      index: 4,
      icon: <FlaskConical className="h-5 w-5 text-[#F97316]" />,
      title: 'Synthetic Data Generation',
      content: (
        <>
          <p className="mb-3">
            Generating statistically valid, privacy-preserving data that mirrors
            real financial datasets.
          </p>
          <div className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-[#F97316]">
              Use cases
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {[
                'Model training without PII risk',
                'Testing environments',
                'Regulatory reporting simulation',
              ].map((uc) => (
                <Pill key={uc} label={uc} />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-[#F97316]/30 bg-[#F97316]/5 px-4 py-3">
            <span className="text-xs font-semibold text-[#F97316]">
              Theoremlabs accelerator:
            </span>
            <span className="text-xs font-bold text-[#F8FAFC]">
              SyntheticEdge
            </span>
          </div>
        </>
      ),
    },
  ];

  return (
    <main className="bg-[#0F1B2D] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Innovation"
        title="Latest AI Technologies"
        subtitle="The technologies Theoremlabs tracks, evaluates, and deploys for Fintech clients. Updated quarterly."
      />

      {/* Last Updated Badge */}
      <div className="px-4 md:px-8 lg:px-16 py-6 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto">
          <span className="bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/30 rounded-full px-3 py-1 text-xs font-medium">
            Last Updated: Q1 2026
          </span>
        </div>
      </div>

      {/* Technology Categories */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <SectionHeader
              eyebrow="Technology Radar"
              title="What We Track & Deploy"
              subtitle="A curated view of the AI stack Theoremlabs evaluates for enterprise Fintech clients."
              align="left"
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((cat) => (
              <CategoryCard key={cat.title} {...cat} />
            ))}

            {/* Fintech Focus Areas — spans full width */}
            <motion.div
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUpVariant}
              className="col-span-1 rounded-2xl border border-[#1E3A5F] bg-[#1A2B45] p-6 md:col-span-2 md:p-8 xl:col-span-3"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F97316]/10">
                  <TrendingUp className="h-5 w-5 text-[#F97316]" />
                </div>
                <h3 className="text-lg font-semibold text-[#F8FAFC]">
                  AI in Fintech — Theoremlabs Focus Areas
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {fintechFocusItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-[#1E3A5F] bg-[#0F1B2D] p-4"
                  >
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#F97316]/10">
                      {item.icon}
                    </div>
                    <p className="mb-1 text-sm font-semibold text-[#F8FAFC]">
                      {item.title}
                    </p>
                    <p className="text-xs leading-relaxed text-[#94A3B8]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-t border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
              'rounded-2xl border border-[#1E3A5F] bg-[#1A2B45]',
              'px-8 py-12 md:px-16 md:py-16',
              'flex flex-col items-center gap-6 text-center'
            )}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
              Get Started
            </span>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#F8FAFC] md:text-4xl">
              Ready to apply these technologies in your organization?
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-[#94A3B8]">
              Theoremlabs works with Fintech leaders to evaluate, pilot, and
              scale AI capabilities that deliver measurable business outcomes.
            </p>
            <CTAButton href="/engage/contact" className="gap-2">
              Talk to Theoremlabs
              <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
