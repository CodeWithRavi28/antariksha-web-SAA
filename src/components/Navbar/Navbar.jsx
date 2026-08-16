import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import useScrolled from '../../hooks/useScrolled';

// SVG Star Cluster / Telescope Logo
const LogoIcon = () => (
  <svg
    className="w-8 h-8 text-accentBlue"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
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
);

export default function Navbar({ theme = 'night', onToggleTheme }) {
  const scrolled = useScrolled();
  const [isOpen, setIsOpen] = useState(false);

  const isNight = theme === 'night';
  const ThemeIcon = isNight ? HiSun : HiMoon;
  const themeLabel = isNight ? 'Day' : 'Night';

  const navItems = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Domains', target: 'domains' },
    { name: 'Events', target: 'events' },
    { name: 'Team', target: 'team' },
    { name: 'Contact', target: 'contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <LogoIcon />
          <span className="font-space font-bold text-lg md:text-xl tracking-wider text-textPrimary group-hover:text-accentBlue transition-colors duration-300">
            ANTARIKSHA
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-accentSky border-b-2 border-accentBlue pb-1"
              className="font-inter font-medium text-sm text-textMuted hover:text-textPrimary transition-colors duration-200 cursor-pointer pb-1"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Theme Toggle + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${themeLabel.toLowerCase()} theme`}
            title={`Switch to ${themeLabel.toLowerCase()} theme`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-borderCustom/40 hover:border-accentBlue/60 text-textMuted hover:text-textPrimary font-inter font-medium text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer"
          >
            <ThemeIcon className="w-4 h-4 text-accentSky" />
            {themeLabel}
          </button>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeLToDk1eTq2XZtSyEvlM4N-eGyLYFvqdh0fF8AqOepTIrIyQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accentBlue hover:bg-blue-500 text-white font-inter font-semibold text-sm px-5 py-2.5 rounded-lg transition-glow hover:shadow-btnGlow cursor-pointer"
          >
            Join Club
          </a>
        </div>

        {/* Mobile right-side cluster: theme toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${themeLabel.toLowerCase()} theme`}
            title={`Switch to ${themeLabel.toLowerCase()} theme`}
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-borderCustom/40 hover:border-accentBlue/60 text-textMuted hover:text-textPrimary transition-colors duration-200 cursor-pointer"
          >
            <ThemeIcon className="w-4 h-4 text-accentSky" />
          </button>
          <button
            onClick={toggleMenu}
            className="text-textPrimary hover:text-accentBlue p-2 focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden w-full bg-base/95 border-b border-borderCustom/40 backdrop-blur-lg overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.target}
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClass="text-accentSky"
                  onClick={closeMenu}
                  className="font-inter font-medium text-base text-textMuted hover:text-textPrimary transition-colors duration-200 cursor-pointer py-1"
                >
                  {item.name}
                </Link>
              ))}
              
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeLToDk1eTq2XZtSyEvlM4N-eGyLYFvqdh0fF8AqOepTIrIyQ/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex items-center justify-center bg-accentBlue hover:bg-blue-500 text-white font-inter font-semibold text-base py-3 rounded-lg transition-glow hover:shadow-btnGlow cursor-pointer mt-2"
              >
                Join Club
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
