import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, 
  Server, 
  Database, 
  Radio, 
  ShieldCheck, 
  Wrench, 
  Terminal, 
  Sparkles,
  Layers
} from 'lucide-react';
import './SkillsSection.css';

const skillTabs = [
  { id: 'all', label: 'All Competencies', icon: Layers },
  { id: 'backend', label: 'Backend & Go/Python', icon: Server },
  { id: 'queues', label: 'Kafka & Messaging', icon: Radio },
  { id: 'data', label: 'Databases & Redis', icon: Database },
  { id: 'security', label: 'Security & SSO', icon: ShieldCheck },
  { id: 'tools', label: 'Frontend & DevOps', icon: Wrench }
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (id) => {
    setActiveTab(id);
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Code2 size={14} />
            <span>Digital & Technical Competencies</span>
          </div>
          <h2 className="section-title">
            Engineered with <span className="gradient-text-emerald">Production Depth</span>
          </h2>
          <p className="section-subtitle">
            Specialized toolkit refined through 2.5+ years of building national-scale government infrastructure and distributed microservices.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="skills-tab-nav">
          {skillTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                className={`skills-nav-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabChange(tab.id)}
              >
                <Icon size={15} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-main-grid">

          {/* Languages & Core */}
          {(activeTab === 'all' || activeTab === 'backend') && (
            <div className="skill-category-card glass-panel">
              <div className="skill-card-header">
                <div className="skill-cat-icon-box cyan">
                  <Terminal size={20} />
                </div>
                <div>
                  <h3 className="skill-cat-title">Programming Languages</h3>
                  <p className="skill-cat-sub">High-efficiency compiled & interpreted systems</p>
                </div>
              </div>

              <div className="skill-items-list">
                {skillsData.languages.map((item, idx) => (
                  <div key={idx} className="skill-metric-row">
                    <div className="skill-meta-top">
                      <span className="skill-item-name">{item.name}</span>
                      <span className="skill-item-badge font-mono">{item.badge}</span>
                    </div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill cyan" style={{ width: `${item.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Backend & API Frameworks */}
          {(activeTab === 'all' || activeTab === 'backend') && (
            <div className="skill-category-card glass-panel">
              <div className="skill-card-header">
                <div className="skill-cat-icon-box emerald">
                  <Server size={20} />
                </div>
                <div>
                  <h3 className="skill-cat-title">Backend & Microservices</h3>
                  <p className="skill-cat-sub">High-concurrency frameworks & RESTful architecture</p>
                </div>
              </div>

              <div className="skill-items-list">
                {skillsData.backendFrameworks.map((item, idx) => (
                  <div key={idx} className="skill-metric-row">
                    <div className="skill-meta-top">
                      <span className="skill-item-name">{item.name}</span>
                      <span className="skill-item-badge font-mono">{item.category}</span>
                    </div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill emerald" style={{ width: `${item.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Messaging & Queuing */}
          {(activeTab === 'all' || activeTab === 'queues') && (
            <div className="skill-category-card glass-panel">
              <div className="skill-card-header">
                <div className="skill-cat-icon-box purple">
                  <Radio size={20} />
                </div>
                <div>
                  <h3 className="skill-cat-title">Messaging & Event Streams</h3>
                  <p className="skill-cat-sub">Asynchronous brokers & distributed queues</p>
                </div>
              </div>

              <div className="skill-items-list">
                {skillsData.messagingAndQueues.map((item, idx) => (
                  <div key={idx} className="skill-desc-row">
                    <div className="skill-meta-top">
                      <span className="skill-item-name">{item.name}</span>
                      <span className="skill-item-badge font-mono">Event Queue</span>
                    </div>
                    <p className="skill-item-desc">{item.desc}</p>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill purple" style={{ width: `${item.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Databases & Storage */}
          {(activeTab === 'all' || activeTab === 'data') && (
            <div className="skill-category-card glass-panel">
              <div className="skill-card-header">
                <div className="skill-cat-icon-box amber">
                  <Database size={20} />
                </div>
                <div>
                  <h3 className="skill-cat-title">Databases & Caching</h3>
                  <p className="skill-cat-sub">Query tuning, indexing, and in-memory stores</p>
                </div>
              </div>

              <div className="skill-items-list">
                {skillsData.databasesAndStorage.map((item, idx) => (
                  <div key={idx} className="skill-desc-row">
                    <div className="skill-meta-top">
                      <span className="skill-item-name">{item.name}</span>
                      <span className="skill-item-badge font-mono">Storage</span>
                    </div>
                    <p className="skill-item-desc">{item.desc}</p>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill amber" style={{ width: `${item.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security & Identity */}
          {(activeTab === 'all' || activeTab === 'security') && (
            <div className="skill-category-card glass-panel">
              <div className="skill-card-header">
                <div className="skill-cat-icon-box emerald">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="skill-cat-title">Security & Identity (IAM)</h3>
                  <p className="skill-cat-sub">National SSO, OTP, and cryptographic audits</p>
                </div>
              </div>

              <div className="skill-items-list">
                {skillsData.securityAndIdentity.map((item, idx) => (
                  <div key={idx} className="skill-desc-row">
                    <div className="skill-meta-top">
                      <span className="skill-item-name">{item.name}</span>
                      <span className="skill-item-badge font-mono">IAM / Auth</span>
                    </div>
                    <p className="skill-item-desc">{item.desc}</p>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill emerald" style={{ width: `${item.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Frontend, Mobile & DevOps */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div className="skill-category-card glass-panel">
              <div className="skill-card-header">
                <div className="skill-cat-icon-box cyan">
                  <Wrench size={20} />
                </div>
                <div>
                  <h3 className="skill-cat-title">Frontend, Mobile & DevOps</h3>
                  <p className="skill-cat-sub">Modern clients, automation & Docker infrastructure</p>
                </div>
              </div>

              <div className="skill-items-list">
                {skillsData.frontendAndTools.map((item, idx) => (
                  <div key={idx} className="skill-desc-row">
                    <div className="skill-meta-top">
                      <span className="skill-item-name">{item.name}</span>
                      <span className="skill-item-badge font-mono">Tooling</span>
                    </div>
                    <p className="skill-item-desc">{item.desc}</p>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill cyan" style={{ width: `${item.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
