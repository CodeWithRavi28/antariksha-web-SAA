import React from 'react';
import { Link } from 'react-scroll';
import { FiMail, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Domains', target: 'domains' },
    { name: 'Events', target: 'events' },
    { name: 'Team', target: 'team' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <footer className="bg-[#060b18] border-t border-white/[0.04] text-textMuted font-inter text-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center gap-3 cursor-pointer group w-fit"
          >
            {/* SVG Logo */}
            <svg
              className="w-6 h-6 text-accentBlue"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="1" fill="currentColor" />
              <circle cx="12" cy="4" r="1" fill="currentColor" />
              <circle cx="20" cy="12" r="1" fill="currentColor" />
              <circle cx="4" cy="12" r="1" fill="currentColor" />
              <circle cx="12" cy="20" r="1" fill="currentColor" />
            </svg>
            <span className="font-space font-bold text-base md:text-lg tracking-wider text-textPrimary group-hover:text-accentBlue transition-colors duration-300">
              ANTARIKSHA
            </span>
          </Link>
          <p className="text-xs leading-relaxed max-w-xs">
            Sant Longowal Institute of Engineering and Technology's official astronomy and space science club.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href="mailto:antariksha@sliet.ac.in"
              className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/[0.08] hover:border-accentBlue/60 text-textMuted hover:text-accentSky flex items-center justify-center transition-all duration-300"
              aria-label="Email Address"
            >
              <FiMail className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/sliet_antariksha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/[0.08] hover:border-accentBlue/60 text-textMuted hover:text-accentSky flex items-center justify-center transition-all duration-300"
              aria-label="Instagram Page"
            >
              <FiInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-space font-semibold text-textPrimary uppercase tracking-wider text-xs">
            Quick Links
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {quickLinks.map((link) => (
              <Link
                key={link.target}
                to={link.target}
                smooth={true}
                offset={-80}
                duration={500}
                className="hover:text-accentSky transition-colors duration-200 cursor-pointer py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Info */}
        <div className="flex flex-col gap-4">
          <h4 className="font-space font-semibold text-textPrimary uppercase tracking-wider text-xs">
            Institution
          </h4>
          <p className="text-xs leading-relaxed">
            Sant Longowal Institute of Engineering & Technology (SLIET) <br />
            Longowal, Sangrur, Punjab, India — 148106
          </p>
          <p className="text-xs leading-relaxed">
            Inaugurated August 2026.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.04] py-6 text-center text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 SLIET Antariksha Vigyan Club. All rights reserved.</p>
          <p className="text-[10px] text-white/20 select-none">
            Designed & Developed by Antigravity AI
          </p>
        </div>
      </div>
    </footer>
  );
}
