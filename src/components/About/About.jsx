import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiExternalLink } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { fadeLeft, fadeRight } from '../../utils/motionVariants';
import { facultyHead } from '../../data/team';
import facultyImg from '../../assets/ravi-k-mishra.jpg';

// Interactive/Animated SVG Orbit Illustration
const OrbitIllustration = () => (
  <div className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center">
    {/* Glow Background */}
    <div className="absolute inset-0 rounded-full bg-accentBlue/10 blur-3xl pointer-events-none" />

    {/* Outer Orbit */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      className="absolute w-[90%] h-[90%] rounded-full border border-borderCustom/45 border-dashed flex items-center justify-center"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accentBlue/60 shadow-[0_0_12px_#3b82f6]" />
    </motion.div>

    {/* Middle Orbit */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className="absolute w-[70%] h-[70%] rounded-full border border-borderCustom/55 flex items-center justify-center"
    >
      <div className="absolute bottom-0 right-1/4 w-2 h-2 rounded-full bg-accentSky/80 shadow-[0_0_8px_#60a5fa]" />
    </motion.div>

    {/* Inner Orbit */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      className="absolute w-[50%] h-[50%] rounded-full border border-borderCustom/65 border-double flex items-center justify-center"
    >
      <div className="absolute top-1/4 right-0 w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
    </motion.div>

    {/* Center Glowing Sun */}
    <div className="relative z-10 flex items-center justify-center w-24 h-24">
      {/* Outermost ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-28 h-28 rounded-full"
        style={{ background: 'radial-gradient(circle, #fde68a55 0%, transparent 70%)' }}
      />
      {/* Mid glow halo */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-20 h-20 rounded-full"
        style={{ background: 'radial-gradient(circle, #fbbf2480 0%, #f59e0b33 50%, transparent 75%)' }}
      />


      {/* Inner glow ring */}
      <div
        className="absolute w-12 h-12 rounded-full"
        style={{ background: 'radial-gradient(circle, #fde68a 0%, #f59e0b 45%, #d97706 100%)', boxShadow: '0 0 18px 6px #fbbf24aa, 0 0 40px 10px #f59e0b55' }}
      />
      {/* Core bright disc */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-8 h-8 rounded-full"
        style={{ background: 'radial-gradient(circle, #fffbeb 0%, #fde68a 40%, #fbbf24 100%)', boxShadow: '0 0 12px 4px #fde68a, 0 0 28px 8px #fbbf24bb' }}
      />
    </div>
  </div>
);

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-base overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Visual Illustration */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center"
        >
          <OrbitIllustration />
        </motion.div>

        {/* Right Column - Text Content */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-accentSky">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-space text-textPrimary leading-tight">
              Who We Are
            </h2>
          </div>

          <p className="text-textMuted font-inter text-base leading-relaxed">
            The SLIET Antariksha Vigyan Club is a premier astronomy and space science community dedicated to fostering space technology research and sky observation. Founded at Sant Longowal Institute of Engineering and Technology, our mission is to empower students to build satellite projects, engage in observational astrophysics, and run outreach programs to connect everyone with the cosmos.
          </p>

          {/* Vision & Mission blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
            {/* Vision */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accentBlue/10 flex items-center justify-center border border-accentBlue/20 text-accentBlue">
                <FiEye className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-space font-semibold text-textPrimary text-base">Vision</h3>
                <p className="font-inter text-xs text-textMuted leading-relaxed">
                  To become a leading student space tech hub contributing to real-world research.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accentSky/10 flex items-center justify-center border border-accentSky/20 text-accentSky">
                <FiTarget className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-space font-semibold text-textPrimary text-base">Mission</h3>
                <p className="font-inter text-xs text-textMuted leading-relaxed">
                  Provide resources for hands-on orbital simulation, telescope build, and cosmic study.
                </p>
              </div>
            </div>
          </div>

          {/* Faculty Advisor Card */}
          <div className="glass rounded-2xl p-8 mt-4 border border-borderCustom/25 shadow-cardGlow relative overflow-hidden">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start justify-between pl-4">
              {/* Left: Avatar + Info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-28 h-28 rounded-xl border-2 border-accentBlue/60 ring-2 ring-accentBlue/20 overflow-hidden shadow-btnGlow">
                    <img
                      src={facultyImg}
                      alt="Dr. Ravi Kant Mishra"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Text Info */}
                <div className="flex flex-col gap-2 mt-3 sm:mt-0">
                  <h4 className="font-space font-bold text-textPrimary text-xl leading-tight">
                    Dr. Ravi Kant Mishra
                  </h4>
                  <p className="font-inter text-sm text-accentSky font-medium">
                    Faculty Head & Club Mentor
                  </p>
                  <p className="font-inter text-xs text-textMuted leading-relaxed max-w-sm mt-1">
                    Faculty advisor and guiding mentor of Antariksha — the Space Astronomy Association, inspiring students to explore the frontiers of space science and technology.
                  </p>
                </div>
              </div>

              {/* Right: Portfolio + LinkedIn Buttons */}
              <div className="flex-shrink-0 flex flex-col sm:flex-row items-center sm:items-start gap-3 mt-2 sm:mt-1">
                <a
                  href={facultyHead.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-borderCustom/40 hover:border-accentBlue/60 text-textMuted hover:text-accentSky transition-colors duration-300 text-xs font-inter font-medium"
                  aria-label="Portfolio Website"
                >
                  <FiExternalLink className="w-4 h-4" />
                  Portfolio
                </a>
                {facultyHead.linkedin && facultyHead.linkedin !== '#' && (
                  <a
                    href={facultyHead.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-borderCustom/40 hover:border-accentBlue/60 text-textMuted hover:text-accentSky transition-colors duration-300 text-xs font-inter font-medium"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
