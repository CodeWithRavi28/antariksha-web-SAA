import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiArchive, FiClock } from 'react-icons/fi';
import { upcomingEvents, pastEvents } from '../../data/events';
import { fadeUp, scaleIn } from '../../utils/motionVariants';

// Empty State Card Component
const EmptyState = ({ type }) => {
  const isUpcoming = type === 'upcoming';
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      className="glass rounded-2xl p-8 max-w-md mx-auto text-center border-borderCustom/25 shadow-cardGlow flex flex-col items-center gap-4 mt-6"
    >
      <div className="w-16 h-16 rounded-full bg-accentBlue/10 border border-accentBlue/25 flex items-center justify-center text-accentBlue mb-2">
        {isUpcoming ? (
          <FiCalendar className="w-8 h-8 text-accentSky" />
        ) : (
          <FiArchive className="w-8 h-8 text-accentSky" />
        )}
      </div>
      <h3 className="font-space font-semibold text-lg text-textPrimary">
        {isUpcoming ? 'No Upcoming Events' : 'No Past Events'}
      </h3>
      <p className="font-inter text-sm text-textMuted leading-relaxed">
        {isUpcoming
          ? 'We are planning stargazing sessions, webinars, and space challenges. Check back soon or register to stay notified!'
          : 'Club launch events and workshops will appear here after completion.'}
      </p>
    </motion.div>
  );
};

export default function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const eventsList = activeTab === 'upcoming' ? upcomingEvents : pastEvents;
  const hasEvents = eventsList && eventsList.length > 0;

  return (
    <section
      id="events"
      className="relative py-24 bg-base overflow-hidden px-6 border-t border-borderCustom/15"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center flex flex-col gap-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-accentSky">
            Timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-space text-textPrimary">
            Club Events
          </h2>
        </div>

        {/* Custom Tab Switcher */}
        <div className="flex justify-center">
          <div className="flex bg-surface border border-borderCustom p-1.5 rounded-xl">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2 rounded-lg font-inter text-sm font-semibold transition-all duration-300 relative ${
                activeTab === 'upcoming' ? 'text-white' : 'text-textMuted hover:text-textPrimary'
              }`}
            >
              {activeTab === 'upcoming' && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-accentBlue rounded-lg shadow-btnGlow"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">Upcoming</span>
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2 rounded-lg font-inter text-sm font-semibold transition-all duration-300 relative ${
                activeTab === 'past' ? 'text-white' : 'text-textMuted hover:text-textPrimary'
              }`}
            >
              {activeTab === 'past' && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-accentBlue rounded-lg shadow-btnGlow"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">Past</span>
            </button>
          </div>
        </div>

        {/* Events Content Area */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!hasEvents ? (
              <motion.div
                key={`${activeTab}-empty`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <EmptyState type={activeTab} />
              </motion.div>
            ) : (
              <motion.div
                key={`${activeTab}-timeline`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="w-full relative"
              >
                {/* Timeline axis line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accentBlue to-accentSky/30 pointer-events-none hidden md:block" />

                <div className="flex flex-col gap-10">
                  {eventsList.map((event, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <div
                        key={event.id}
                        className={`flex flex-col md:flex-row items-center justify-between w-full relative ${
                          isEven ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        {/* Timeline Node Point (hidden on mobile) */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accentSky border-4 border-base shadow-[0_0_10px_#60a5fa] z-10 hidden md:block" />

                        {/* Card Container */}
                        <div className="w-full md:w-[45%]">
                          <motion.div
                            variants={fadeUp}
                            whileHover={{ scale: 1.02 }}
                            className="bg-surface border border-borderCustom hover:border-accentBlue/30 p-6 rounded-2xl hover:shadow-cardGlow transition-colors duration-300"
                          >
                            <div className="flex items-center gap-2 text-accentSky mb-3 text-xs font-semibold">
                              <FiClock className="w-4.5 h-4.5" />
                              <span>{event.date}</span>
                              <span className="ml-auto uppercase text-[10px] px-2.5 py-0.5 rounded-full bg-accentBlue/20">
                                {event.status}
                              </span>
                            </div>
                            <h3 className="font-space font-semibold text-lg text-textPrimary mb-2">
                              {event.title}
                            </h3>
                            <p className="font-inter text-sm text-textMuted leading-relaxed">
                              {event.description}
                            </p>
                          </motion.div>
                        </div>

                        {/* Spacer for vertical layout (hidden on mobile) */}
                        <div className="w-[45%] hidden md:block" />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
