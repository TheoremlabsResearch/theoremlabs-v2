'use client';

import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTAButton } from '@/components/shared/CTAButton';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Repeat, Factory, Workflow } from 'lucide-react';

interface LoopPattern {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  name: string;
  subtitle: string;
  pattern: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  topBorderColor: string;
  accentColor: string;
}

interface MatrixRow {
  dimension: string;
  ralph: string;
  gastown: string;
  cherny: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const loopPatterns: LoopPattern[] = [
  {
    icon: Repeat,
    name: 'Ralph Wiggum',
    subtitle: 'Naive Persistence',
    pattern:
      'Keep prompting the same AI session until it works or gives up.',
    pros: ['Simple, no overhead', 'No tooling required', 'Zero ramp-up time'],
    cons: [
      'Context Rot kills quality over time',
      'Non-deterministic results',
      'Hard to debug or reproduce',
    ],
    bestFor: 'Simple 1-shot tasks',
    topBorderColor: 'border-t-primary',
    accentColor: 'text-primary',
  },
  {
    icon: Factory,
    name: 'Gas Town',
    subtitle: 'Factory',
    pattern:
      'Spawn fresh AI agents for each discrete subtask; combine outputs downstream.',
    pros: [
      'Each agent starts with a clean context',
      'Parallelizable workloads',
      'Isolated failures per subtask',
    ],
    cons: [
      'Requires careful task decomposition',
      'Integration complexity between outputs',
      'Orchestration overhead',
    ],
    bestFor: 'Large projects that can be cleanly modularized',
    topBorderColor: 'border-t-accent',
    accentColor: 'text-accent',
  },
  {
    icon: Workflow,
    name: 'Cherny / Team',
    subtitle: 'Compound Engineering',
    pattern:
      'Structured loops with deliberate context resets, checkpoints, and human review gates after each cycle.',
    pros: [
      'Best quality sustained over time',
      'Predictable and auditable',
      'Supports complex multi-day projects',
    ],
    cons: [
      'More process overhead',
      'Requires engineering discipline',
      'Slower initial setup',
    ],
    bestFor: 'Production-grade, complex Fintech software',
    topBorderColor: 'border-t-[#10B981]',
    accentColor: 'text-[#10B981]',
  },
];

const matrixRows: MatrixRow[] = [
  {
    dimension: 'Context Management',
    ralph: 'None - accumulates until failure',
    gastown: 'Fresh per agent / subtask',
    cherny: 'Deliberate resets at checkpoints',
  },
  {
    dimension: 'Parallelism',
    ralph: 'None (single session)',
    gastown: 'High - agents run concurrently',
    cherny: 'Moderate - structured phases',
  },
  {
    dimension: 'Complexity',
    ralph: 'Very low',
    gastown: 'Medium-high (decomposition)',
    cherny: 'High (process + tooling)',
  },
  {
    dimension: 'Quality Over Time',
    ralph: 'Degrades quickly',
    gastown: 'Consistent per agent scope',
    cherny: 'Improves with each loop cycle',
  },
  {
    dimension: 'Best Use Case',
    ralph: 'Quick 1-shot scripts',
    gastown: 'Modular, parallelizable work',
    cherny: 'Complex, production Fintech builds',
  },
];

export default function CodingLoopsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* ── Hero ── */}
      <PageHero
        eyebrow="Innovation"
        title="Software Coding Loops"
        subtitle="From Copilot to Autopilot - the Agentic Shift 2026 framework for the next era of software engineering."
      />

      {/* ── Section 1: What are Software Coding Loops? ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <SectionHeader
              eyebrow="Foundations"
              title="What are Software Coding Loops?"
              align="left"
            />
          </motion.div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: '01',
                heading: 'The Agentic Shift',
                body: 'AI-assisted coding (Copilot) augments developers with suggestions. AI-autonomous coding (Autopilot) replaces individual keystrokes with full agent-driven cycles that plan, implement, test, and commit code end-to-end.',
              },
              {
                label: '02',
                heading: 'Engineers as Orchestrators',
                body: 'In the agentic era, engineers increasingly act as orchestrators rather than just writers of code. They define goals, review checkpoints, and steer agents - not author every line.',
              },
              {
                label: '03',
                heading: 'The Loop Cycle',
                body: 'A coding loop is a repeating agent cycle: Plan → Code → Test → Commit → Repeat. Each iteration delivers a verifiable increment. The loop pattern chosen determines quality, speed, and resilience at scale.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                className="bg-card border border-border rounded-xl p-6 flex flex-col gap-3"
              >
                <span className="font-mono text-xs text-primary tracking-widest">
                  {item.label}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.heading}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Blueprint loop-cycle diagram */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="mt-10 bg-[#0A1628] border border-border rounded-xl p-6 overflow-x-auto"
          >
            <p className="font-mono text-xs text-muted-foreground mb-3 uppercase tracking-widest">
              Agent Loop Cycle
            </p>
            <p className="font-mono text-sm text-foreground whitespace-nowrap">
              <span className="text-primary">PLAN</span>
              <span className="text-muted-foreground"> ──▶ </span>
              <span className="text-accent">CODE</span>
              <span className="text-muted-foreground"> ──▶ </span>
              <span className="text-[#10B981]">TEST</span>
              <span className="text-muted-foreground"> ──▶ </span>
              <span className="text-[#A78BFA]">COMMIT</span>
              <span className="text-muted-foreground"> ──▶ </span>
              <span className="text-primary">RESET / REVIEW</span>
              <span className="text-muted-foreground"> ──▶ </span>
              <span className="text-muted-foreground">↺ repeat</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Context Rot Callout ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <SectionHeader
              eyebrow="Key Concept"
              title="The Context Rot Problem"
              align="left"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="mt-10 bg-card border-l-4 border-primary rounded-r-xl p-8 md:p-10"
          >
            <div className="flex items-start gap-4 mb-6">
              <span className="font-mono text-primary text-2xl font-bold shrink-0 leading-none">
                !
              </span>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  What is Context Rot?
                </h3>
                <p className="text-muted-foreground text-sm font-mono uppercase tracking-wider">
                  Degradation of LLM output quality over long sessions
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mb-6">
              As AI coding sessions grow longer, the LLM context window degrades in quality.
              Accumulated errors, stale assumptions, contradictory instructions, and compounding
              confusion erode the model&apos;s ability to produce correct code. What starts as a
              productive session gradually produces increasingly unreliable outputs - often without
              obvious warning signs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0A1628] border border-border rounded-lg p-5">
                <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
                  Symptoms
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    'Repeating previously fixed bugs',
                    'Contradicting earlier design decisions',
                    'Forgetting established constraints',
                    'Increasingly verbose, less accurate code',
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="text-primary font-mono shrink-0">▸</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0A1628] border border-border rounded-lg p-5">
                <p className="font-mono text-xs text-[#10B981] uppercase tracking-widest mb-3">
                  Solution
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Structured coding loops that{' '}
                  <span className="text-foreground font-semibold">
                    deliberately reset context
                  </span>{' '}
                  at defined checkpoints. Each loop boundary is a clean handoff - summarize
                  progress, discard noise, and start the next iteration with a precise, minimal
                  context.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: The 3 Loop Patterns ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <SectionHeader
              eyebrow="Framework"
              title="The 3 Loop Patterns"
              subtitle="Three distinct approaches to structuring AI coding agents - each with its own tradeoffs for context, quality, and scale."
            />
          </motion.div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {loopPatterns.map((loop, i) => (
              <motion.div
                key={loop.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                className={cn(
                  'bg-card border border-border rounded-xl overflow-hidden flex flex-col border-t-4',
                  loop.topBorderColor
                )}
              >
                {/* Card header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <loop.icon className={cn('h-8 w-8', loop.accentColor)} strokeWidth={1.5} />
                    <div>
                      <h3 className="text-lg font-bold text-foreground leading-tight">
                        {loop.name}
                      </h3>
                      <span
                        className={cn(
                          'font-mono text-xs uppercase tracking-widest',
                          loop.accentColor
                        )}
                      >
                        {loop.subtitle}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-semibold">Pattern: </span>
                    {loop.pattern}
                  </p>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col gap-5 flex-1">
                  <div>
                    <p className="font-mono text-xs text-[#10B981] uppercase tracking-widest mb-2">
                      Pros
                    </p>
                    <ul className="space-y-1">
                      {loop.pros.map((pro) => (
                        <li
                          key={pro}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-[#10B981] font-mono shrink-0 mt-px">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
                      Cons
                    </p>
                    <ul className="space-y-1">
                      {loop.cons.map((con) => (
                        <li
                          key={con}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary font-mono shrink-0 mt-px">−</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
                      Best For
                    </p>
                    <p className={cn('text-sm font-semibold', loop.accentColor)}>
                      {loop.bestFor}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Comparison Matrix ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <SectionHeader
              eyebrow="Comparison"
              title="Pattern Matrix"
              subtitle="Side-by-side dimensions to help you choose the right loop strategy."
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="mt-10 overflow-x-auto rounded-xl border border-border"
          >
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#0A1628] border-b border-border">
                  <th className="text-left px-5 py-4 font-mono text-xs uppercase tracking-widest text-muted-foreground w-44">
                    Dimension
                  </th>
                  <th className="text-left px-5 py-4 font-semibold text-primary">
                    Ralph Wiggum
                  </th>
                  <th className="text-left px-5 py-4 font-semibold text-accent">
                    Gas Town
                  </th>
                  <th className="text-left px-5 py-4 font-semibold text-[#10B981]">
                    Cherny / Team
                  </th>
                </tr>
              </thead>
              <tbody>
                {matrixRows.map((row, i) => (
                  <tr
                    key={row.dimension}
                    className={cn(
                      'border-b border-border last:border-b-0',
                      i % 2 === 0 ? 'bg-card' : 'bg-[#152237]'
                    )}
                  >
                    <td className="px-5 py-4 font-mono text-xs text-muted-foreground uppercase tracking-wider align-top">
                      {row.dimension}
                    </td>
                    <td className="px-5 py-4 text-foreground align-top">{row.ralph}</td>
                    <td className="px-5 py-4 text-foreground align-top">{row.gastown}</td>
                    <td className="px-5 py-4 text-foreground align-top">{row.cherny}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── Section 5: How Theoremlabs Uses This ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <SectionHeader
                eyebrow="Our Practice"
                title="How Theoremlabs Uses This"
                align="left"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="space-y-5"
            >
              <p className="text-muted-foreground leading-relaxed">
                Theoremlabs implements{' '}
                <span className="text-accent font-semibold">Gas Town</span> and{' '}
                <span className="text-[#10B981] font-semibold">Cherny / Team</span> loop
                patterns in all client engagements for AI-powered Fintech development. These two
                patterns provide the right balance of parallelism, context hygiene, and quality
                assurance that production financial software demands.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For modular components - data ingestion pipelines, API adapters, compliance report
                generators - we use Gas Town: spawn isolated agents, verify outputs, integrate. For
                end-to-end platform builds requiring architectural continuity across weeks of
                development, we apply Cherny loops with structured sprint-level resets, peer review
                gates, and context summarization protocols.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The result is AI-augmented delivery that maintains engineering rigour: auditable
                commit histories, deterministic test suites, and codebases that junior engineers can
                understand and extend - not impenetrable AI artifacts.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <div className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="text-sm text-foreground font-mono">Gas Town loops</span>
                </div>
                <div className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" />
                  <span className="text-sm text-foreground font-mono">Cherny / Team loops</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 6: CTA ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="bg-card border border-border rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            {/* Decorative orange top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-32 bg-primary rounded-full" />

            <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block">
              Get Started
            </span>
            <div className="mb-8">
              <SectionHeader
                title="Implement Agentic Coding Loops in Your Organisation"
                subtitle="Work with Theoremlabs to bring Gas Town and Cherny / Team coding loops to your engineering organisation - structured, production-grade, and built for Fintech."
                align="center"
              />
            </div>
            <CTAButton
              href="/engage/contact"
              variant="primary"
              className="text-base px-8 py-4"
            >
              Work With Us
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
