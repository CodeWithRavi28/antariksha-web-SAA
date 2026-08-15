import React from 'react';
import { motion } from 'framer-motion';
import { TbTelescope } from 'react-icons/tb';
import { IoPlanetOutline } from 'react-icons/io5';
import { VscCode } from 'react-icons/vsc';
import { MdSatelliteAlt } from 'react-icons/md';
import { BsCameraFill } from 'react-icons/bs';

// Map icon string names to React Icons components
const iconMap = {
  FaTelescope: TbTelescope,
  IoPlanetOutline: IoPlanetOutline,
  VscCode: VscCode,
  MdSatelliteAlt: MdSatelliteAlt,
  BsCameraFill: BsCameraFill
};

export default function DomainCard({ domain, variants }) {
  const IconComponent = iconMap[domain.icon] || FaTelescope;

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="bg-surface border border-borderCustom hover:border-accentBlue/40 rounded-2xl p-6 flex flex-col gap-5 hover:shadow-cardGlow transition-colors duration-300"
    >
      {/* Icon Wrapper (Glass Circle) */}
      <div className="w-16 h-16 rounded-full bg-borderCustom/20 border border-borderCustom/30 backdrop-blur-md flex items-center justify-center text-accentBlue shadow-inner">
        <IconComponent className="w-8 h-8 text-accentBlue" />
      </div>

      {/* Text Info */}
      <div className="flex flex-col gap-2">
        <h3 className="font-space font-semibold text-lg md:text-xl text-textPrimary">
          {domain.title}
        </h3>
        <p className="font-inter text-sm text-textMuted leading-relaxed">
          {domain.description}
        </p>
      </div>
    </motion.div>
  );
}
