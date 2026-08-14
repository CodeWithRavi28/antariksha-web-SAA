import React from 'react';
import { motion } from 'framer-motion';
import DomainCard from './DomainCard';
import { domains } from '../../data/domains';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';

export default function Domains() {
  return (
    <section
      id="domains"
      className="relative py-24 bg-[#020617] overflow-hidden px-6 border-t border-white/[0.02]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="text-center flex flex-col gap-3 max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-accentSky">
            Our Fields
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-space text-textPrimary leading-tight">
            Domains of Exploration
          </h2>
          <p className="font-inter text-sm md:text-base text-textMuted leading-relaxed">
            Five pillars of discovery, research, outreach, and technological advancement designed to expand our cosmic horizons.
          </p>
        </div>

        {/* Responsive Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {domains.map((domain) => (
            <DomainCard key={domain.id} domain={domain} variants={fadeUp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
