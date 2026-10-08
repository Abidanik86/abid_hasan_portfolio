import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar({ onOpenContact, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClick = () => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
    if (onOpenContact) onOpenContact();
    else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Logo & Name */}
        <a href="#hero" className="brand-logo" onClick={navClick}>
          <div className="brand-logo-mark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="brand-logo-svg">
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
          {/* Dark / Light Theme Mode Toggle Button (Visible on all screens) */}
          <button 
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            title={theme === 'dark' ? "Switch to Clean White Mode" : "Switch to Obsidian Dark Mode"}
            aria-label="Toggle dark and white theme mode"
          >
            {theme === 'dark' ? <Sun size={18} className="theme-icon sun" /> : <Moon size={18} className="theme-icon moon" />}
          </button>

          {/* Social Links (Hidden on small mobile, visible in drawer and on desktop) */}
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-icon-link desktop-only-action"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-icon-link desktop-only-action"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>

          {/* Connect CTA Button (Desktop) */}
          <button 
            type="button" 
            className="btn btn-sm btn-emerald nav-hire-btn desktop-only-action"
            onClick={handleContactClick}
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
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="container mobile-drawer-container">
          <div className="mobile-nav-drawer glass-panel">
            <nav className="mobile-nav-links">
              <a href="#about" className="mobile-nav-link" onClick={navClick}>About</a>
              <a href="#skills" className="mobile-nav-link" onClick={navClick}>Competencies</a>
              <a href="#projects" className="mobile-nav-link" onClick={navClick}>Featured Projects</a>
              <a href="#architecture" className="mobile-nav-link" onClick={navClick}>System Architecture</a>
              <a href="#experience" className="mobile-nav-link" onClick={navClick}>Experience & Education</a>
              <a href="#contact" className="mobile-nav-link" onClick={navClick}>Contact & Inquiry</a>
            </nav>

            <div className="mobile-drawer-footer">
              <button 
                type="button" 
                className="btn btn-emerald mobile-drawer-contact-btn"
                onClick={handleContactClick}
              >
                <Mail size={16} />
                <span>Get in Touch</span>
              </button>

              <div className="mobile-drawer-socials">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mobile-social-chip"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                  <ExternalLink size={12} className="mobile-chip-arrow" />
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mobile-social-chip"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} className="mobile-chip-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
