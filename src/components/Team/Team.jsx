import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import MemberCard from './MemberCard';
import { facultyHead, coreTeam } from '../../data/team';
import { fadeUp, scaleIn, staggerContainer } from '../../utils/motionVariants';

export default function Team() {
  const hasTeam = coreTeam && coreTeam.length > 0;

  return (
    <section
      id="team"
      className="relative py-24 bg-[#020617] overflow-hidden px-6 border-t border-white/[0.02]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="text-center flex flex-col gap-3 max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-accentSky">
            The Crew
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-space text-textPrimary">
            Meet the Team
          </h2>
          <p className="font-inter text-sm md:text-base text-textMuted leading-relaxed">
            The minds coordinating observations, research, technology, and outreach projects at SLIET.
          </p>
        </div>

        {/* 1. Faculty Head Section */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center"
        >
          <div className="bg-[#0F172A] border border-[#1E293B] hover:border-accentBlue/30 rounded-2xl p-8 max-w-2xl w-full flex flex-col md:flex-row items-center gap-6 text-center md:text-left hover:shadow-cardGlow transition-colors duration-300">
            {/* Faculty Avatar */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accentBlue via-[#4f46e5] to-accentSky flex items-center justify-center text-white font-space font-bold text-3xl shadow-lg flex-shrink-0">
              FA
            </div>

            {/* Faculty Details */}
            <div className="flex-grow flex flex-col gap-2">
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <h3 className="font-space font-bold text-xl text-textPrimary">
                  {facultyHead.name}
                </h3>
                <span className="text-[10px] font-inter font-semibold uppercase tracking-wider bg-accentBlue/20 text-accentSky px-3 py-1 rounded-full w-fit mx-auto md:mx-0">
                  {facultyHead.role}
                </span>
              </div>
              <p className="font-inter text-sm text-textMuted">{facultyHead.department}</p>
              <p className="font-inter text-xs text-textMuted italic leading-relaxed mt-1">
                Guiding students towards space technology excellence, astrophysics research, and scientific outreach.
              </p>
            </div>

            {/* Social Anchor */}
            {facultyHead.linkedin && facultyHead.linkedin !== '#' && (
              <a
                href={facultyHead.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-accentBlue/60 text-textMuted hover:text-accentSky transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            )}
          </div>
        </motion.div>

        {/* 2. Core Team Section */}
        <div className="flex flex-col gap-8">
          <h3 className="font-space font-bold text-xl text-center text-textPrimary border-b border-white/[0.05] pb-4 max-w-xs mx-auto">
            Core Committee
          </h3>

          {hasTeam ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {coreTeam.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass rounded-2xl p-8 max-w-xl mx-auto text-center border-white/5 shadow-cardGlow flex flex-col items-center gap-4 mt-2"
            >
              <div className="w-12 h-12 rounded-full bg-accentBlue/10 border border-accentBlue/25 flex items-center justify-center text-accentBlue mb-1">
                <FiUsers className="w-6 h-6 text-accentSky" />
              </div>
              <h4 className="font-space font-semibold text-lg text-textPrimary">
                Recruitments Opening Soon
              </h4>
              <p className="font-inter text-sm text-textMuted leading-relaxed">
                We are searching for passionate student coordinators, telescope observers, space tech programmers, and designers. Core committee recruitment drives will commence shortly after the official inauguration ceremony.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
