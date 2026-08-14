import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Domains from './components/Domains/Domains';
import Events from './components/Events/Events';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main role="main">
        <Hero />
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
