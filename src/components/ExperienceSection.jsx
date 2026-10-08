import React from 'react';
import { experienceData, educationData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import './ExperienceSection.css';

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Briefcase size={14} />
            <span>Career Journey & Credentials</span>
          </div>
          <h2 className="section-title">
            Commercial Experience & <span className="gradient-text-cyan">Academic Foundation</span>
          </h2>
          <p className="section-subtitle">
            A proven track record of architecting mission-critical platforms, advancing from foundational internship to leading high-scale distributed backend systems.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {experienceData.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              {/* Timeline Marker Node */}
              <div className="timeline-marker">
                <div className="timeline-marker-dot"></div>
              </div>

              {/* Card Content */}
              <div className="timeline-card glass-panel">
                <div className="timeline-card-header">
                  <div>
                    <span className="timeline-period-badge font-mono">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </span>
                    <h3 className="timeline-role-title">{exp.role}</h3>
                    <div className="timeline-company-row">
                      <span className="timeline-company-name">{exp.company}</span>
                      {exp.location && (
                        <span className="timeline-location">
                          <MapPin size={13} />
                          <span>{exp.location}</span>
                        </span>
                      )}
                      <span className="timeline-type-pill">{exp.type}</span>
                    </div>
                  </div>
                </div>

                <p className="timeline-summary-text">{exp.description}</p>

                {/* Achievements */}
                <div className="timeline-achievements">
                  <h4 className="achievements-title">Key Contributions & Architecture:</h4>
                  <div className="achievements-list">
                    {exp.achievements.map((item, aIdx) => (
                      <div key={aIdx} className="achievement-item">
                        <CheckCircle2 size={16} className="achievement-icon" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills tags */}
                <div className="timeline-tech-tags">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tech-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education Card as the capstone of the timeline */}
          <div className="timeline-item education-timeline-item">
            <div className="timeline-marker education-marker">
              <GraduationCap size={16} className="text-purple" />
            </div>

            <div className="timeline-card glass-panel education-card">
              <div className="timeline-card-header">
                <div>
                  <span className="timeline-period-badge font-mono purple">
                    <Calendar size={13} />
                    <span>{educationData.period}</span>
                  </span>
                  <h3 className="timeline-role-title">{educationData.degree}</h3>
                  <div className="timeline-company-row">
                    <span className="timeline-company-name">{educationData.institution}</span>
                    <span className="education-cgpa font-mono">Cumulative GPA: {educationData.cgpa}</span>
                  </div>
                </div>
              </div>

              <div className="education-modules-box">
                <span className="modules-label">Core Engineering Modules Completed:</span>
                <div className="modules-tags">
                  {educationData.coreModules.map((mod, mIdx) => (
                    <span key={mIdx} className="tech-tag module-tag">{mod}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
