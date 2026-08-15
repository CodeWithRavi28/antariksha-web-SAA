import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import StarField from './StarField';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';
import { FiChevronDown } from 'react-icons/fi';

export default function Hero({ theme = 'night' }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-base overflow-hidden px-6 pt-16"
    >
      {/* Starfield background */}
      <StarField theme={theme} />

      {/* Radial blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-accentBlue/15 blur-[120px] pointer-events-none z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Eyebrow label */}
          <motion.p
            variants={fadeUp}
            className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-accentSky"
          >
            SLIET &bull; INAUGURATED 2026
          </motion.p>

          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-7xl font-bold font-space text-textPrimary leading-none select-none tracking-tight"
          >
            SLIET Antariksha <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue via-[#82b1ff] to-accentSky">
              Vigyan Club
            </span>
          </motion.h1>

          {/* Staggered Taglines */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-col gap-2 font-inter text-base md:text-xl text-textMuted max-w-2xl mt-2"
          >
            <motion.p variants={fadeUp}>Exploring the Universe.</motion.p>
            <motion.p variants={fadeUp}>Inspiring Curiosity.</motion.p>
            <motion.p variants={fadeUp}>Building the Future.</motion.p>
          </motion.div>

          {/* Actions */}
          <motion.div
            variants={fadeUp}
            className="flex flex-row items-center gap-4 mt-8"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeLToDk1eTq2XZtSyEvlM4N-eGyLYFvqdh0fF8AqOepTIrIyQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-inter font-semibold text-sm bg-accentBlue hover:bg-blue-500 text-white transition-glow hover:shadow-btnGlow cursor-pointer"
            >
              Join Club
            </a>
            <Link
              to="about"
              smooth={true}
              offset={-80}
              duration={500}
              className="px-6 py-3 rounded-lg font-inter font-semibold text-sm border border-borderCustom/60 hover:border-accentBlue/60 text-textPrimary hover:text-accentSky transition-glow cursor-pointer"
            >
              About Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <Link
          to="about"
          smooth={true}
          offset={-80}
          duration={500}
          className="cursor-pointer text-textMuted hover:text-textPrimary transition-colors duration-300"
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-[10px] tracking-widest uppercase">Scroll</span>
            <FiChevronDown className="w-5 h-5 text-accentBlue" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
