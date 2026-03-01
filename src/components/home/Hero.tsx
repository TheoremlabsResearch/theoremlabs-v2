'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CTAButton } from '@/components/shared/CTAButton';


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const floatVariants = {
  initial: { y: 0, opacity: 0.85 },
  animate: {
    y: [-10, 10, -10],
    opacity: [0.85, 1, 0.85],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/The%20New%20Software%20Era.png"
          alt="The New Software Era"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1B2D]/80 to-[#0F1B2D]/60" />

      {/* Floating decorative icon — top-right corner */}
      <motion.div
        className="absolute top-24 right-6 sm:right-12 md:right-20 lg:right-32 z-10 pointer-events-none select-none"
        variants={floatVariants}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/images/hero-icon.png"
          alt=""
          width={96}
          height={96}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 opacity-70"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full py-20 px-4 md:px-8 lg:px-16">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#F97316] mb-6">
              <span className="w-6 h-px bg-[#F97316]" />
              AI&nbsp;&middot;&nbsp;Fintech&nbsp;&middot;&nbsp;Innovation
              <span className="w-6 h-px bg-[#F97316]" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold text-[#F8FAFC] tracking-tight leading-[1.05] mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            The new software era
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mb-10"
          >
            Theoremlabs is a hybrid of management consulting, build &amp;
            experimentation labs for Fintech products that apply advances in
            AI, Data, Cloud and mature Web 3 technologies.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <CTAButton href="/engage/contact" variant="primary">
              Let&apos;s Talk
            </CTAButton>
            <CTAButton href="/about/our-team" variant="secondary">
              Explore Our Work
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle bottom fade into page background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F1B2D] to-transparent pointer-events-none" />
    </section>
  );
}
