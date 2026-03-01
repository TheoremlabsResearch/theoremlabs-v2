import type { Metadata } from 'next';
import { Database, Search, BarChart2, Share2, Zap, ShieldCheck } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTAButton } from '@/components/shared/CTAButton';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'DataGaze.ai | Theoremlabs',
  description:
    'DataGaze.ai transforms business teams into self-service analysts. Query any database in plain English — no SQL, no BI bottlenecks, no dependency on technical teams.',
};

interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Feature {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
}

const features: Feature[] = [
  {
    eyebrow: 'Natural Language Queries',
    title: 'Ask your data anything — in plain English',
    description:
      'DataGaze.ai translates natural language questions into optimized SQL in real time. Sales reps, marketers, and ops managers get instant answers to their questions without writing a single line of code or waiting days for a BI ticket to be resolved.',
    bullets: [
      'Query any database using conversational language',
      'Smart query optimization — not just translation',
      'Handles ambiguous questions with clarifying follow-ups',
      'Works across structured data sources: Postgres, Snowflake, BigQuery, Redshift, and more',
    ],
  },
  {
    eyebrow: 'Multi-Source Data Integration',
    title: 'One interface across all your data sources',
    description:
      'Stop context-switching between dashboards. DataGaze.ai connects to your full data estate and lets your teams query across all of it from a single interface — with joins, aggregations, and filters handled automatically.',
    bullets: [
      'Native connectors for major databases and data warehouses',
      'Cross-source queries without manual joins',
      'Live schema discovery — no manual mapping required',
      'Secure, read-only connections with role-based access controls',
    ],
  },
  {
    eyebrow: 'Visualization & Smart Reporting',
    title: 'From answer to insight to shareable report',
    description:
      'Every query result is automatically rendered as the most appropriate visualization — bar chart, table, trend line, or KPI card. Reports are assembled in seconds and shared with a link, so decision-making happens in hours instead of days.',
    bullets: [
      'Automatic chart type selection based on query shape',
      'One-click dashboards from any set of queries',
      'Scheduled reports delivered to email or Slack',
      'Exportable to CSV, Excel, and PDF with full data lineage',
    ],
  },
];

const capabilities: Capability[] = [
  {
    icon: <Search className="h-6 w-6" aria-hidden="true" />,
    title: 'Natural Language to SQL',
    description: 'Converts plain English questions into accurate SQL — and explains the query so users build data literacy over time.',
  },
  {
    icon: <Database className="h-6 w-6" aria-hidden="true" />,
    title: 'Multi-Source Data Integration',
    description: 'Connect to any database or warehouse. Query across all sources simultaneously without ETL or manual joins.',
  },
  {
    icon: <BarChart2 className="h-6 w-6" aria-hidden="true" />,
    title: 'Real-Time Visualizations',
    description: 'Automatically render results as the most useful chart type. Drill down, filter, and explore without coding.',
  },
  {
    icon: <Share2 className="h-6 w-6" aria-hidden="true" />,
    title: 'Smart Reporting & Dashboards',
    description: 'Assemble dashboards from any combination of queries and share them with a link. Scheduled delivery keeps stakeholders current.',
  },
  {
    icon: <Zap className="h-6 w-6" aria-hidden="true" />,
    title: 'Self-Service Analytics',
    description: 'Eliminate BI bottlenecks. Any team member gets accurate answers in seconds — no SQL knowledge, no technical dependency.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" aria-hidden="true" />,
    title: 'Governed Data Access',
    description: 'Role-based permissions ensure every user sees only the data they are authorized to access — with full audit logging.',
  },
];

const stats: { value: string; label: string }[] = [
  { value: '15+', label: 'Self-service marketers enabled' },
  { value: '3d → 10m', label: 'Report generation time' },
  { value: '+30%', label: 'BI team capacity freed' },
  { value: '0', label: 'SQL skills required' },
];

