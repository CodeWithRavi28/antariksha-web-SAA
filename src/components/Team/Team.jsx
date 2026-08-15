import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { IoRocketOutline } from 'react-icons/io5';
import MemberCard from './MemberCard';
import { facultyHead, coreTeam } from '../../data/team';
import { scaleIn, staggerContainer } from '../../utils/motionVariants';
import facultyImg from '../../assets/ravi-k-mishra.jpg';

const teamTabs = [
  { id: 'faculty', label: 'Faculty Head' },
  { id: 'core', label: 'Core Team' },
  { id: 'domain', label: 'Domain Team' },
];

export default function Team() {
  const [activeTab, setActiveTab] = useState('faculty');

  return (
    <section
      id="team"
      className="relative py-24 bg-base overflow-hidden px-6 border-t border-borderCustom/15"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
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

        {/* Tab Switcher: Faculty Head | Core Team | Domain Team */}
        <div className="flex justify-center">
          <div className="flex bg-surface border border-borderCustom p-1.5 rounded-xl">
            {teamTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 md:px-6 py-2 rounded-lg font-inter text-sm font-semibold transition-all duration-300 relative ${
                  activeTab === tab.id ? 'text-white' : 'text-textMuted hover:text-textPrimary'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="teamTabGlow"
                    className="absolute inset-0 bg-accentBlue rounded-lg shadow-btnGlow"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {/* Faculty Head */}
            {activeTab === 'faculty' && (
              <motion.div
                key="faculty-head"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex justify-center"
                >
                  <div className="bg-surface border border-borderCustom hover:border-accentBlue/30 rounded-2xl p-6 md:p-8 max-w-4xl w-full hover:shadow-cardGlow transition-colors duration-300">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                      {/* Avatar */}
                      <div className="relative flex-shrink-0 mx-auto md:mx-0">
                        <div className="w-32 h-32 md:w-36 md:h-36 rounded-xl border-2 border-accentBlue/60 ring-2 ring-accentBlue/20 overflow-hidden shadow-btnGlow">
                          <img
                            src={facultyImg}
                            alt="Dr. Ravi Kant Mishra"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>

                      {/* Details */}
                      <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                        <div className="flex flex-col gap-1">
                          <h3 className="font-space font-bold text-xl md:text-2xl text-textPrimary">
                            {facultyHead.name}
                          </h3>
                          <p className="font-inter text-sm text-accentSky font-semibold">
                            Faculty Head & Club Mentor
                          </p>
                          <p className="font-inter text-sm text-textMuted">
                            {facultyHead.title}
                          </p>
                        </div>

                        {/* Area of Expertise */}
                        <div className="flex flex-col gap-2 items-center md:items-start">
                          <p className="font-inter text-[11px] uppercase tracking-widest text-textMuted font-semibold">
                            Area of Expertise
                          </p>
                          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {facultyHead.expertise.map((item) => (
                              <span
                                key={item}
                                className="px-3 py-1 rounded-full border border-borderCustom/50 text-xs font-inter font-medium text-textPrimary"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Current Area of Interest (hidden on phone) */}
                        <div className="hidden md:flex flex-col gap-2 items-start">
                          <p className="font-inter text-[11px] uppercase tracking-widest text-textMuted font-semibold">
                            Current Area of Interest
                          </p>
                          <p className="inline-flex items-center gap-2 font-inter text-sm text-textPrimary">
                            <IoRocketOutline className="w-4 h-4 text-accentSky flex-shrink-0" />
                            {facultyHead.interests.join(', ')}
                          </p>
                        </div>
                      </div>

                      {/* LinkedIn (only if a real profile is set) */}
                      {facultyHead.linkedin && facultyHead.linkedin !== '#' && (
                        <div className="flex-shrink-0 mx-auto md:mx-0">
                          <a
                            href={facultyHead.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-borderCustom/40 flex items-center justify-center hover:border-accentBlue/60 text-textMuted hover:text-accentSky transition-colors duration-200"
                            aria-label="LinkedIn Profile"
                          >
                            <FaLinkedin className="w-5 h-5" />
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Bio */}
                    <p className="font-inter text-sm text-textMuted leading-relaxed mt-6 pt-6 border-t border-borderCustom/30 text-center md:text-left">
                      {facultyHead.bio}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Core Team */}
            {activeTab === 'core' && (
              <motion.div
                key="core-team"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
            )}

            {/* Domain Team */}
            {activeTab === 'domain' && (
              <motion.div
                key="domain-team"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  className="glass rounded-2xl p-8 max-w-xl mx-auto text-center border-borderCustom/25 shadow-cardGlow flex flex-col items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-accentBlue/10 border border-accentBlue/25 flex items-center justify-center text-accentBlue mb-1">
                    <FiUsers className="w-6 h-6 text-accentSky" />
                  </div>
                  <h4 className="font-space font-semibold text-lg text-textPrimary">
                    Domain Team Recruitments Opening Soon
                  </h4>
                  <p className="font-inter text-sm text-textMuted leading-relaxed">
                    We are recruiting soon! Dedicated domain leads for Astrophysics & Space Science, Space Technology & Computing, Satellites & Electronics, and Astrophotography & Outreach will be announced after the official inauguration ceremony.
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
