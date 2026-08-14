import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

export default function MemberCard({ member }) {
  // Get initials from name
  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="bg-[#0F172A] border border-[#1E293B] hover:border-accentBlue/30 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-cardGlow hover:-translate-y-1 transition-all duration-300">
      {/* Initials Gradient Avatar */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accentBlue to-accentSky flex items-center justify-center text-white font-space font-bold text-2xl mb-4 shadow-lg select-none">
        {getInitials(member.name)}
      </div>

      {/* Info */}
      <h3 className="font-space font-semibold text-base text-textPrimary mb-1">
        {member.name}
      </h3>
      <p className="font-inter text-xs text-accentSky font-medium uppercase tracking-wide mb-4">
        {member.role}
      </p>

      {/* Socials */}
      {member.linkedin && member.linkedin !== '#' && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-accentBlue/60 text-textMuted hover:text-accentSky transition-colors duration-200"
          aria-label={`${member.name}'s LinkedIn Profile`}
        >
          <FaLinkedin className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}
