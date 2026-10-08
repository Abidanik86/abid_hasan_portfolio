import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Shield, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="project-modal-container glass-panel" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="project-modal-header">
          <div className="project-modal-eyebrow">
            <span className="modal-scale-badge font-mono">{project.scale}</span>
            <span className="modal-cat-tag">{project.category}</span>
          </div>

          <button 
            type="button" 
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Title & Subtitle */}
        <div className="project-modal-title-box">
          <h2 className="project-modal-title">{project.title}</h2>
          <p className="project-modal-subtitle">{project.subtitle}</p>
        </div>

        {/* Modal Scroll Content */}
        <div className="project-modal-body">
          {/* Overview */}
          <div className="modal-section-block">
            <h4 className="modal-block-title">
              <Layers size={16} className="modal-icon-cyan" />
              <span>Executive Overview</span>
            </h4>
            <p className="modal-overview-text">{project.summary}</p>
          </div>

          {/* Key Achievements & Architecture */}
          <div className="modal-section-block">
            <h4 className="modal-block-title">
              <Cpu size={16} className="modal-icon-emerald" />
              <span>Engineering Highlights & Architecture</span>
            </h4>
            <div className="modal-highlights-list">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="modal-highlight-item">
                  <CheckCircle2 size={16} className="modal-check-icon" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics Banner */}
          <div className="modal-metrics-card">
            <Sparkles size={16} className="text-amber" />
            <div className="modal-metrics-content">
              <span className="modal-metrics-label">Production Impact & Performance:</span>
              <span className="modal-metrics-val font-mono">{project.metrics}</span>
            </div>
          </div>

          {/* Technologies Stack */}
          <div className="modal-section-block">
            <h4 className="modal-block-title">
              <Shield size={16} className="modal-icon-purple" />
              <span>Production Technologies Used</span>
            </h4>
            <div className="modal-tech-pills">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="project-modal-footer">
          <div className="modal-links-left">
            {project.liveDemo && (
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-sm"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-glass btn-sm"
              >
                <GithubIcon size={14} />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <button 
            type="button" 
            className="btn btn-glass btn-sm"
            onClick={onClose}
          >
            Close Deep Dive
          </button>
        </div>

      </div>
    </div>
  );
}
