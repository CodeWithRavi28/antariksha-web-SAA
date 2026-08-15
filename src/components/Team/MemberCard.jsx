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
    <div className="bg-surface border border-borderCustom hover:border-accentBlue/30 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-cardGlow hover:-translate-y-1 transition-all duration-300">
      {/* Avatar: photo if available, otherwise initials gradient */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accentBlue to-accentSky flex items-center justify-center text-white font-space font-bold text-2xl mb-4 shadow-lg select-none overflow-hidden">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          getInitials(member.name)
        )}
      </div>

      {/* Info */}
      <h3 className="font-space font-semibold text-base text-textPrimary mb-1">
        {member.name}
      </h3>
      <p className="font-inter text-xs text-accentSky font-medium uppercase tracking-wide mb-1">
        {member.role}
      </p>
      {member.passYear && (
        <p className="font-inter text-[11px] text-textMuted mb-4">
          Ph.D. · {member.passYear}
        </p>
      )}

      {/* Socials */}
      {member.linkedin && member.linkedin !== '#' && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full border border-borderCustom/40 flex items-center justify-center hover:border-accentBlue/60 text-textMuted hover:text-accentSky transition-colors duration-200"
          aria-label={`${member.name}'s LinkedIn Profile`}
        >
          <FaLinkedin className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}
