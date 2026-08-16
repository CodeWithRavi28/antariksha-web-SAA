import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiGlobe, FiArrowUpRight } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { fadeLeft, fadeRight } from '../../utils/motionVariants';
import { facultyHead } from '../../data/team';
import facultyImg from '../../assets/ravi-k-mishra.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-base overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Faculty Advisor Card */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="glass rounded-3xl p-8 md:p-10 border border-borderCustom/25 shadow-cardGlow relative overflow-hidden w-full">
            {/* Top Section: Avatar + Info + Portfolio Button */}
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-36 h-36 rounded-2xl border-2 border-accentBlue/60 ring-2 ring-accentBlue/20 overflow-hidden shadow-btnGlow">
                  <img
                    src={facultyImg}
                    alt="Dr. Ravi Kant Mishra"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Profile Details + Portfolio Button */}
              <div className="flex-1 flex flex-col gap-2.5">
                <h4 className="font-space font-bold text-textPrimary text-2xl md:text-3xl leading-tight">
                  {facultyHead.name}
                </h4>
                <p className="font-inter text-lg text-accentBlue font-semibold">
                  {facultyHead.role}
                </p>
                <p className="font-inter text-sm text-textMuted leading-relaxed">
                  {facultyHead.title}
                </p>

                {/* Visit Portfolio Button - below profile info, right-aligned on larger screens */}
                <a
                  href={facultyHead.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-borderCustom/40 hover:border-accentBlue/60 text-textMuted hover:text-accentSky transition-all duration-300 text-sm font-inter font-medium self-center sm:self-end"
                  aria-label="Visit Portfolio Website"
                >
                  <FiGlobe className="w-4 h-4" />
                  <span>Visit Portfolio</span>
                  <FiArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Biography */}
            <div className="mt-6 pt-6 border-t border-borderCustom/25">
              <p className="font-inter text-sm text-textMuted leading-relaxed text-center sm:text-left">
                Faculty advisor and guiding mentor of Antariksha- the Space Astronomy Association, inspiring students to explore the frontiers of space science and technology. With 25+ years of experience as an educator and researcher in higher education.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - About Details */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-10 lg:pl-8"
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
        </motion.div>
      </div>
    </section>
  );
}
