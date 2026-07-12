import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Skills from './sections/Skills/Skills';
import GithubDashboard from './sections/Github/GithubDashboard';
import Projects from './sections/Projects/Projects';
import Blog from './sections/Blog/Blog';
import Contact from './sections/Contact/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <GithubDashboard />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
