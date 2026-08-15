import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiInstagram, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { fadeLeft, fadeRight } from '../../utils/motionVariants';

export default function Contact() {
  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email Us',
      value: 'antariksha@sliet.ac.in',
      href: 'mailto:antariksha@sliet.ac.in',
    },
    {
      icon: FiInstagram,
      label: 'Follow Instagram',
      value: '@sliet_antariksha',
      href: 'https://instagram.com/sliet_antariksha',
    },
    {
      icon: FiMapPin,
      label: 'Club Headquarters',
      value: 'SLIET, Longowal, Sangrur, Punjab — 148106',
      href: 'https://maps.app.goo.gl/wKxDRoK6aUpk46i49',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-base overflow-hidden px-6 border-t border-borderCustom/15"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="text-center flex flex-col gap-3 max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-accentSky">
            Get Involved
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-space text-textPrimary leading-tight">
            Interested in Space?
            <br className="sm:hidden" /> Join Us!
          </h2>
          <p className="font-inter text-sm md:text-base text-textMuted leading-relaxed">
            Take the first step towards exploring the cosmos. Join our student community and build the future of space exploration together.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: CTA */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-space font-semibold text-xl text-textPrimary">
              Become a Member
            </h3>
            <p className="font-inter text-sm text-textMuted leading-relaxed max-w-lg">
              Register using our induction Google Form to receive notifications about stargazing events, workshops, satellite projects, and recruitment drives.
            </p>

            {/* Google Form Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeLToDk1eTq2XZtSyEvlM4N-eGyLYFvqdh0fF8AqOepTIrIyQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accentBlue hover:bg-blue-500 text-white font-inter font-semibold text-base px-8 py-4 rounded-xl transition-glow hover:shadow-btnGlow w-fit mt-2 group"
            >
              Join the Club
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Right Column: Contact Details */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-surface border border-borderCustom lg:border-0 rounded-2xl p-8 flex flex-col gap-6 shadow-cardGlow">
              {contactInfo.map((info, idx) => {
                const IconComponent = info.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-borderCustom/20 border border-borderCustom/30 flex items-center justify-center text-accentSky flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-inter text-[10px] text-textMuted uppercase tracking-wider font-semibold">
                        {info.label}
                      </span>
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-inter text-sm text-textPrimary hover:text-accentSky transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
