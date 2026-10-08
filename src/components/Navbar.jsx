import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Menu, 
  X, 
  Sun,
  Moon,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar({ onOpenContact, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClick = () => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Logo & Name on One Line */}
        <a href="#hero" className="brand-logo" onClick={navClick}>
          <div className="brand-logo-mark">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="brand-logo-svg">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <div className="brand-identity-row">
            <span className="brand-full-name">Abid Hasan Anik</span>
            <span className="brand-separator">/</span>
            <span className="brand-role-tag">Software Engineer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <a href="#about" className="nav-link" onClick={navClick}>About</a>
          <a href="#skills" className="nav-link" onClick={navClick}>Competencies</a>
          <a href="#projects" className="nav-link" onClick={navClick}>Projects</a>
          <a href="#architecture" className="nav-link" onClick={navClick}>
            <Sparkles size={14} className="nav-icon-highlight" />
            <span>Architecture</span>
          </a>
          <a href="#experience" className="nav-link" onClick={navClick}>Experience</a>
          <a href="#contact" className="nav-link" onClick={navClick}>Contact</a>
        </nav>

        {/* Right Action Buttons */}
        <div className="nav-actions">
          {/* Dark / Light Theme Mode Toggle Button */}
          <button 
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            title={theme === 'dark' ? "Switch to Clean White Mode" : "Switch to Obsidian Dark Mode"}
            aria-label="Toggle dark and white theme mode"
          >
            {theme === 'dark' ? <Sun size={18} className="theme-icon sun" /> : <Moon size={18} className="theme-icon moon" />}
          </button>

          {/* Social Links */}
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-icon-link"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-icon-link"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>

          {/* Connect CTA */}
          <button 
            type="button" 
            className="btn btn-sm btn-emerald nav-hire-btn"
            onClick={() => {
              if (onOpenContact) onOpenContact();
              else {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Mail size={15} />
            <span>Get in Touch</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button 
            type="button" 
            className="mobile-hamburger-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer glass-panel">
          <nav className="mobile-nav-links">
            <a href="#about" className="mobile-nav-link" onClick={navClick}>About</a>
            <a href="#skills" className="mobile-nav-link" onClick={navClick}>Competencies</a>
            <a href="#projects" className="mobile-nav-link" onClick={navClick}>Featured Projects</a>
            <a href="#architecture" className="mobile-nav-link" onClick={navClick}>System Architecture</a>
            <a href="#experience" className="mobile-nav-link" onClick={navClick}>Experience & Education</a>
            <a href="#contact" className="mobile-nav-link" onClick={navClick}>Contact Me</a>
          </nav>
          <div className="mobile-drawer-actions">
            <button
              type="button"
              className="btn btn-glass"
              onClick={onToggleTheme}
              style={{ width: '100%' }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              <span>{theme === 'dark' ? 'Switch to White Mode' : 'Switch to Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
