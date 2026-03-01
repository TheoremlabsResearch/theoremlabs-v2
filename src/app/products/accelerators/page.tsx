import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { CTAButton } from '@/components/shared/CTAButton';
import { SectionHeader } from '@/components/shared/SectionHeader';

export const metadata: Metadata = {
  title: 'Accelerators | Theoremlabs',
  description:
    'Pre-built AI accelerators for Fintech. Ten production-ready tools — each with proven results — that compress months of development into weeks.',
};

interface Stat {
  value: string;
  label: string;
}

interface Accelerator {
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  capabilities: string[];
  results: {
    context: string;
    stats: Stat[];
  };
  idealFor: string;
  image?: string;
}

const accelerators: Accelerator[] = [
  {
    name: 'ReconcileAI',
    subtitle: 'Intelligent Data Reconciliation',
    tagline: 'Automate complex reconciliation processes with AI precision',
    description:
      'Automates the end-to-end reconciliation process across financial, inventory, and compliance data. Using a blend of rules and AI, it matches large datasets, flags discrepancies, and generates audit-ready summaries — accelerating close cycles and reducing manual workloads.',
    capabilities: [
      'Automated matching and exception handling',
      'AI-powered anomaly detection',
      'Multi-source data reconciliation',
      'Audit-ready reporting and compliance',
      'Accelerated close cycles',
    ],
    results: {
      context: 'FinTech / Payments',
      stats: [
        { value: '92%', label: 'Automated Matching' },
        { value: '5d → <24h', label: 'Reconciliation Cycle' },
        { value: '300+', label: 'Hours Saved / Month' },
      ],
    },
    idealFor: 'Banks, fintechs, and enterprise accounting teams',
    image: '/images/product-reconcile-ai.gif',
  },
  {
    name: 'KnowledgePulse',
    subtitle: 'Dynamic Knowledge Management',
    tagline: 'Turn tribal knowledge into intelligent support systems',
    description:
      'Converts static documents and support material into a dynamic, searchable knowledge base. Powered by RAG and NLP, it drives intelligent FAQs, contextual help, and customer support bots. As documentation evolves, the knowledge base updates automatically — ensuring real-time accuracy.',
    capabilities: [
      'Dynamic, searchable knowledge base',
      'AI-powered FAQ generation',
      'Real-time accuracy and updates',
      'RAG architecture with vector search',
      'Integrated chatbot support',
    ],
    results: {
      context: 'SaaS Customer Success',
      stats: [
        { value: '500+', label: 'Auto-Generated Articles' },
        { value: '-40%', label: 'Onboarding Questions' },
        { value: '78%', label: 'Self-Service Rate' },
      ],
    },
    idealFor: 'SaaS, enterprise IT, and service organizations',
    image: '/images/product-knowledge-pulse.gif',
  },
  {
    name: 'InsightBridge',
    subtitle: 'Legacy System Knowledge Extraction',
    tagline: 'Bridge the gap between old infrastructure and modern AI workflows',
    description:
      'Extracts and modernizes knowledge trapped in legacy systems — mainframes, aging databases, and undocumented codebases. InsightBridge creates a structured, queryable knowledge layer on top of your existing estate so teams can move forward without starting from scratch.',
    capabilities: [
      'Legacy system knowledge extraction',
      'Automated documentation generation',
      'Structured knowledge graph output',
      'Integration with modern AI workflows',
      'Reverse engineering of undocumented logic',
    ],
    results: {
      context: 'Enterprise Modernization',
      stats: [
        { value: '80%', label: 'Faster Legacy Discovery' },
        { value: '60%', label: 'Reduction in Manual Documentation' },
        { value: '3x', label: 'Faster Modernization Cycles' },
      ],
    },
    idealFor: 'Enterprises with legacy mainframes, aging core systems, or undocumented codebases',
    image: '/images/product-insight-bridge.gif',
  },
  {
    name: 'SyntheticEdge',
    subtitle: 'Privacy-Safe Data Generation',
    tagline: 'Build AI without the data privacy headache',
    description:
      'Generates realistic, PII-safe synthetic datasets to accelerate AI development in regulated environments. It simulates customer behavior, anomalies, and edge cases while ensuring zero real data exposure. Teams build, test, and iterate AI models without waiting for data approval.',
    capabilities: [
      'PII-safe synthetic data generation',
      'Realistic behavior simulation',
      'Edge case and anomaly modeling',
      'Support for structured and unstructured formats',
      'ML platform integrations',
    ],
    results: {
      context: 'Healthcare AI',
      stats: [
        { value: '✓', label: 'Model Testing w/o PHI' },
        { value: '+3mo', label: 'Faster Time-to-Pilot' },
        { value: '6w → 5d', label: 'Legal Review Cycle' },
      ],
    },
    idealFor: 'Healthcare, banking, and insurance sectors with sensitive data requirements',
    image: '/images/product-synthetic-edge.gif',
  },
  {
    name: 'PromptLine',
    subtitle: 'Conversational AI Phone & Text',
    tagline: 'Intelligent voice and text interfaces for financial services',
    description:
      'AI-powered voice and text interfaces that handle customer queries, route complex cases, and integrate with core banking systems — 24/7, without agent involvement. PromptLine replaces rigid IVR systems with natural, contextually aware conversations that resolve issues and take action in real time.',
    capabilities: [
      'Natural AI voice call handling',
      'SMS and text automation',
      'Intelligent call routing and escalation',
      'Core banking system integration',
      'Compliance audit trails for every conversation',
    ],
    results: {
      context: 'Financial Services',
      stats: [
        { value: '78%', label: 'Containment Rate' },
        { value: '1.8m', label: 'Avg Handle Time' },
        { value: '99.9%', label: 'Uptime' },
      ],
    },
    idealFor: 'Banks, credit unions, and financial services with high inbound call or SMS volume',
    image: '/images/product-prompt-line.gif',
  },
  {
    name: 'Shared Service Marketplace',
    subtitle: 'Centralized Customer Communications',
    tagline: 'Automate 20+ operations-driven communications from one place',
    description:
      'Centralizes customer communication workflows — NSF notices, maturity reminders, tax statements, and more — into a single branded, compliance-ready hub. Triggers messages across email, SMS, and print from one platform, standardizing communications across lines of business and reducing operational risk.',
    capabilities: [
      'Centralized communication management',
      'Multi-channel delivery (email, SMS, print)',
      'Compliance-ready message templates',
      'Standardized branding and messaging',
      'Workflow automation and triggers',
    ],
    results: {
      context: 'Credit Union',
      stats: [
        { value: '22', label: 'Centralized Workflows' },
        { value: '+35%', label: 'Delivery Success Rate' },
        { value: '-70%', label: 'Manual Intervention' },
      ],
    },
    idealFor: 'Banks, credit unions, and insurers looking to modernize customer communications',
  },
  {
    name: 'Digital Twin',
    subtitle: 'Regulatory Compliance',
    tagline: 'Your virtual compliance analyst working 24/7',
    description:
      'An AI-powered digital twin that monitors regulatory changes and automates the impact analysis process. It identifies affected policies, controls, and stakeholders, drafts recommendations, and routes tasks for review — integrating with enterprise collaboration and compliance platforms to orchestrate end-to-end response workflows.',
    capabilities: [
      'Automated regulatory change monitoring',
      'AI-powered impact analysis',
      'Policy and control mapping',
      'Intelligent task routing and collaboration',
      'Comprehensive audit trails',
    ],
    results: {
      context: 'Insurance Compliance',
      stats: [
        { value: '3w → 4d', label: 'Impact Assessment Time' },
        { value: '70%', label: 'Automated Suggestions' },
        { value: '✓', label: 'Improved Audit Tracking' },
      ],
    },
    idealFor: 'Compliance-heavy industries including finance, insurance, and healthcare',
  },
  {
    name: 'Guided Selling App',
    subtitle: 'Simplify Complex Product Configurations',
    tagline: 'Help your customers configure exactly what they need',
    description:
      'Simplifies the customer decision journey for modular or complex product offerings. A natural language interface and visual builder map customer needs to the right configuration, giving sales reps and self-serve users tailored solution paths that shorten time-to-sale and boost conversions.',
    capabilities: [
      'Interactive needs-based Q&A flow',
      'Visual solution building interface',
      'Natural language processing',
      'CRM integration and lead tracking',
      'Self-service and assisted selling modes',
    ],
    results: {
      context: 'Digital Banking Platform',
      stats: [
        { value: '45m → 10m', label: 'Solution Discovery Time' },
        { value: '2.3x', label: 'Lead Conversion Rate' },
        { value: '✓', label: 'No Technical Help Needed' },
      ],
    },
    idealFor: 'Digital banking platforms, SaaS vendors, and modular B2B tech providers',
  },
  {
    name: 'Chat-Web-30',
    subtitle: 'Conversational Web Assistant',
    tagline: 'Your website, now talkable',
    description:
      'A web-embedded AI assistant that brings conversational UX to any website. Handles FAQs, directs users to forms, guides them through processes, and triggers calculators or actions — enhancing self-service experiences and increasing conversion by removing friction from navigation.',
    capabilities: [
      'Conversational website navigation',
      'Intelligent FAQ handling',
      'Form guidance and completion support',
      'Process walkthrough assistance',
      'Calculator and action triggers',
    ],
    results: {
      context: 'Higher Education',
      stats: [
        { value: '-60%', label: 'Support Queries to Agents' },
        { value: '+22%', label: 'Form Completion Rate' },
        { value: '78 → 91%', label: 'Customer Satisfaction' },
      ],
    },
    idealFor: 'Education, financial services, government, and ecommerce sectors',
  },
  {
    name: 'Workflow Assist',
    subtitle: 'Secure Document Upload',
    tagline: 'Secure file intake with workflow intelligence',
    description:
      'A secure, user-friendly portal for document collection linked to internal workflows. Whether for KYC, onboarding, or audits, users upload files with real-time validation while backend systems receive structured, tagged data. Improves intake speed, reduces manual errors, and strengthens compliance.',
    capabilities: [
      'Secure document collection portal',
      'Real-time validation and tagging',
      'Workflow integration and routing',
      'Status notifications and tracking',
      'Enhanced compliance tracking',
    ],
    results: {
      context: 'Lending & Credit',
      stats: [
        { value: '58 → 94%', label: '3-Day Collection Rate' },
        { value: '✓', label: 'Compliance Pass Rate' },
        { value: '-65%', label: 'Manual Intake Work' },
      ],
    },
    idealFor: 'Lending, insurance, education, and HR departments',
  },
];

const arrowSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const checkSvg = (
  <svg className="h-3 w-3 text-[#F97316]" fill="currentColor" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M10.28 2.28a.75.75 0 00-1.06 0L4.5 7l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l5.25-5.25a.75.75 0 000-1.06z" />
  </svg>
);

export default function AcceleratorsPage() {
  return (
    <main className="bg-[#0F1B2D] min-h-screen">
      <PageHero
        eyebrow="Products"
        title="AI Accelerators"
        subtitle="Ten production-ready AI tools — each with proven results — that compress months of development into weeks. Built specifically for Fintech."
      />

      {/* Intro */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
          <p className="text-[#94A3B8] text-lg leading-relaxed md:w-1/2">
            Theoremlabs accelerators are purpose-built AI modules designed to eliminate the
            repetitive groundwork that slows Fintech teams down. Rather than starting from scratch,
            you get a battle-tested foundation that integrates with your existing stack and adapts
            to your domain — with every accelerator backed by real deployment results.
          </p>
          <div className="grid grid-cols-3 gap-px bg-[#1E3A5F] rounded-xl overflow-hidden md:w-1/2">
            {[
              { value: '10', label: 'Accelerators' },
              { value: 'Weeks', label: 'Not months' },
              { value: '100%', label: 'Fintech-built' },
            ].map((s) => (
              <div key={s.label} className="bg-[#1A2B45] px-4 py-6 text-center">
                <p className="text-2xl font-bold text-[#F97316]">{s.value}</p>
                <p className="text-xs text-[#94A3B8] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accelerator cards */}
      <section className="px-4 md:px-8 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <SectionHeader
            eyebrow="All Accelerators"
            title="Find the right fit for your problem"
            align="left"
          />

          {accelerators.map((acc) => (
            <article
              key={acc.name}
              className="rounded-2xl border border-[#1E3A5F] bg-[#1A2B45] overflow-hidden transition-colors duration-200 hover:border-[#F97316]/40"
            >
              <div className="flex flex-col gap-0 lg:flex-row">
                {/* Left: Identity + description + capabilities */}
                <div className="flex flex-col gap-6 p-7 lg:w-1/2 lg:border-r lg:border-[#1E3A5F]">
                  {/* Header */}
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                      {acc.subtitle}
                    </span>
                    <h2 className="text-2xl font-bold text-[#F8FAFC] tracking-tight">{acc.name}</h2>
                    <p className="text-sm italic text-[#94A3B8] mt-0.5">&ldquo;{acc.tagline}&rdquo;</p>
                  </div>

                  {/* GIF if available */}
                  {acc.image && (
                    <div className="self-start rounded-xl bg-[#0F1B2D] border border-[#1E3A5F] p-3">
                      <Image
                        src={acc.image}
                        alt={`${acc.name} preview`}
                        width={64}
                        height={64}
                        className="object-contain"
                        unoptimized
                        sizes="64px"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{acc.description}</p>

                  {/* Capabilities */}
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#F8FAFC]">Key Capabilities</p>
                    <ul className="flex flex-col gap-2">
                      {acc.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#F97316]/15">
                            {checkSvg}
                          </span>
                          <span className="text-sm text-[#F8FAFC]">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Proven results + ideal for + CTA */}
                <div className="flex flex-col gap-6 p-7 lg:w-1/2">
                  {/* Results */}
                  <div className="flex flex-col gap-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#F8FAFC]">
                      Proven Results
                      <span className="ml-2 text-[#94A3B8] normal-case tracking-normal font-normal">
                        — {acc.results.context}
                      </span>
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {acc.results.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="flex flex-col items-center gap-1 rounded-xl bg-[#0F1B2D] border border-[#1E3A5F] px-3 py-4 text-center"
                        >
                          <span className="text-xl font-bold text-[#F97316] leading-tight">{stat.value}</span>
                          <span className="text-xs text-[#94A3B8] leading-tight">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#F8FAFC]">Ideal For</p>
                    <p className="text-sm text-[#94A3B8]">{acc.idealFor}</p>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-4 border-t border-[#1E3A5F]">
                    <Link
                      href="/engage/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#F97316] transition-colors duration-200 hover:text-[#ea6a0a]"
                    >
                      Discuss This Accelerator
                      {arrowSvg}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA banner */}
      <section className="px-4 pb-20 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-xl bg-[#1A2B45] p-8 text-center border border-[#1E3A5F]">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-[#F8FAFC] md:text-4xl">
              Ready to accelerate?
            </h2>
            <p className="mb-8 text-base leading-relaxed text-[#94A3B8] max-w-xl mx-auto">
              Let&apos;s identify which accelerators fit your roadmap and get you moving faster.
            </p>
            <CTAButton href="/engage/contact" variant="primary">
              Get in Touch
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
