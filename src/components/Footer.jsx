import React from 'react';
import { ArrowUp, Mail, Heart, Triangle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-inner">
        
        {/* Top Tier */}
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <div className="footer-brand-logo">
              <span className="footer-logo-box">AA</span>
              <span className="footer-brand-name">Abid Hasan Anik</span>
            </div>
            <p className="footer-tagline">
              Software Engineer & Backend Systems Architect. Building distributed microservices, event-driven pipelines, and high-performance reactive applications.
            </p>
          </div>

          <div className="footer-links-col">
            <span className="footer-col-title">Quick Navigation</span>
            <div className="footer-nav-list">
              <a href="#hero">Top Overview</a>
              <a href="#skills">Competencies</a>
              <a href="#projects">Featured Projects</a>
              <a href="#architecture">System Architecture</a>
              <a href="#experience">Career Timeline</a>
              <a href="#contact">Contact & Inquiry</a>
            </div>
          </div>

          <div className="footer-connect-col">
            <span className="footer-col-title">Connect & Deploy</span>
            <div className="footer-social-strip">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="footer-social-btn" 
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Vercel Badge */}
            <div className="footer-vercel-badge">
              <Triangle size={14} className="vercel-triangle" />
              <span>Engineered for Vercel Edge Hosting</span>
            </div>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Abid Hasan Anik. All Rights Reserved. Built with React 19, Vite, and Signature Design Tokens.
          </p>

          <button 
            type="button" 
            className="footer-top-btn" 
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
}
