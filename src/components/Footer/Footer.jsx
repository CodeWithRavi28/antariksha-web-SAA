import React from 'react';
import { Link } from 'react-scroll';
import { FiMail, FiInstagram, FiMapPin } from 'react-icons/fi';

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
    <footer className="bg-base border-t border-borderCustom/20 text-textMuted font-inter text-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section: brand left, social + contact right (stacked on mobile) */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xl">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              {/* SVG Logo */}
              <svg
                className="w-8 h-8 text-accentBlue"
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
                <circle cx="17.65" cy="6.35" r="1" fill="currentColor" />
                <circle cx="6.35" cy="17.65" r="1" fill="currentColor" />
                <circle cx="17.65" cy="17.65" r="1" fill="currentColor" />
                <circle cx="6.35" cy="6.35" r="1" fill="currentColor" />
                <path d="M12 2a10 10 0 1 0 10 10" strokeDasharray="3 3" opacity="0.3" />
                <path d="M8 12h8M12 8v8" strokeWidth="1.5" opacity="0.5" />
              </svg>
              <span className="font-space font-bold text-base md:text-lg tracking-wider text-textPrimary group-hover:text-accentBlue transition-colors duration-300">
                ANTARIKSHA VIGYAN CLUB
              </span>
            </Link>
            <p className="text-xs leading-relaxed">
              Sant Longowal Institute of Engineering and Technology's official <br/>
               astronomy and space science club.
            </p>
          </div>

          {/* Social + Contact */}
          <div className="flex flex-col gap-6 lg:items-end">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:antariksha@sliet.ac.in"
                className="w-9 h-9 rounded-lg bg-borderCustom/20 border border-borderCustom/30 hover:border-accentBlue/60 text-textMuted hover:text-accentSky flex items-center justify-center transition-all duration-300"
                aria-label="Email Address"
              >
                <FiMail className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/sliet_antariksha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-borderCustom/20 border border-borderCustom/30 hover:border-accentBlue/60 text-textMuted hover:text-accentSky flex items-center justify-center transition-all duration-300"
                aria-label="Instagram Page"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-3 lg:items-end text-left">
              <p className="flex items-start gap-2 text-xs leading-relaxed">
                <FiMapPin className="w-4 h-4 text-accentSky flex-shrink-0 mt-0.5" />
                <span>
                  SLIET, Longowal, Sangrur, Punjab — 148106
                </span>
              </p>
              <a
                href="mailto:antariksha@sliet.ac.in"
                className="flex items-center gap-2 text-xs hover:text-accentSky transition-colors duration-200"
              >
                <FiMail className="w-4 h-4 text-accentSky flex-shrink-0" />
                antariksha@sliet.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: copyright + quick links */}
      <div className="border-t border-borderCustom/20 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-between gap-4 text-center text-left ">
          <p className="text-xs">
            © 2026 SLIET Antariksha Vigyan Club. All rights reserved.
          </p>
          {/* <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2 text-xs">
            {quickLinks.map((link) => (
              <Link
                key={link.target}
                to={link.target}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-textMuted hover:text-accentSky transition-colors duration-200 cursor-pointer py-1"
              >
                {link.name}
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
