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

      {/* Radial blue glows */}
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vw] max-w-[850px] max-h-[850px] rounded-full bg-accentBlue/30 blur-[110px] pointer-events-none z-0" />
      {/* Top-left glow */}
      <div className="absolute top-[-12%] left-[-12%] w-[55vw] h-[55vw] max-w-[560px] max-h-[560px] rounded-full bg-accentBlue/35 blur-[100px] pointer-events-none z-0" />
      {/* Bottom-right glow */}
      <div className="absolute bottom-[-14%] right-[-10%] w-[60vw] h-[60vw] max-w-[620px] max-h-[620px] rounded-full bg-accentSky/30 blur-[105px] pointer-events-none z-0" />
      {/* Top-right accent glow */}
      <div className="absolute top-[12%] right-[-8%] w-[35vw] h-[35vw] max-w-[380px] max-h-[380px] rounded-full bg-accentBlue/25 blur-[85px] pointer-events-none z-0" />
      {/* Bottom-left accent glow */}
      <div className="absolute bottom-[8%] left-[-10%] w-[40vw] h-[40vw] max-w-[420px] max-h-[420px] rounded-full bg-accentSky/25 blur-[90px] pointer-events-none z-0" />
      {/* Mid-right glow */}
      <div className="absolute top-[38%] right-[-14%] w-[45vw] h-[45vw] max-w-[460px] max-h-[460px] rounded-full bg-accentBlue/20 blur-[95px] pointer-events-none z-0" />
      {/* Mid-left glow */}
      <div className="absolute bottom-[30%] left-[-16%] w-[42vw] h-[42vw] max-w-[430px] max-h-[430px] rounded-full bg-accentSky/20 blur-[95px] pointer-events-none z-0" />

      {/* Bottom fade - blends the blue glows into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-base via-base/60 to-transparent pointer-events-none z-0" />

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