export default function DataGazeAIPage() {
  return (
    <main className="bg-[#0F1B2D] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Products"
        title="DataGaze.ai"
        subtitle="Natural Language to SQL. Democratize data access for non-technical teams — query any database in plain English and get instant, accurate answers."
      />

      {/* Early Access Banner */}
      <section className="px-4 md:px-8 lg:px-16 pt-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start gap-3 rounded-xl border border-[#F97316]/30 bg-[#F97316]/5 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#F97316] animate-pulse" />
              <p className="text-sm font-medium text-[#F8FAFC]">
                DataGaze.ai is currently in early access.{' '}
                <span className="text-[#94A3B8] font-normal">
                  Full self-serve onboarding coming soon.
                </span>
              </p>
            </div>
            <CTAButton href="/engage/contact" variant="secondary" className="flex-shrink-0 text-xs px-4 py-2">
              Request Early Access
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#94A3B8] text-lg leading-relaxed max-w-3xl">
            DataGaze.ai transforms business teams into self-service analysts. It allows users to
            query databases using plain English, eliminating the bottlenecks and dependencies on
            technical teams that slow decisions down. With multi-source support, real-time
            visualization tools, and smart reporting, DataGaze.ai enables faster decision-making
            across sales, marketing, and operations — without writing a single line of SQL.
          </p>
        </div>
      </section>

      {/* Stats Row */}
      <section className="px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-px bg-[#1E3A5F] rounded-xl overflow-hidden md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 bg-[#1A2B45] px-6 py-8 text-center"
              >
                <span className="text-3xl font-bold text-[#F97316] md:text-4xl">{stat.value}</span>
                <span className="text-xs text-[#94A3B8] leading-relaxed">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Sections — alternating layout */}
      <section className="px-4 md:px-8 lg:px-16 pb-8">
        <div className="max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={feature.title}>
                <div
                  className={cn(
                    'flex flex-col gap-10 py-16 md:flex-row md:items-start md:gap-16',
                    !isEven && 'md:flex-row-reverse'
                  )}
                >
                  {/* Visual panel */}
                  <div className="flex-shrink-0 md:w-5/12">
                    <div className="rounded-xl bg-[#1A2B45] border border-[#1E3A5F] p-8 h-full flex flex-col justify-center min-h-[260px]">
                      {index === 0 && (
                        <div className="flex flex-col gap-4">
                          <div className="rounded-lg bg-[#0F1B2D] border border-[#1E3A5F] px-4 py-3 text-sm text-[#94A3B8]">
                            &ldquo;Show me revenue by region for Q1 vs Q4 last year&rdquo;
                          </div>
                          <div className="rounded-lg bg-[#F97316]/10 border border-[#F97316]/20 px-4 py-2.5">
                            <p className="text-xs text-[#94A3B8] font-mono mb-1">Generated SQL</p>
                            <p className="text-xs font-mono text-[#F8FAFC] leading-relaxed">
                              SELECT region, SUM(revenue)<br />
                              FROM orders<br />
                              WHERE quarter IN (&apos;Q1&apos;,&apos;Q4&apos;)<br />
                              GROUP BY region, quarter
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-green-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                            Result ready in 0.4s — 4 rows returned
                          </div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="flex flex-col gap-3">
                          {['Snowflake', 'Postgres', 'BigQuery', 'Redshift'].map((src, i) => (
                            <div key={src} className="flex items-center gap-3">
                              <span className="w-20 flex-shrink-0 text-right text-xs text-[#94A3B8] font-mono">{src}</span>
                              <div className="flex-1 rounded-full bg-[#0F1B2D] h-2 overflow-hidden">
                                <div className="h-2 rounded-full bg-[#F97316]" style={{ width: `${[92, 88, 95, 84][i]}%` }} />
                              </div>
                              <span className="text-xs text-green-400 font-mono">Live</span>
                            </div>
                          ))}
                          <div className="mt-2 pt-3 border-t border-[#1E3A5F] flex items-center justify-between">
                            <span className="text-xs text-[#94A3B8]">Sources connected</span>
                            <span className="text-sm font-semibold text-[#F97316]">4 / 4</span>
                          </div>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="flex flex-col gap-4">
                          <div className="flex items-end justify-around gap-1 h-20" aria-hidden="true">
                            {[40, 65, 55, 80, 70, 90, 75].map((h, i) => (
                              <div
                                key={i}
                                className="w-8 rounded-t-sm bg-[#F97316]/60"
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                          <div className="flex items-center justify-between pt-2 border-t border-[#1E3A5F]">
                            <span className="text-xs text-[#94A3B8]">Revenue by Month</span>
                            <span className="text-xs font-semibold text-[#F97316]">Auto-chart</span>
                          </div>
                          <div className="flex gap-2 flex-wrap">
                            {['Share link', 'Export CSV', 'Schedule'].map((action) => (
                              <span key={action} className="rounded-full bg-[#0F1B2D] border border-[#1E3A5F] px-3 py-1 text-xs text-[#94A3B8]">
                                {action}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-4 md:w-7/12">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                      {feature.eyebrow}
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-[#F8FAFC] md:text-4xl">
                      {feature.title}
                    </h2>
                    <p className="text-base leading-relaxed text-[#94A3B8]">
                      {feature.description}
                    </p>
                    <ul className="mt-2 flex flex-col gap-3">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-0.5 flex-shrink-0 text-[#F97316]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-sm leading-relaxed text-[#94A3B8]">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < features.length - 1 && (
                  <div className="border-b border-[#1E3A5F]" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-t border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <SectionHeader
            eyebrow="Platform Capabilities"
            title="Everything your team needs to go self-serve"
            subtitle="DataGaze.ai ships with a complete set of capabilities so your non-technical teams never have to wait on a BI queue again."
            align="center"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl bg-[#1A2B45] border border-[#1E3A5F] p-6 flex flex-col gap-4 transition-colors duration-200 hover:border-[#F97316]/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F97316]/10 text-[#F97316]">
                  {cap.icon}
                </div>
                <h3 className="text-base font-semibold text-[#F8FAFC]">{cap.title}</h3>
                <p className="text-sm leading-relaxed text-[#94A3B8]">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-t border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <SectionHeader
            eyebrow="How It Works"
            title="From question to answer in seconds"
            subtitle="No training required. Most teams are generating their first reports within minutes of connecting."
            align="center"
          />

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="absolute top-8 left-0 right-0 hidden h-px bg-[#1E3A5F] md:block" aria-hidden="true" />

            {[
              { step: '01', title: 'Connect', description: 'Point DataGaze.ai at your databases using secure, read-only native connectors. No ETL, no schema mapping.' },
              { step: '02', title: 'Ask', description: 'Type your question in plain English. DataGaze.ai interprets intent and generates the right SQL automatically.' },
              { step: '03', title: 'Visualize', description: 'Results render instantly as the most useful chart type. Drill down, filter, and explore without coding.' },
              { step: '04', title: 'Share', description: 'Share results with a link, schedule recurring reports, or export to your preferred format in one click.' },
            ].map((item) => (
              <div
                key={item.step}
                className="relative flex flex-col gap-4 rounded-xl bg-[#1A2B45] border border-[#1E3A5F] p-6"
              >
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#F97316] text-sm font-bold text-white z-10">
                  {item.step}
                </div>
                <h3 className="text-base font-semibold text-[#F8FAFC]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#94A3B8]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <SectionHeader
            eyebrow="Use Cases"
            title="Who DataGaze.ai unlocks"
            subtitle="Ideal for organizations with distributed or non-technical teams who need real-time data insights without the BI bottleneck."
            align="center"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { label: 'Sales Teams', text: 'Query pipeline data, deal velocity, and quota attainment without waiting for a weekly BI report. Act on the numbers in real time.' },
              { label: 'Marketing', text: 'Pull campaign performance, attribution, and funnel data instantly. Answer executive questions in the meeting, not after it.' },
              { label: 'Operations', text: 'Monitor fulfillment rates, process efficiency, and operational KPIs without building dashboards from scratch every quarter.' },
              { label: 'Finance & Treasury', text: 'Self-serve P&L queries, budget variance analysis, and cost-center reporting — without submitting tickets to engineering.' },
            ].map((uc) => (
              <div
                key={uc.label}
                className="flex gap-4 rounded-xl bg-[#1A2B45] border border-[#1E3A5F] p-6 hover:border-[#F97316]/40 transition-colors duration-200"
              >
                <span className="mt-0.5 flex-shrink-0 text-[#F97316]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-semibold text-[#F8FAFC]">{uc.label}</h3>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">{uc.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Ideal For tag */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1E3A5F] bg-[#1A2B45] px-5 py-2.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">Ideal For</span>
              <span className="text-sm text-[#94A3B8]">Organizations with distributed or non-technical teams needing real-time data insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 pb-20 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-xl bg-[#1A2B45] border border-[#1E3A5F] p-8 md:p-12 flex flex-col items-center text-center gap-6">
            <div className="flex flex-col gap-3 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                Get Started
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#F8FAFC] md:text-4xl">
                Let your team ask the data themselves
              </h2>
              <p className="text-base leading-relaxed text-[#94A3B8]">
                Book a demo and we&apos;ll show you DataGaze.ai on your own data environment.
                Watch your team go from zero to self-serve in under 30 minutes.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/engage/contact" variant="primary">
                Book a Demo
              </CTAButton>
              <CTAButton href="/engage/contact" variant="secondary">
                Request Early Access
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
