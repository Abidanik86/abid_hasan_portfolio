import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TelemetryBar from './components/TelemetryBar';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ArchitectureSpotlight from './components/ArchitectureSpotlight';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* Ambient background light orbs */}
      <div className="ambient-glow" style={{ top: '5%', left: '5%', width: '450px', height: '450px', background: 'rgba(6, 182, 212, 0.12)' }}></div>
      <div className="ambient-glow" style={{ top: '25%', right: '5%', width: '500px', height: '500px', background: 'rgba(16, 185, 129, 0.1)' }}></div>
      <div className="ambient-glow" style={{ top: '60%', left: '10%', width: '400px', height: '400px', background: 'rgba(139, 92, 246, 0.09)' }}></div>
      <div className="ambient-glow" style={{ top: '85%', right: '15%', width: '450px', height: '450px', background: 'rgba(6, 182, 212, 0.1)' }}></div>

      {/* Floating Header with Theme Toggle */}
      <Navbar 
        onOpenContact={handleOpenContact} 
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Page Layout */}
      <main id="main-content">
        <Hero />
        <TelemetryBar />
        <AboutSection />
        <SkillsSection />
        <ArchitectureSpotlight />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
