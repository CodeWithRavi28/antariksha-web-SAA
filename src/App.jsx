import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Domains from './components/Domains/Domains';
import Events from './components/Events/Events';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const THEME_KEY = 'antariksha-theme';

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY) || 'night';
    } catch {
      return 'night';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('theme-light', theme === 'light');
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // localStorage unavailable — theme just won't persist
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'night' ? 'light' : 'night'));

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main role="main">
        <Hero theme={theme} />
        <About />
        <Domains />
        <Events />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
