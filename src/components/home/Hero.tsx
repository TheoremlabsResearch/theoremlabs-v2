'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CTAButton } from '@/components/shared/CTAButton';


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
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
          sizes="100vw"
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60" />

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
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-6">
              <span className="w-6 h-px bg-primary" />
              AI&nbsp;&middot;&nbsp;Fintech&nbsp;&middot;&nbsp;Innovation
              <span className="w-6 h-px bg-primary" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-2xl font-bold text-foreground tracking-tight leading-[1.05] mb-6 sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            The new software era
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10"
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
