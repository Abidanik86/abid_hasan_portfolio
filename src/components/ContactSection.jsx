import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  MapPin, 
  Clock, 
  Check, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  FileCheck
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct mailto link cleanly through client without exposing phone numbers
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Hi Abid,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`)}`;
    
    window.location.href = mailtoUrl;
    setMessageSent(true);

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.4 }
    });

    setTimeout(() => {
      setMessageSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <MessageSquare size={14} />
            <span>Professional Inquiries</span>
          </div>
          <h2 className="section-title">
            Let's Engineer <span className="gradient-text-emerald">High-Impact Systems</span>
          </h2>
          <p className="section-subtitle">
            Open to senior engineering roles, microservices architecture, and ambitious product teams worldwide.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Professional Channels & Availability */}
          <div className="contact-info-col">
            <div className="contact-cards-group">
              
              {/* LinkedIn Professional Card */}
              <div className="contact-channel-card glass-panel">
                <div className="contact-channel-icon purple">
                  <LinkedinIcon size={22} />
                </div>
                <div className="contact-channel-details">
                  <span className="contact-channel-label">LinkedIn Professional</span>
                  <span className="contact-channel-val">{personalInfo.linkedinHandle}</span>
                </div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-glass contact-action-link"
                >
                  <span>Connect</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* GitHub Card */}
              <div className="contact-channel-card glass-panel">
                <div className="contact-channel-icon cyan">
                  <GithubIcon size={22} />
                </div>
                <div className="contact-channel-details">
                  <span className="contact-channel-label">GitHub Repositories</span>
                  <span className="contact-channel-val">{personalInfo.githubHandle}</span>
                </div>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-glass contact-action-link"
                >
                  <span>Explore</span>
                  <ExternalLink size={13} />
                </a>
              </div>

            </div>

            {/* Location & Availability Card */}
            <div className="contact-location-card glass-panel">
              <div className="loc-row">
                <MapPin size={16} className="loc-icon" />
                <span>Base Location: <strong>{personalInfo.location}</strong></span>
              </div>
              <div className="loc-row">
                <Clock size={16} className="loc-icon" />
                <span>Timezone: <strong>{personalInfo.timezone}</strong> (Asynchronous & Remote Friendly)</span>
              </div>
              <div className="loc-row">
                <ShieldCheck size={16} className="loc-icon" />
                <span>Verified Commercial Background: <strong>2.5+ Years Production</strong></span>
              </div>
              
              <div className="loc-resume-request-badge">
                <FileCheck size={16} className="text-emerald" />
                <span>Full detailed resume / CV available upon professional request.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Direct Message / Inquiry Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-panel">
              <div className="form-card-header">
                <h3 className="form-title">Send a Direct Inquiry</h3>
                <p className="form-sub">Share project specifications, engineering roles, or collaboration opportunities.</p>
              </div>

              {messageSent && (
                <div className="form-success-banner">
                  <Check size={18} />
                  <span>Opening your mail client with your formatted inquiry!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Hiring Manager / Tech Lead"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. lead@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="e.g. Backend Engineer Opportunity / Distributed Architecture"
                    className="form-input"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message Details</label>
                  <textarea
                    id="message"
                    required
                    rows="5"
                    placeholder="Describe the opportunity, stack requirements, or project details..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-send-message">
                  <Send size={16} />
                  <span>Send Inquiry</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
