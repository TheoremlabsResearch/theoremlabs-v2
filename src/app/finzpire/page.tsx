'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Design tokens (stealth mono per brief) ───────────────────────────────────
const AMBER = '#D4840A';
const BG = '#111111';

// ─── Scene registry ───────────────────────────────────────────────────────────
// Total: 90s seamless loop

const SCENES = [
  { id: 'act1',       duration: 15000 },
  { id: 'break',      duration: 5000  },
  { id: 'promptline', duration: 10000 },
  { id: 'tacit',      duration: 10000 },
  { id: 'prahari',    duration: 10000 },
  { id: 'stat1',      duration: 5000  },
  { id: 'stat2',      duration: 5000  },
  { id: 'stat3',      duration: 5000  },
  { id: 'stat4',      duration: 5000  },
  { id: 'stat5',      duration: 5000  },
  { id: 'cta',        duration: 15000 },
] as const;

type SceneId = typeof SCENES[number]['id'];

// ─── Reusable: wipe-reveal text (left→right) ──────────────────────────────────

function WipeText({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ─── Reusable: fade text ──────────────────────────────────────────────────────

function FadeText({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Scene: Act I — The Weight ────────────────────────────────────────────────

function Act1Scene() {
  const lines = [
    '18 months to deploy a new system.',
    '$200,000 per process, per year.',
    'Still waiting on IT.',
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full px-16">
      <div className="flex flex-col gap-10 max-w-3xl w-full">
        {lines.map((line, i) => (
          <WipeText key={line} delay={i * 1.5 + 0.5}>
            <p
              className="text-4xl md:text-5xl text-white"
              style={{ fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              {line}
            </p>
          </WipeText>
        ))}
      </div>
      {/* Subtle bottom accent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: AMBER, opacity: 0.25 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 5, ease: 'linear' }}
      />
    </div>
  );
}

// ─── Scene: Break — The Theorem ───────────────────────────────────────────────

function HexIcon() {
  return (
    <motion.svg
      viewBox="0 0 100 86.6"
      className="w-24 h-24"
      initial={{ scale: 0, rotate: -60 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <polygon
        points="50,2 97,27.3 97,77.9 50,103.2 3,77.9 3,27.3"
        fill={AMBER}
        stroke={AMBER}
        strokeWidth="2"
        opacity={0.85}
      />
      <motion.polygon
        points="50,2 97,27.3 97,77.9 50,103.2 3,77.9 3,27.3"
        fill="none"
        stroke="white"
        strokeWidth="1"
        opacity={0}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 1.5, delay: 0.7, repeat: Infinity, repeatDelay: 1 }}
      />
    </motion.svg>
  );
}

function BreakScene() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <HexIcon />
      <WipeText delay={0.8}>
        <p
          className="text-2xl md:text-3xl text-white text-center"
          style={{ fontWeight: 300, letterSpacing: '0.06em' }}
        >
          There is a better theorem.
        </p>
      </WipeText>
    </div>
  );
}

// ─── Scene: Act II — Product beat ─────────────────────────────────────────────

function ProductScene({
  name,
  office,
  lines,
  accentColor = 'white',
}: {
  name: string;
  office: string;
  lines: string[];
  accentColor?: string;
}) {
  return (
    <div className="flex flex-col items-start justify-center h-full px-16 md:px-24 max-w-4xl mx-auto w-full">
      <FadeText delay={0.1}>
        <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: AMBER }}>
          {office}
        </p>
      </FadeText>
      <WipeText delay={0.25}>
        <h2
          className="text-7xl md:text-8xl text-white mb-8"
          style={{ fontWeight: 700, letterSpacing: '-0.03em' }}
        >
          {name}
          <span style={{ color: AMBER }}>.</span>
        </h2>
      </WipeText>
      <div className="flex flex-col gap-3">
        {lines.map((line, i) => (
          <WipeText key={line} delay={0.5 + i * 0.18}>
            <p
              className="text-2xl md:text-3xl"
              style={{ color: accentColor, fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              {line}
            </p>
          </WipeText>
        ))}
      </div>
      <motion.div
        className="mt-10 h-px w-24"
        style={{ backgroundColor: AMBER }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
      />
    </div>
  );
}

// ─── Scene: Act III — Stat card ───────────────────────────────────────────────

function StatScene({
  number,
  context,
  sub,
}: {
  number: string;
  context: string;
  sub: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center">
      {/* Subtle hex grid texture using repeating gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, ${AMBER} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      <WipeText>
        <p
          className="text-white"
          style={{
            fontSize: 'clamp(96px, 15vw, 160px)',
            fontWeight: 300,
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          {number}
        </p>
      </WipeText>
      <FadeText delay={0.55} className="mt-4">
        <p className="text-base" style={{ color: '#666666', letterSpacing: '0.01em' }}>
          {context}
        </p>
      </FadeText>
      <FadeText delay={0.75}>
        <p className="text-xs mt-1" style={{ color: '#444444', letterSpacing: '0.05em' }}>
          {sub}
        </p>
      </FadeText>
    </div>
  );
}

// ─── Scene: CTA ───────────────────────────────────────────────────────────────

function CTAScene() {
  const lines = [
    { text: 'Your AI Products.', delay: 0.2, large: true },
    { text: 'Deployed in Weeks. Not Years.', delay: 0.55, large: true },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full px-10 text-center gap-6">
      {lines.map(({ text, delay, large }) => (
        <WipeText key={text} delay={delay}>
          <p
            className="text-white"
            style={{
              fontSize: large ? 'clamp(36px, 5vw, 64px)' : 'inherit',
              fontWeight: large ? 300 : 400,
              letterSpacing: '-0.02em',
            }}
          >
            {text}
          </p>
        </WipeText>
      ))}
      <FadeText delay={1.0}>
        <p className="text-sm tracking-[0.15em]" style={{ color: '#555555' }}>
          theoremlabs.io · FinZpire 2026 · Charlotte, NC
        </p>
      </FadeText>
      <FadeText delay={1.4}>
        <p
          className="text-sm mt-2 px-6 py-3 border rounded-full"
          style={{ color: AMBER, borderColor: AMBER, letterSpacing: '0.05em' }}
        >
          → Scan the placard. Get your AI agent. In 60 minutes.
        </p>
      </FadeText>
      {/* Amber hex logo mark */}
      <motion.div
        className="mt-4 flex items-center gap-2 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <svg viewBox="0 0 30 30" className="w-5 h-5">
          <polygon points="15,1 28,8 28,22 15,29 2,22 2,8" fill={AMBER} />
        </svg>
        <span className="text-xs tracking-widest" style={{ color: '#555555' }}>
          THEOREMLABS
        </span>
      </motion.div>
    </div>
  );
}

// ─── Scene renderer ───────────────────────────────────────────────────────────

function renderScene(id: SceneId) {
  switch (id) {
    case 'act1':
      return <Act1Scene />;
    case 'break':
      return <BreakScene />;
    case 'promptline':
      return (
        <ProductScene
          name="PromptLine"
          office="Front Office"
          lines={['Calls answered.', '24/7.  EN + ES.', 'From day one.']}
        />
      );
    case 'tacit':
      return (
        <ProductScene
          name="Tacit"
          office="Back Office"
          lines={['KYC.  KYB.', 'Documents.', 'Reconciled.  Clean.']}
        />
      );
    case 'prahari':
      return (
        <ProductScene
          name="Prahari"
          office="The Sentinel"
          lines={['Every agent.', 'Every transaction.', 'Every regulation.  Watched.']}
          accentColor="#aaaaaa"
        />
      );
    case 'stat1':
      return (
        <StatScene
          number="$6,000"
          context="per agent · per year"
          sub="vs $80K–$200K legacy"
        />
      );
    case 'stat2':
      return (
        <StatScene
          number="2 weeks."
          context="to deploy"
          sub="not 18 months · no IT"
        />
      );
    case 'stat3':
      return (
        <StatScene
          number="85%"
          context="manual effort"
          sub="eliminated · from day one"
        />
      );
    case 'stat4':
      return (
        <StatScene
          number="0 IT."
          context="no resources needed"
          sub="on your side · ever"
        />
      );
    case 'stat5':
      return (
        <StatScene
          number="20+"
          context="regulated FS deployments"
          sub="live in production today"
        />
      );
    case 'cta':
      return <CTAScene />;
  }
}

// ─── Crossfade transition ─────────────────────────────────────────────────────

const sceneVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' as const } },
  exit:  { opacity: 0, transition: { duration: 0.5, ease: 'easeIn'  as const } },
};

// ─── Main loop controller ─────────────────────────────────────────────────────

export default function FinzpirePage() {
  const [sceneIdx, setSceneIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setSceneIdx((prev) => (prev + 1) % SCENES.length);
    }, SCENES[sceneIdx].duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [sceneIdx]);

  // Keyboard: left/right to manually advance (useful for demo review)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setSceneIdx((p) => (p + 1) % SCENES.length);
      if (e.key === 'ArrowLeft')  setSceneIdx((p) => (p - 1 + SCENES.length) % SCENES.length);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const current = SCENES[sceneIdx];

  return (
    <div
      className="fixed inset-0 overflow-hidden select-none cursor-none"
      style={{ backgroundColor: BG, fontFamily: "'Inter', sans-serif" }}
    >
      {/* Act label — top left, very subtle */}
      <div
        className="absolute top-5 left-6 z-50 text-[10px] tracking-[0.2em] uppercase tabular-nums"
        style={{ color: '#333333' }}
      >
        {sceneIdx + 1} / {SCENES.length}
      </div>

      {/* Scene */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          className="absolute inset-0"
          variants={sceneVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          {renderScene(current.id)}
        </motion.div>
      </AnimatePresence>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px z-50" style={{ backgroundColor: '#222222' }}>
        <motion.div
          key={`bar-${sceneIdx}`}
          className="h-full"
          style={{ backgroundColor: AMBER }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: SCENES[sceneIdx].duration / 1000, ease: 'linear' }}
        />
      </div>
    </div>
  );
}
