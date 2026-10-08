import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { FolderGit2, ExternalLink, ArrowUpRight, Sparkles, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';
import './ProjectsSection.css';

const categories = [
  'All Systems & Apps',
  'Golang & Microservices',
  'Security & Microservices',
  'Full-Stack & React',
  'Fintech & Security'
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All Systems & Apps');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All Systems & Apps') return true;
    if (activeCategory === 'Golang & Microservices') return project.category.includes('Golang');
    if (activeCategory === 'Security & Microservices') return project.category.includes('Security');
    if (activeCategory === 'Full-Stack & React') return project.category.includes('Full-Stack') || project.techStack.includes('React 19') || project.techStack.includes('React');
    if (activeCategory === 'Fintech & Security') return project.category.includes('Fintech') || project.category.includes('Security');
    return true;
  });

  const handleCategoryFilter = (cat) => {
    setActiveCategory(cat);
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <FolderGit2 size={14} />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="section-title">
            Enterprise Platforms & <span className="gradient-text-cyan">Scalable Microservices</span>
          </h2>
          <p className="section-subtitle">
            A curated portfolio of high-concurrency backends, national-scale government infrastructure, automated pipelines, and reactive client experiences.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="project-filter-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategoryFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card glass-panel"
              style={{ '--glow-color': project.borderGlow }}
            >
              {/* Card Top Banner */}
              <div className="project-card-top">
                <span className="card-scale-badge font-mono">{project.scale}</span>
                <span className="card-category-badge">{project.category}</span>
              </div>

              {/* Title & Subtitle */}
              <div className="project-card-heading">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-subtitle">{project.subtitle}</p>
              </div>

              {/* Summary */}
              <p className="project-card-desc">{project.summary}</p>

              {/* Metrics Box */}
              <div className="project-metrics-strip">
                <Sparkles size={14} className="metric-icon-gold" />
                <span className="metric-text font-mono">{project.metrics}</span>
              </div>

              {/* Tech Stack Pills */}
              <div className="project-card-tech">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>

              {/* Card Actions Footer */}
              <div className="project-card-footer">
                <button
                  type="button"
                  className="btn btn-sm btn-primary project-deep-dive-btn"
                  onClick={() => handleOpenModal(project)}
                >
                  <span>Architecture Deep Dive</span>
                  <ArrowUpRight size={15} />
                </button>

                <div className="project-quick-links">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-action"
                      title="Live Demo"
                      aria-label="Live Demo"
                      onClick={() => sfx.playClick()}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-action"
                      title="GitHub Repository"
                      aria-label="GitHub Repository"
                      onClick={() => sfx.playClick()}
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
