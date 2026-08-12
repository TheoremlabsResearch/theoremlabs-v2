'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Pause, Play, Scale, BookOpen, Database, Sparkles, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Slide transition ─────────────────────────────────────────────────────────

const slideVariants = {
  enter: { opacity: 0, scale: 1.04 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// ─── Shared primitives ────────────────────────────────────────────────────────

function Orbs() {
  return (
    <>
      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-accent/6 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/6 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
    </>
  );
}

function LogoWatermark() {
  return (
    <div className="absolute top-6 left-8 z-20 opacity-60">
      <Image src="/images/logo-white.png" alt="Theoremlabs" width={130} height={34} className="object-contain" />
    </div>
  );
}

type BadgeColor = 'orange' | 'blue' | 'green' | 'purple';

function Badge({ children, color = 'orange' }: { children: React.ReactNode; color?: BadgeColor }) {
  const colorMap: Record<BadgeColor, string> = {
    orange: 'bg-primary/15 border-primary/30 text-primary',
    blue: 'bg-accent/15 border-accent/30 text-accent',
    green: 'bg-[#10B981]/15 border-[#10B981]/30 text-[#10B981]',
    purple: 'bg-[#8B5CF6]/15 border-[#8B5CF6]/30 text-[#8B5CF6]',
  };
  return (
    <motion.span
      className={cn('inline-block px-4 py-1.5 rounded-full border text-sm font-medium', colorMap[color])}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' as const }}
    >
      {children}
    </motion.span>
  );
}

function Heading({ children, delay = 0.1 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.h2
      className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay, ease: 'easeOut' as const }}
    >
      {children}
    </motion.h2>
  );
}

function Sub({ children, delay = 0.22 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.p
      className="text-slate-400 text-lg md:text-xl leading-relaxed"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' as const }}
    >
      {children}
    </motion.p>
  );
}

// ─── Slide 1: Cover ───────────────────────────────────────────────────────────

function CoverSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image src="/images/hero-bg.jpg" alt="" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-br from-background/93 via-background/78 to-background/55" />
      <Orbs />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-10">
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' as const }}
          className="mb-10"
        >
          <Image
            src="/images/logo-white.png"
            alt="Theoremlabs Partners LLC"
            width={340}
            height={92}
            className="object-contain mx-auto"
            priority
          />
        </motion.div>
        <motion.h1
          className="text-7xl md:text-8xl lg:text-[7rem] font-black text-white tracking-tighter leading-[1.03] mb-7"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: 'easeOut' as const }}
        >
          The New<br />
          <span className="text-primary">Software Era</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed mb-11"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.38, ease: 'easeOut' as const }}
        >
          Hybrid management consulting and AI build &amp; experimentation labs<br className="hidden md:block" />
          for Fintech products powered by AI, Data, Cloud &amp; Web3
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 text-slate-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.58, ease: 'easeOut' as const }}
        >
          {['Charlotte, NC', 'theoremlabs.io', 'Est. 2025'].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// ─── Slide 2: Mission ─────────────────────────────────────────────────────────

function MissionSlide() {
  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex items-center justify-center px-10 md:px-20">
      <Orbs />
      <LogoWatermark />
      <div className="relative z-10 text-center max-w-5xl">
        <div className="mb-5"><Badge>Who We Are</Badge></div>
        <Heading delay={0.1}>
          Bridging Vision<br />
          <span className="text-accent">&amp; Execution</span>
        </Heading>
        <div className="mt-6 mb-10">
          <Sub delay={0.25}>
            Theoremlabs blends management consulting with build &amp; experimentation labs,
            offering tailored solutions for Fintech products. We leverage AI, Data, Cloud,
            and Web3 technologies to deliver innovative, scalable, and future-ready
            financial solutions, bridging the gap between vision and execution.
          </Sub>
        </div>
        <motion.div
          className="grid grid-cols-3 gap-5"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.42, ease: 'easeOut' as const }}
        >
          {[
            { value: '3', label: 'Core Service Areas' },
            { value: '5+', label: 'AI Accelerators' },
            { value: '2', label: 'Flagship Products' },
          ].map((stat) => (
            <div key={stat.label} className="bg-card rounded-2xl p-6 border border-border">
              <div className="text-5xl font-black text-primary mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// ─── Slide 3: Three Pillars ───────────────────────────────────────────────────

function ThreePillarsSlide() {
  const pillars = [
    {
      image: '/images/Advisory and Consulting.png',
      title: 'Advisory & Consulting',
      desc: 'Strategic management consulting for Fintech enterprises navigating the AI transformation landscape.',
      color: '#3B82F6',
    },
    {
      image: '/images/Art of Possible Labs.png',
      title: 'Art of Possible Labs',
      desc: 'A rapid experimentation and prototyping lab where ideas become production-ready AI solutions.',
      color: '#F97316',
    },
    {
      image: '/images/Accelerators.png',
      title: 'Accelerators',
      desc: 'Purpose-built AI accelerators that compress months of development into weeks for Fintech use cases.',
      color: '#10B981',
    },
  ];

  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex flex-col items-center justify-center px-10 md:px-16">
      <Orbs />
      <LogoWatermark />
      <div className="relative z-10 w-full max-w-6xl">
        <div className="text-center mb-10">
          <div className="mb-4"><Badge>Our Services</Badge></div>
          <Heading delay={0.1}>Three Pillars of Excellence</Heading>
          <div className="mt-4 max-w-2xl mx-auto">
            <Sub delay={0.22}>A unified approach to AI transformation - strategy, experimentation, and acceleration</Sub>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 + i * 0.15, ease: 'easeOut' as const }}
            >
              <div className="w-20 h-20 rounded-2xl mb-6 overflow-hidden bg-background flex items-center justify-center p-2">
                <Image src={p.image} alt={p.title} width={72} height={72} className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{p.desc}</p>
              <div className="w-12 h-1 rounded-full" style={{ backgroundColor: p.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Slide 4: Why Choose Us ───────────────────────────────────────────────────

function WhyUsSlide() {
  const items = [
    { img: '/images/icon-battle-hardened.png', title: 'Battle-Hardened Experts', desc: 'Seasoned practitioners who have shipped production AI systems in regulated Fintech environments.' },
    { img: '/images/icon-walk-talk.png', title: 'Walk the Talk', desc: 'We build the same solutions we recommend - no theoretical advice, only proven approaches.' },
    { img: '/images/icon-lean-agile.png', title: 'Lean & Agile Teams', desc: 'Small, expert-dense squads that move fast without sacrificing quality or compliance.' },
    { img: '/images/icon-risk-literate.png', title: 'Risk-Literate AI', desc: 'Deep understanding of financial risk, compliance, and regulatory requirements in AI deployment.' },
    { img: '/images/icon-prime-location.png', title: 'Prime Location', desc: 'Headquartered in Charlotte, NC - the second-largest financial hub in the United States.' },
  ];

  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex flex-col items-center justify-center px-8 md:px-14">
      <Orbs />
      <LogoWatermark />
      <div className="relative z-10 w-full max-w-7xl">
        <div className="text-center mb-10">
          <div className="mb-4"><Badge>Why Theoremlabs</Badge></div>
          <Heading delay={0.1}>What Sets Us Apart</Heading>
          <div className="mt-4 max-w-2xl mx-auto">
            <Sub delay={0.22}>Five competitive advantages that make Theoremlabs the right partner</Sub>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-card rounded-2xl p-5 border border-border flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 + i * 0.1, ease: 'easeOut' as const }}
            >
              <div className="w-14 h-14 rounded-xl mb-4 overflow-hidden bg-background flex items-center justify-center p-1">
                <Image src={item.img} alt={item.title} width={52} height={52} className="object-contain" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2 leading-snug">{item.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Slide 5: Kirdar.ai ───────────────────────────────────────────────────────

function KirdarSlide() {
  const features = [
    'AI-powered role-play scenarios for realistic, immersive training',
    'Identifies individual skill gaps with precision analytics',
    'Accelerates onboarding - new employees ramp faster',
    'Personalised adaptive learning paths driven by AI',
    'Scales across global teams without additional headcount',
  ];

  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex items-center justify-center px-10 md:px-16">
      <Orbs />
      <LogoWatermark />
      <div className="relative z-10 w-full max-w-6xl flex items-center gap-16">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' as const }}
        >
          <div className="mb-5"><Badge>Flagship Product</Badge></div>
          <h2 className="text-6xl md:text-7xl font-black text-white mb-5 tracking-tight">
            Kirdar<span className="text-primary">.ai</span>
          </h2>
          <p className="text-slate-300 text-xl mb-8 leading-relaxed">
            The next-generation employee training simulator that transforms how organisations
            develop talent through AI-powered experiential learning.
          </p>
          <ul className="space-y-3">
            {features.map((f, i) => (
              <motion.li
                key={f}
                className="flex items-start gap-3 text-slate-300 text-sm"
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.45 + i * 0.1, ease: 'easeOut' as const }}
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                </span>
                {f}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="flex-shrink-0 w-72"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: 'easeOut' as const }}
        >
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-10 border border-primary/25 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-5">
              <span className="text-5xl font-black text-primary">K</span>
            </div>
            <div className="text-2xl font-bold text-primary mb-1">Kirdar.ai</div>
            <div className="text-slate-400 text-sm mb-7">Employee Training Simulator</div>
            <div className="space-y-2.5">
              {['Role Play Training', 'Onboarding Flows', 'Skill Gap Analysis', 'AI Assessment'].map((tag) => (
                <div key={tag} className="px-4 py-2.5 bg-background/60 rounded-xl text-slate-300 text-sm border border-border">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Slide 6: DataGaze.ai ─────────────────────────────────────────────────────

function DataGazeSlide() {
  const caps = [
    { title: 'Real-Time Monitoring', desc: 'Live dashboards that surface critical signals instantly' },
    { title: 'Predictive Analytics', desc: 'AI-driven forecasting for Fintech decision-making' },
    { title: 'Data Lineage', desc: 'Full transparency into data provenance and flows' },
    { title: 'Compliance Reporting', desc: 'Automated regulatory reports and audit trails' },
  ];

  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex items-center justify-center px-10 md:px-16">
      <Orbs />
      <LogoWatermark />
      <div className="relative z-10 w-full max-w-6xl flex items-center gap-16">
        <motion.div
          className="flex-shrink-0 w-72"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' as const }}
        >
          <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl p-10 border border-accent/25 text-center">
            <div className="w-20 h-20 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mx-auto mb-5">
              <span className="text-5xl font-black text-accent">D</span>
            </div>
            <div className="text-2xl font-bold text-accent mb-1">DataGaze.ai</div>
            <div className="text-slate-400 text-sm mb-7">Data Intelligence Platform</div>
            <div className="grid grid-cols-2 gap-2.5">
              {['AI', 'Data', 'Cloud', 'Fintech'].map((tag) => (
                <div key={tag} className="px-3 py-2.5 bg-background/60 rounded-xl text-slate-300 text-sm text-center border border-border">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: 'easeOut' as const }}
        >
          <div className="mb-5"><Badge color="blue">Flagship Product</Badge></div>
          <h2 className="text-6xl md:text-7xl font-black text-white mb-5 tracking-tight">
            DataGaze<span className="text-accent">.ai</span>
          </h2>
          <p className="text-slate-300 text-xl mb-8 leading-relaxed">
            An intelligent data observability and analytics platform built for the
            complexity and compliance demands of modern Fintech organisations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {caps.map((cap, i) => (
              <motion.div
                key={cap.title}
                className="bg-card rounded-xl p-4 border border-border"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.5 + i * 0.1, ease: 'easeOut' as const }}
              >
                <div className="text-accent font-semibold text-sm mb-1.5">{cap.title}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{cap.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Slide: UBPR Intelligence (Vantage Bank × Theoremlabs) ──────────────────

function UBPRIntelligenceSlide() {
  const capabilities = [
    {
      title: 'AI Peer Benchmark Engine',
      desc: 'Automated peer group selection + real-time ratio comparison across 60+ UBPR metrics. Board-ready in one click.',
      tag: 'Core',
    },
    {
      title: 'Regulatory Trend Alerting',
      desc: 'Monitors ratio drift, flags exam-sensitive thresholds, and surfaces emerging risk signals before regulators arrive.',
      tag: 'Core',
    },
    {
      title: 'Strategic Performance Narrative',
      desc: "LLM-generated plain-English summaries: what your UBPR says, what it means, and what to do about it.",
      tag: 'AI',
    },
    {
      title: 'Exam Preparation Module',
      desc: 'Auto-generates response narratives for capital adequacy, asset quality, earnings, and liquidity - keyed to your ratios.',
      tag: 'AI',
    },
  ];

  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex items-center justify-center px-10 md:px-14">
      <Orbs />
      <LogoWatermark />
      <div className="relative z-10 w-full max-w-7xl flex items-start gap-12">
        {/* Left */}
        <motion.div
          className="flex-shrink-0 w-80 flex flex-col gap-5"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' as const }}
        >
          <div><Badge color="blue">Partnership Product</Badge></div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Vantage Bank × Theoremlabs</div>
            <h2 className="text-5xl font-black text-white tracking-tight leading-tight">
              UBPR<br /><span className="text-accent">Intelligence</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2">AI-Powered · Production-Ready · v1.0 · 2026</p>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            An AI-native application that transforms a community bank&apos;s raw UBPR data into
            exam-ready insights, real-time peer benchmarks, and strategic performance signals -
            deployed in weeks, not months.
          </p>
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: 'easeOut' as const }}
          >
            {[
              { value: '2–4', label: 'Weeks to Deploy' },
              { value: '60+', label: 'UBPR Metrics' },
            ].map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-3 border border-border text-center">
                <div className="text-xl font-black text-accent">{s.value}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
          <div className="bg-card rounded-xl p-4 border border-border">
            <div className="text-xs font-bold uppercase tracking-widest text-white mb-2">Ideal For</div>
            <p className="text-slate-400 text-xs leading-relaxed">
              $500M–$5B community and regional banks. Texas-first, expanding nationally.
              Innovation-led, compliance-forward culture.
            </p>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: 'easeOut' as const }}
        >
          <div className="text-xs font-bold uppercase tracking-widest text-white mb-4">Core Capabilities</div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                className="bg-card rounded-xl p-4 border border-border"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.38 + i * 0.08, ease: 'easeOut' as const }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-0.5 rounded-full bg-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent">{cap.tag}</span>
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{cap.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="bg-card rounded-xl p-4 border border-border"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.72, ease: 'easeOut' as const }}
          >
            <div className="text-xs font-bold uppercase tracking-widest text-white mb-3">Powered By</div>
            <div className="flex flex-wrap gap-2">
              {['FFIEC / FDIC UBPR API', 'Vantage Cloud-Native Infra', 'LLM Intelligence Layer', 'FS Compliance Rail'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-background border border-border text-slate-400 text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="mt-4 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' as const }}
          >
            <div className="flex-1 h-px bg-border" />
            <span className="text-slate-500 text-xs">Vantage Collabs Software Developer Program · FINZPIRE 2026 · Charlotte, NC</span>
            <div className="flex-1 h-px bg-border" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Slide 7: PromptLine (product) ───────────────────────────────────────────

function PromptLineSlide() {
  const useCases = [
    { title: 'Account Inquiries', desc: 'Balance checks and transaction history resolved instantly - 24/7, without agent involvement.' },
    { title: 'Loan & Credit Queries', desc: 'Answer eligibility questions and guide customers through next steps with zero wait time.' },
    { title: 'Collections & Reminders', desc: 'Proactive outreach that negotiates payment arrangements and logs outcomes automatically.' },
    { title: 'KYC & Identity Verification', desc: 'Guide customers through identity workflows conversationally, reducing abandonment.' },
    { title: 'Appointment Scheduling', desc: 'Book branch visits and advisor calls through voice or text - integrated with your calendar.' },
    { title: 'Fraud Alerts & Confirmations', desc: 'Reach customers instantly on suspicious activity. Confirm or dispute in one secure conversation.' },
  ];

  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex items-center justify-center px-10 md:px-14">
      <Orbs />
      <LogoWatermark />
      <div className="relative z-10 w-full max-w-7xl flex items-start gap-12">
        {/* Left */}
        <motion.div
          className="flex-shrink-0 w-80 flex flex-col gap-5"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' as const }}
        >
          <div><Badge>Product</Badge></div>
          <div>
            <h2 className="text-6xl font-black text-white tracking-tight leading-tight">
              Prompt<span className="text-primary">Line</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2">Conversational AI Phone &amp; Text</p>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            AI-powered voice and text interfaces that handle customer queries, route complex cases,
            and integrate with core banking systems - 24/7, without agent involvement.
          </p>
          <ul className="space-y-3">
            {[
              'Resolve 70%+ of inquiries without agent involvement',
              'Go live on voice & SMS in days - not months',
              'Full compliance audit trail for every conversation',
            ].map((pt, i) => (
              <motion.li
                key={pt}
                className="flex items-start gap-2.5 text-slate-300 text-xs"
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.45 + i * 0.1, ease: 'easeOut' as const }}
              >
                <span className="mt-0.5 w-4 h-4 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                </span>
                {pt}
              </motion.li>
            ))}
          </ul>
          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-2 pt-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: 'easeOut' as const }}
          >
            {[
              { value: '78%', label: 'Containment' },
              { value: '1.8m', label: 'Avg Handle' },
              { value: '99.9%', label: 'Uptime' },
            ].map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-3 border border-border text-center">
                <div className="text-lg font-black text-primary">{s.value}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: use cases 2×3 grid */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: 'easeOut' as const }}
        >
          <div className="text-xs font-bold uppercase tracking-widest text-white mb-4">Where PromptLine Goes to Work</div>
          <div className="grid grid-cols-2 gap-3">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                className="bg-card rounded-xl p-4 border border-border"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.38 + i * 0.08, ease: 'easeOut' as const }}
              >
                <div className="w-5 h-0.5 rounded-full bg-primary mb-2" />
                <h3 className="text-white font-semibold text-sm mb-1">{uc.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Accelerator data ─────────────────────────────────────────────────────────

interface AcceleratorData {
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  capabilities: string[];
  results: { context: string; stats: Array<{ value: string; label: string }> };
  idealFor: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const ACC_COLORS = [
  '#F97316', '#3B82F6', '#10B981', '#8B5CF6', '#EF4444',
  '#F59E0B', '#06B6D4', '#EC4899', '#84CC16', '#14B8A6',
];

const ACCELERATOR_DATA: AcceleratorData[] = [
  {
    name: 'ReconcileAI',
    subtitle: 'Intelligent Data Reconciliation',
    tagline: 'Automate complex reconciliation processes with AI precision',
    description: 'Automates the end-to-end reconciliation process across financial, inventory, and compliance data. Using a blend of rules and AI, it matches large datasets, flags discrepancies, and generates audit-ready summaries - accelerating close cycles and reducing manual workloads.',
    capabilities: ['Automated matching and exception handling', 'AI-powered anomaly detection', 'Multi-source data reconciliation', 'Audit-ready reporting and compliance', 'Accelerated close cycles'],
    results: { context: 'FinTech / Payments', stats: [{ value: '92%', label: 'Automated Matching' }, { value: '5d → <24h', label: 'Reconciliation Cycle' }, { value: '300+', label: 'Hours Saved / Month' }] },
    idealFor: 'Banks, fintechs, and enterprise accounting teams',
    icon: Scale,
  },
  {
    name: 'KnowledgePulse',
    subtitle: 'Dynamic Knowledge Management',
    tagline: 'Turn tribal knowledge into intelligent support systems',
    description: 'Converts static documents and support material into a dynamic, searchable knowledge base. Powered by RAG and NLP, it drives intelligent FAQs, contextual help, and customer support bots. As documentation evolves, the knowledge base updates automatically - ensuring real-time accuracy.',
    capabilities: ['Dynamic, searchable knowledge base', 'AI-powered FAQ generation', 'Real-time accuracy and updates', 'RAG architecture with vector search', 'Integrated chatbot support'],
    results: { context: 'SaaS Customer Success', stats: [{ value: '500+', label: 'Auto-Generated Articles' }, { value: '-40%', label: 'Onboarding Questions' }, { value: '78%', label: 'Self-Service Rate' }] },
    idealFor: 'SaaS, enterprise IT, and service organizations',
    icon: BookOpen,
  },
  {
    name: 'InsightBridge',
    subtitle: 'Legacy System Knowledge Extraction',
    tagline: 'Bridge the gap between old infrastructure and modern AI workflows',
    description: 'Extracts and modernizes knowledge trapped in legacy systems - mainframes, aging databases, and undocumented codebases. InsightBridge creates a structured, queryable knowledge layer on top of your existing estate so teams can move forward without starting from scratch.',
    capabilities: ['Legacy system knowledge extraction', 'Automated documentation generation', 'Structured knowledge graph output', 'Integration with modern AI workflows', 'Reverse engineering of undocumented logic'],
    results: { context: 'Enterprise Modernization', stats: [{ value: '80%', label: 'Faster Legacy Discovery' }, { value: '60%', label: 'Reduction in Manual Docs' }, { value: '3x', label: 'Faster Modernization' }] },
    idealFor: 'Enterprises with legacy mainframes, aging core systems, or undocumented codebases',
    icon: Database,
  },
  {
    name: 'SyntheticEdge',
    subtitle: 'Privacy-Safe Data Generation',
    tagline: 'Build AI without the data privacy headache',
    description: 'Generates realistic, PII-safe synthetic datasets to accelerate AI development in regulated environments. It simulates customer behavior, anomalies, and edge cases while ensuring zero real data exposure. Teams build, test, and iterate AI models without waiting for data approval.',
    capabilities: ['PII-safe synthetic data generation', 'Realistic behavior simulation', 'Edge case and anomaly modeling', 'Support for structured and unstructured formats', 'ML platform integrations'],
    results: { context: 'Healthcare AI', stats: [{ value: '✓', label: 'Model Testing w/o PHI' }, { value: '+3mo', label: 'Faster Time-to-Pilot' }, { value: '6w → 5d', label: 'Legal Review Cycle' }] },
    idealFor: 'Healthcare, banking, and insurance sectors with sensitive data requirements',
    icon: Sparkles,
  },
  {
    name: 'PromptLine',
    subtitle: 'Conversational AI Phone & Text',
    tagline: 'Intelligent voice and text interfaces for financial services',
    description: 'AI-powered voice and text interfaces that handle customer queries, route complex cases, and integrate with core banking systems - 24/7, without agent involvement. Replaces rigid IVR systems with natural, contextually aware conversations that resolve issues in real time.',
    capabilities: ['Natural AI voice call handling', 'SMS and text automation', 'Intelligent call routing and escalation', 'Core banking system integration', 'Compliance audit trails for every conversation'],
    results: { context: 'Financial Services', stats: [{ value: '78%', label: 'Containment Rate' }, { value: '1.8m', label: 'Avg Handle Time' }, { value: '99.9%', label: 'Uptime' }] },
    idealFor: 'Banks, credit unions, and financial services with high inbound call or SMS volume',
    icon: Phone,
  },
  {
    name: 'Shared Service Marketplace',
    subtitle: 'Centralized Customer Communications',
    tagline: 'Automate 20+ operations-driven communications from one place',
    description: 'Centralizes customer communication workflows - NSF notices, maturity reminders, tax statements, and more - into a single branded, compliance-ready hub. Triggers messages across email, SMS, and print from one platform, standardizing communications across lines of business.',
    capabilities: ['Centralized communication management', 'Multi-channel delivery (email, SMS, print)', 'Compliance-ready message templates', 'Standardized branding and messaging', 'Workflow automation and triggers'],
    results: { context: 'Credit Union', stats: [{ value: '22', label: 'Centralized Workflows' }, { value: '+35%', label: 'Delivery Success Rate' }, { value: '-70%', label: 'Manual Intervention' }] },
    idealFor: 'Banks, credit unions, and insurers looking to modernize customer communications',
  },
  {
    name: 'Digital Twin',
    subtitle: 'Regulatory Compliance',
    tagline: 'Your virtual compliance analyst working 24/7',
    description: 'An AI-powered digital twin that monitors regulatory changes and automates impact analysis. It identifies affected policies, controls, and stakeholders, drafts recommendations, and routes tasks for review - integrating with enterprise compliance platforms to orchestrate end-to-end response workflows.',
    capabilities: ['Automated regulatory change monitoring', 'AI-powered impact analysis', 'Policy and control mapping', 'Intelligent task routing and collaboration', 'Comprehensive audit trails'],
    results: { context: 'Insurance Compliance', stats: [{ value: '3w → 4d', label: 'Impact Assessment Time' }, { value: '70%', label: 'Automated Suggestions' }, { value: '✓', label: 'Improved Audit Tracking' }] },
    idealFor: 'Compliance-heavy industries including finance, insurance, and healthcare',
  },
  {
    name: 'Guided Selling App',
    subtitle: 'Simplify Complex Product Configurations',
    tagline: 'Help your customers configure exactly what they need',
    description: 'Simplifies the customer decision journey for modular or complex product offerings. A natural language interface and visual builder map customer needs to the right configuration, giving sales reps and self-serve users tailored solution paths that shorten time-to-sale.',
    capabilities: ['Interactive needs-based Q&A flow', 'Visual solution building interface', 'Natural language processing', 'CRM integration and lead tracking', 'Self-service and assisted selling modes'],
    results: { context: 'Digital Banking Platform', stats: [{ value: '45m → 10m', label: 'Solution Discovery Time' }, { value: '2.3x', label: 'Lead Conversion Rate' }, { value: '✓', label: 'No Technical Help Needed' }] },
    idealFor: 'Digital banking platforms, SaaS vendors, and modular B2B tech providers',
  },
  {
    name: 'Chat-Web-30',
    subtitle: 'Conversational Web Assistant',
    tagline: 'Your website, now talkable',
    description: 'A web-embedded AI assistant that brings conversational UX to any website. Handles FAQs, directs users to forms, guides them through processes, and triggers calculators or actions - enhancing self-service experiences and increasing conversion by removing friction from navigation.',
    capabilities: ['Conversational website navigation', 'Intelligent FAQ handling', 'Form guidance and completion support', 'Process walkthrough assistance', 'Calculator and action triggers'],
    results: { context: 'Higher Education', stats: [{ value: '-60%', label: 'Support Queries to Agents' }, { value: '+22%', label: 'Form Completion Rate' }, { value: '78 → 91%', label: 'Customer Satisfaction' }] },
    idealFor: 'Education, financial services, government, and ecommerce sectors',
  },
  {
    name: 'Workflow Assist',
    subtitle: 'Secure Document Upload',
    tagline: 'Secure file intake with workflow intelligence',
    description: 'A secure, user-friendly portal for document collection linked to internal workflows. Whether for KYC, onboarding, or audits, users upload files with real-time validation while backend systems receive structured, tagged data. Improves intake speed, reduces manual errors, and strengthens compliance.',
    capabilities: ['Secure document collection portal', 'Real-time validation and tagging', 'Workflow integration and routing', 'Status notifications and tracking', 'Enhanced compliance tracking'],
    results: { context: 'Lending & Credit', stats: [{ value: '58 → 94%', label: '3-Day Collection Rate' }, { value: '✓', label: 'Compliance Pass Rate' }, { value: '-65%', label: 'Manual Intake Work' }] },
    idealFor: 'Lending, insurance, education, and HR departments',
  },
];

// ─── Slide 7a: Accelerators overview ─────────────────────────────────────────

function AcceleratorsOverviewSlide() {
  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex flex-col items-center justify-center px-8 md:px-12">
      <Orbs />
      <LogoWatermark />
      <div className="relative z-10 w-full max-w-7xl">
        <div className="text-center mb-7">
          <div className="mb-4"><Badge color="green">AI Accelerators</Badge></div>
          <Heading delay={0.1}>10 Production-Ready Accelerators</Heading>
          <div className="mt-3 max-w-2xl mx-auto">
            <Sub delay={0.2}>Compress months of development into weeks - built specifically for Fintech</Sub>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {ACCELERATOR_DATA.map((acc, i) => {
            const Icon = acc.icon;
            return (
            <motion.div
              key={acc.name}
              className="bg-card rounded-xl p-4 border border-border flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.07, ease: 'easeOut' as const }}
            >
              {Icon ? (
                <div className="w-12 h-12 rounded-lg mb-3 flex items-center justify-center bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
              ) : (
                <div
                  className="w-12 h-12 rounded-lg mb-3 flex items-center justify-center text-lg font-black"
                  style={{ backgroundColor: `${ACC_COLORS[i]}20`, color: ACC_COLORS[i] }}
                >
                  {i + 1}
                </div>
              )}
              <h3 className="text-xs font-bold text-white mb-1 leading-tight">{acc.name}</h3>
              <p className="text-[10px] text-slate-400 leading-snug">{acc.subtitle}</p>
            </motion.div>
            );
          })}
        </div>
        <motion.p
          className="mt-5 text-center text-slate-500 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1, ease: 'easeOut' as const }}
        >
          Next slides walk through each accelerator in detail
        </motion.p>
      </div>
    </div>
  );
}

// ─── Slide 7b–7k: Individual accelerator detail ───────────────────────────────

interface AcceleratorDetailProps {
  acc: AcceleratorData;
  index: number;
}

function AcceleratorDetailSlide({ acc, index }: AcceleratorDetailProps) {
  const color = ACC_COLORS[index % ACC_COLORS.length];

  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex flex-col items-center justify-center px-8 md:px-12">
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ backgroundColor: `${color}08` }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"
        style={{ backgroundColor: `${color}06` }}
      />
      <LogoWatermark />
      <div className="relative z-10 w-full max-w-7xl">
        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <div className="flex-1 min-w-0">
            <motion.span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2"
              style={{ backgroundColor: `${color}18`, color }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' as const }}
            >
              Accelerator {index + 1} of {ACCELERATOR_DATA.length}
            </motion.span>
            <motion.div
              className="text-xs font-bold uppercase tracking-widest mb-1"
              style={{ color }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.06, ease: 'easeOut' as const }}
            >
              {acc.subtitle}
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' as const }}
            >
              {acc.name}
            </motion.h2>
            <motion.p
              className="text-slate-400 italic mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' as const }}
            >
              &ldquo;{acc.tagline}&rdquo;
            </motion.p>
          </div>
          {acc.icon && (
            <motion.div
              className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center bg-primary/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' as const }}
            >
              <acc.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
            </motion.div>
          )}
        </div>

        {/* Body: 3-column grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* Col 1: Description + Ideal For */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: 'easeOut' as const }}
          >
            <div className="bg-card rounded-xl p-5 border border-border flex-1">
              <div className="text-xs font-bold uppercase tracking-widest text-white mb-3">Overview</div>
              <p className="text-slate-400 text-sm leading-relaxed">{acc.description}</p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border">
              <div className="text-xs font-bold uppercase tracking-widest text-white mb-2">Ideal For</div>
              <p className="text-slate-400 text-xs leading-relaxed">{acc.idealFor}</p>
            </div>
          </motion.div>

          {/* Col 2: Capabilities */}
          <motion.div
            className="bg-card rounded-xl p-5 border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.38, ease: 'easeOut' as const }}
          >
            <div className="text-xs font-bold uppercase tracking-widest text-white mb-4">Key Capabilities</div>
            <ul className="space-y-3">
              {acc.capabilities.map((cap, ci) => (
                <motion.li
                  key={cap}
                  className="flex items-start gap-2.5 text-slate-300 text-sm"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + ci * 0.08, ease: 'easeOut' as const }}
                >
                  <span
                    className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                  </span>
                  {cap}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Results */}
          <motion.div
            className="bg-card rounded-xl p-5 border border-border"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.45, ease: 'easeOut' as const }}
          >
            <div className="text-xs font-bold uppercase tracking-widest text-white mb-1">Proven Results</div>
            <div className="text-xs text-slate-500 mb-4">{acc.results.context}</div>
            <div className="flex flex-col gap-3">
              {acc.results.stats.map((stat, si) => (
                <motion.div
                  key={stat.label}
                  className="bg-background rounded-xl p-4 border border-border text-center"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.58 + si * 0.1, ease: 'easeOut' as const }}
                >
                  <div className="text-2xl font-black mb-1" style={{ color }}>{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─── Slide: Prahari — The Sentinel ───────────────────────────────────────────

function PrahariSlide() {
  const capabilities = [
    { title: 'Agent Activity Monitoring', desc: 'Real-time surveillance of every AI agent action across your operations - flagging anomalies before they escalate.' },
    { title: 'Transaction-Level Oversight', desc: 'Every transaction scanned against compliance rules and risk thresholds, automatically, without human review bottlenecks.' },
    { title: 'Regulatory Rule Engine', desc: 'Continuously updated rule sets mapped to current regulations - BSA, AML, KYC, CFPB - with zero manual maintenance.' },
    { title: 'Audit-Ready Reporting', desc: 'Examiner-grade audit trails generated automatically. Every decision logged, every flag documented, every resolution tracked.' },
  ];

  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex items-center justify-center px-10 md:px-14">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#8B5CF6]/6 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/4 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <LogoWatermark />
      <div className="relative z-10 w-full max-w-7xl flex items-start gap-12">
        {/* Left */}
        <motion.div
          className="flex-shrink-0 w-80 flex flex-col gap-5"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' as const }}
        >
          <div><Badge color="purple">The Sentinel</Badge></div>
          <div>
            <h2 className="text-6xl font-black text-white tracking-tight leading-tight">
              Prahari<span className="text-[#8B5CF6]">.</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2">AI Compliance & Agent Oversight</p>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Every agent. Every transaction. Every regulation. Watched. Prahari is the always-on
            compliance sentinel that monitors AI agents and financial operations in real time -
            so nothing slips past your risk perimeter.
          </p>
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: 'easeOut' as const }}
          >
            {[
              { value: '24/7', label: 'Continuous Watch' },
              { value: '100%', label: 'Transaction Coverage' },
            ].map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-3 border border-border text-center">
                <div className="text-xl font-black text-[#8B5CF6]">{s.value}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
          <div className="bg-card rounded-xl p-4 border border-border">
            <div className="text-xs font-bold uppercase tracking-widest text-white mb-2">Ideal For</div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Banks, credit unions, and fintechs deploying AI agents who need compliance
              assurance without adding headcount to their oversight function.
            </p>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: 'easeOut' as const }}
        >
          <div className="text-xs font-bold uppercase tracking-widest text-white mb-4">What Prahari Watches</div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                className="bg-card rounded-xl p-4 border border-border"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.38 + i * 0.08, ease: 'easeOut' as const }}
              >
                <div className="w-5 h-0.5 rounded-full bg-[#8B5CF6] mb-2" />
                <h3 className="text-white font-semibold text-sm mb-1">{cap.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="bg-card rounded-xl p-4 border border-[#8B5CF6]/20 flex items-center gap-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.72, ease: 'easeOut' as const }}
          >
            <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center flex-shrink-0">
              <span className="text-[#8B5CF6] font-black text-sm">P</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              <span className="text-white font-medium">FinZpire 2026 showcase product.</span>{' '}
              Prahari is the back-office sentinel layer in the Theoremlabs agentic banking stack -
              alongside PromptLine (front office) and Tacit (document intelligence).
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Slide 8: Advisory & Consulting ──────────────────────────────────────────

function AdvisorySlide() {
  const services = [
    { icon: '🗺️', title: 'AI Strategy & Roadmapping', desc: 'Define your AI transformation journey with a clear, executable roadmap tailored to Fintech.' },
    { icon: '⚙️', title: 'Operating Model Design', desc: 'Redesign processes and org structures to embrace AI-native ways of working.' },
    { icon: '🔍', title: 'Technology Due Diligence', desc: 'Evaluate AI vendors, platforms, and architectures with practitioner rigour.' },
    { icon: '🔄', title: 'Change Management', desc: 'Guide leadership and teams through cultural and workflow shifts that AI demands.' },
    { icon: '⚖️', title: 'Regulatory & Risk Advisory', desc: 'Navigate AI compliance in financial services - Model Risk, Fairness, Explainability.' },
    { icon: '🎓', title: 'Executive Education', desc: 'Upskill C-suite and senior leaders on AI literacy, strategy, and competitive positioning.' },
  ];

  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex flex-col items-center justify-center px-8 md:px-14">
      <Orbs />
      <LogoWatermark />
      <div className="relative z-10 w-full max-w-7xl">
        <div className="text-center mb-10">
          <div className="mb-4"><Badge color="blue">Advisory &amp; Consulting</Badge></div>
          <Heading delay={0.1}>Strategy Meets Execution</Heading>
          <div className="mt-4 max-w-2xl mx-auto">
            <Sub delay={0.22}>We don&apos;t just advise - we roll up our sleeves and build alongside you</Sub>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="bg-card rounded-xl p-6 border border-border"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32 + i * 0.09, ease: 'easeOut' as const }}
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="text-white font-semibold mb-2 text-sm">{s.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Slide 9: Art of Possible Labs ────────────────────────────────────────────

function ArtOfPossibleSlide() {
  const phases = [
    { num: '01', title: 'Discover', desc: 'Deep-dive workshops to identify high-value AI opportunities within your organisation.' },
    { num: '02', title: 'Prototype', desc: 'Rapid, low-risk experiments that prove concepts in days - not months.' },
    { num: '03', title: 'Validate', desc: 'Rigorous testing with real data and users to confirm business value before scaling.' },
    { num: '04', title: 'Launch', desc: 'Production-grade deployment with full documentation, handover, and ongoing support.' },
  ];

  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex flex-col items-center justify-center px-8 md:px-16">
      <Orbs />
      <LogoWatermark />
      <div className="relative z-10 w-full max-w-6xl">
        <div className="text-center mb-12">
          <div className="mb-4"><Badge>Art of Possible Labs</Badge></div>
          <Heading delay={0.1}>Where Ideas Become Reality</Heading>
          <div className="mt-4 max-w-2xl mx-auto">
            <Sub delay={0.22}>A structured innovation methodology that turns ambitious ideas into working AI products</Sub>
          </div>
        </div>
        <div className="flex items-stretch gap-4">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              className="flex-1 relative"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 + i * 0.15, ease: 'easeOut' as const }}
            >
              <div className="bg-card rounded-2xl p-7 border border-border h-full">
                <div className="text-5xl font-black text-primary/20 mb-4">{phase.num}</div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{phase.desc}</p>
              </div>
              {i < phases.length - 1 && (
                <div className="absolute top-1/2 -right-3 z-10 text-primary text-xl font-bold -translate-y-1/2">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Slide 10: Coding Loops ───────────────────────────────────────────────────

function CodingLoopsSlide() {
  const loops = [
    {
      name: 'Ralph Wiggum',
      sub: 'Naive Persistence',
      color: '#EF4444',
      badge: 'Copilot',
      desc: 'Single long-running agent context. Simple but prone to context rot - degraded output quality as token windows fill.',
      level: '33%',
      levelLabel: 'Low Autonomy',
    },
    {
      name: 'Gas Town',
      sub: 'Factory Pattern',
      color: '#F97316',
      badge: 'Autopilot',
      desc: 'Isolated, parallelised agent tasks. Each agent gets a fresh context window for a discrete function. Higher throughput.',
      level: '66%',
      levelLabel: 'Medium Autonomy',
    },
    {
      name: 'Cherny / Team',
      sub: 'Compound Engineering',
      color: '#10B981',
      badge: 'Agentic',
      desc: 'Orchestrated multi-agent teams with specialised roles. Maximum quality and scalability for enterprise delivery.',
      level: '100%',
      levelLabel: 'Full Autonomy',
    },
  ];

  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex flex-col items-center justify-center px-8 md:px-16">
      <Orbs />
      <LogoWatermark />
      <div className="relative z-10 w-full max-w-6xl">
        <div className="text-center mb-10">
          <div className="mb-4"><Badge color="green">Innovation: Coding Loops</Badge></div>
          <Heading delay={0.1}>
            From Copilot to{' '}
            <span className="text-[#10B981]">Autopilot</span>
          </Heading>
          <div className="mt-4 max-w-2xl mx-auto">
            <Sub delay={0.22}>The Agentic Shift 2026 framework - how teams move from AI assistance to AI autonomy</Sub>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {loops.map((loop, i) => (
            <motion.div
              key={loop.name}
              className="bg-card rounded-2xl p-7 border-2 flex flex-col"
              style={{ borderColor: `${loop.color}35` }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 + i * 0.15, ease: 'easeOut' as const }}
            >
              <span
                className="inline-block self-start px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{ backgroundColor: `${loop.color}20`, color: loop.color }}
              >
                {loop.badge}
              </span>
              <h3 className="text-2xl font-bold text-white mb-1">{loop.name}</h3>
              <div className="text-sm font-medium mb-4" style={{ color: loop.color }}>{loop.sub}</div>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{loop.desc}</p>
              <div className="mt-6">
                <div className="w-full h-1.5 rounded-full bg-background mb-1.5">
                  <div className="h-full rounded-full" style={{ width: loop.level, backgroundColor: loop.color }} />
                </div>
                <div className="text-xs text-slate-500 text-right">{loop.levelLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Slide 11: AI Technologies ────────────────────────────────────────────────

function AITechnologiesSlide() {
  const techs = [
    {
      category: 'Foundation Models',
      items: ['Claude (Anthropic)', 'GPT-4o (OpenAI)', 'Gemini (Google)', 'Llama 3 (Meta)'],
      color: '#3B82F6',
    },
    {
      category: 'Agentic Frameworks',
      items: ['Model Context Protocol (MCP)', 'LangGraph', 'CrewAI', 'Autogen'],
      color: '#F97316',
    },
    {
      category: 'Data & RAG',
      items: ['Retrieval Augmented Generation', 'Vector Databases', 'Synthetic Data Generation', 'Data Pipelines'],
      color: '#10B981',
    },
    {
      category: 'AI in Fintech',
      items: ['Fraud Detection & Prevention', 'Risk Modelling & Assessment', 'Regulatory AI Compliance', 'Personalisation at Scale'],
      color: '#8B5CF6',
    },
  ];

  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex flex-col items-center justify-center px-8 md:px-14">
      <Orbs />
      <LogoWatermark />
      <div className="relative z-10 w-full max-w-7xl">
        <div className="text-center mb-10">
          <div className="mb-4"><Badge color="purple">Innovation: AI Technologies</Badge></div>
          <Heading delay={0.1}>The AI Landscape We Navigate</Heading>
          <div className="mt-4 max-w-2xl mx-auto">
            <Sub delay={0.22}>Tracking and applying the latest AI advances · Last updated: Q1 2026</Sub>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.category}
              className="bg-card rounded-2xl p-6 border border-border"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32 + i * 0.12, ease: 'easeOut' as const }}
            >
              <div className="w-1.5 h-9 rounded-full mb-5" style={{ backgroundColor: tech.color }} />
              <h3 className="text-white font-bold mb-4 text-sm leading-tight">{tech.category}</h3>
              <ul className="space-y-2.5">
                {tech.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-400 text-xs leading-snug">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: tech.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Slide 12: Our Team ───────────────────────────────────────────────────────

function OurTeamSlide() {
  const team = [
    { name: 'Wendie Hernandez', title: 'Co-Founder & Managing Partner', img: '/images/team-wendie.png' },
    { name: 'Shantanu Wadodkar', title: 'Co-Founder & Managing Partner', img: '/images/team-shantanu.png' },
    { name: 'Prashant Sarode', title: 'Cofounder & AI Mentor in Residence', img: '/images/team-prashant.png' },
    { name: 'Will Storey', title: 'Co-Founder & Lab Mentor', img: '/images/team-will.png' },
    { name: 'David Ward', title: 'Chief Revenue & Growth Officer', img: '/images/team-david.png' },
    { name: 'Jim Stevenson', title: 'Contributor', img: '/images/team-jim.png' },
  ];

  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex flex-col items-center justify-center px-8 md:px-14">
      <Orbs />
      <LogoWatermark />
      <div className="relative z-10 w-full max-w-7xl">
        <div className="text-center mb-12">
          <div className="mb-4"><Badge>Our Team</Badge></div>
          <Heading delay={0.1}>The People Behind the Mission</Heading>
          <div className="mt-4 max-w-2xl mx-auto">
            <Sub delay={0.22}>Experienced leaders from Fintech, AI research, and enterprise technology</Sub>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32 + i * 0.1, ease: 'easeOut' as const }}
            >
              <div className="w-28 h-28 rounded-2xl overflow-hidden bg-card border-2 border-border mb-4">
                <Image src={member.img} alt={member.name} width={112} height={112} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-white font-semibold text-sm leading-snug mb-1">{member.name}</h3>
              <p className="text-slate-400 text-xs leading-snug">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Slide 13: Testimonial ────────────────────────────────────────────────────

function TestimonialSlide() {
  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex items-center justify-center px-10 md:px-24">
      <Orbs />
      <LogoWatermark />
      <div className="relative z-10 max-w-4xl text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' as const }}
        >
          <Image src="/images/quote.gif" alt="Quote" width={72} height={72} className="mx-auto" unoptimized />
        </motion.div>
        <motion.blockquote
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-relaxed mb-10"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.2, ease: 'easeOut' as const }}
        >
          &ldquo;It&apos;s going to be interesting to see how society deals with artificial
          intelligence, but it will definitely be{' '}
          <em className="text-primary not-italic font-bold">cool.</em>&rdquo;
        </motion.blockquote>
        <motion.div
          className="flex items-center justify-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.52, ease: 'easeOut' as const }}
        >
          <div className="w-16 h-px bg-primary" />
          <div>
            <div className="text-white font-semibold text-xl">Colin Angle</div>
            <div className="text-slate-400 text-sm">CEO of iRobot</div>
          </div>
          <div className="w-16 h-px bg-primary" />
        </motion.div>
      </div>
    </div>
  );
}

// ─── Slide 14: Contact ────────────────────────────────────────────────────────

function ContactSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/8 blur-3xl pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-10">
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' as const }}
          className="mb-8"
        >
          <Image
            src="/images/logo-white.png"
            alt="Theoremlabs Partners LLC"
            width={260}
            height={70}
            className="object-contain mx-auto"
          />
        </motion.div>
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: 'easeOut' as const }}
        >
          Let&apos;s Build the<br />
          <span className="text-primary">Future Together</span>
        </motion.h2>
        <motion.p
          className="text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: 'easeOut' as const }}
        >
          Partner with Theoremlabs to accelerate your AI transformation, build production-ready
          solutions, and unlock the full potential of your data.
        </motion.p>
        <motion.div
          className="flex flex-wrap items-stretch justify-center rounded-2xl overflow-hidden border border-border mb-10"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.45, ease: 'easeOut' as const }}
        >
          {[
            { label: 'Address', value: '101 S. Tryon St, STE 2700\nCharlotte, NC 28280' },
            { label: 'Website', value: 'theoremlabs.io' },
            { label: 'Email', value: 'research@theoremlabs.io' },
          ].map((item, i) => (
            <div
              key={item.label}
              className={cn('bg-card px-10 py-6 text-center', i > 0 && 'border-l border-border')}
            >
              <div className="text-primary font-semibold text-xs uppercase tracking-wider mb-2">{item.label}</div>
              <div className="text-slate-300 text-sm whitespace-pre-line leading-relaxed">{item.value}</div>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="px-10 py-4 rounded-full bg-primary text-white font-bold text-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.62, ease: 'easeOut' as const }}
        >
          theoremlabs.io/engage/contact
        </motion.div>
      </div>
    </div>
  );
}

// ─── Slide registry ───────────────────────────────────────────────────────────

const ACC_SLIDES = ACCELERATOR_DATA.map((acc, i) => ({
  id: `accelerator-${i}`,
  component: () => <AcceleratorDetailSlide acc={acc} index={i} />,
  duration: 11000,
}));

const SLIDES = [
  { id: 'cover',                 component: CoverSlide,              duration: 10000 },
  { id: 'mission',               component: MissionSlide,            duration: 9000  },
  { id: 'pillars',               component: ThreePillarsSlide,       duration: 9000  },
  { id: 'why-us',                component: WhyUsSlide,              duration: 9000  },
  { id: 'kirdar',                component: KirdarSlide,             duration: 10000 },
  { id: 'datagaze',              component: DataGazeSlide,            duration: 10000 },
  { id: 'ubpr-intelligence',     component: UBPRIntelligenceSlide,    duration: 11000 },
  { id: 'promptline',            component: PromptLineSlide,          duration: 10000 },
  { id: 'accelerators-overview', component: AcceleratorsOverviewSlide, duration: 10000 },
  ...ACC_SLIDES,
  { id: 'prahari',               component: PrahariSlide,             duration: 11000 },
  { id: 'advisory',              component: AdvisorySlide,           duration: 10000 },
  { id: 'art-of-possible',       component: ArtOfPossibleSlide,      duration: 9000  },
  { id: 'coding-loops',          component: CodingLoopsSlide,        duration: 11000 },
  { id: 'ai-tech',               component: AITechnologiesSlide,     duration: 10000 },
  { id: 'team',                  component: OurTeamSlide,            duration: 10000 },
  { id: 'testimonial',           component: TestimonialSlide,        duration: 9000  },
  { id: 'contact',               component: ContactSlide,            duration: 10000 },
];

// ─── Main controller ──────────────────────────────────────────────────────────

function getExportParams() {
  if (typeof window === 'undefined') return { index: 0, export: false };
  const params = new URLSearchParams(window.location.search);
  if (params.get('export') !== '1') return { index: 0, export: false };
  const idx = Math.min(Math.max(0, parseInt(params.get('slide') ?? '0', 10)), SLIDES.length - 1);
  return { index: idx, export: true };
}

export default function SlideshowPage() {
  const [currentIndex, setCurrentIndex] = useState(() => getExportParams().index);
  const [isPlaying, setIsPlaying] = useState(() => !getExportParams().export);
  const [showControls, setShowControls] = useState(false);
  const [exportMode] = useState(() => getExportParams().export);
  const controlsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-advance
  useEffect(() => {
    if (!isPlaying || exportMode) return;
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDES[currentIndex].duration);
    return () => clearTimeout(timer);
  }, [currentIndex, isPlaying, exportMode]);

  // Show controls on mouse move, hide after 3 s of inactivity
  const handleMouseMove = useCallback(() => {
    setShowControls(true);
    if (controlsTimer.current) clearTimeout(controlsTimer.current);
    controlsTimer.current = setTimeout(() => setShowControls(false), 3000);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
      if (e.key === 'ArrowLeft')  setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
      if (e.key === ' ') { e.preventDefault(); setIsPlaying((prev) => !prev); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const CurrentSlide = SLIDES[currentIndex].component;

  return (
    <div
      className={cn(
        'fixed inset-0 z-[9999] bg-background overflow-hidden',
        exportMode ? 'cursor-none' : showControls ? 'cursor-default' : 'cursor-none',
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={SLIDES[currentIndex].id}
          className="absolute inset-0"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      {/* Animated progress bar — hidden in export mode */}
      {!exportMode && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10 z-50">
        <motion.div
          key={`progress-${currentIndex}`}
          className="h-full bg-primary"
          initial={{ width: '0%' }}
          animate={isPlaying ? { width: '100%' } : {}}
          transition={{ duration: SLIDES[currentIndex].duration / 1000, ease: 'linear' as const }}
        />
      </div>}

      {/* Controls — visible on hover, hidden in export mode */}
      <AnimatePresence>
        {showControls && !exportMode && (
          <motion.div
            className="absolute inset-0 z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' as const }}
          >
            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-black/60 transition-colors"
              onClick={() => setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-black/60 transition-colors"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % SLIDES.length)}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Top-right: slide counter + play/pause */}
            <div className="absolute top-6 right-6 flex items-center gap-3 pointer-events-auto">
              <span className="text-white/50 text-sm tabular-nums">
                {currentIndex + 1} / {SLIDES.length}
              </span>
              <button
                className="w-9 h-9 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                onClick={() => setIsPlaying((prev) => !prev)}
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </div>

            {/* Bottom: dot navigation */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-auto">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    i === currentIndex
                      ? 'bg-primary w-6'
                      : 'bg-white/30 hover:bg-white/60 w-1.5',
                  )}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
