import React from 'react';
import { 
  Terminal, 
  Cpu, 
  Workflow, 
  CheckCircle, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Server,
  MessageSquare
} from 'lucide-react';
import './AboutSection.css';

export default function AboutSection() {

  return (
    <section id="about" className="about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Cpu size={14} />
            <span>Behind the Code</span>
          </div>
          <h2 className="section-title">
            Architecting for <span className="gradient-text-cyan">Scale & Resilience</span>
          </h2>
          <p className="section-subtitle">
            A production-tested engineer focused on bulletproof backends, distributed microservices, and high-performance user interfaces.
          </p>
        </div>

        <div className="about-content-grid">
          
          {/* Left Column: Narrative Card */}
          <div className="about-narrative-card glass-panel">
            <h3 className="about-narrative-title">
              Engineering Mission & Background
            </h3>

            <p className="about-paragraph">
              I am a <strong>Software Engineer</strong> with <strong>2.5+ years of commercial production experience</strong> architecting high-scale distributed backend systems, event-driven pipelines, and high-velocity microservices using <strong>Golang (Fiber)</strong> and <strong>Python (FastAPI, Django)</strong>.
            </p>

            <p className="about-paragraph">
              Throughout my tenure at <strong>Smart Think</strong> and <strong>Code Forge BD</strong>, I have had the privilege to deliver mission-critical, national-scale digital infrastructure — from <strong>Dakporichoy</strong> (Central Government Single Sign-On authenticating citizens and officials across ministerial departments) to the <strong>Postal Ballot Event-Streaming Engine</strong> for the Election Commission handling bulk voting transactions with Apache Kafka.
            </p>

            <p className="about-paragraph">
              Beyond pure backend architecture, I bridge the gap to the browser: engineering responsive, cinematic frontends in <strong>React 19</strong>, <strong>GSAP</strong>, and <strong>Vite</strong> to ensure enterprise systems look as sharp as they perform under heavy load.
            </p>

            <div className="about-core-pillars">
              <div className="pillar-item">
                <CheckCircle size={18} className="pillar-icon" />
                <div>
                  <strong>Zero-Downtime Reliability:</strong> Automated retries, exponential backoff, and Kafka Dead-Letter Queues (DLQ).
                </div>
              </div>
              <div className="pillar-item">
                <CheckCircle size={18} className="pillar-icon" />
                <div>
                  <strong>Database Performance:</strong> Deep PostgreSQL query optimization, B-Tree indexing, and Redis in-memory caching.
                </div>
              </div>
              <div className="pillar-item">
                <CheckCircle size={18} className="pillar-icon" />
                <div>
                  <strong>Security-First Architecture:</strong> Multi-factor OTP, KYC workflows, immutable audit logging, and token-bucket rate limiters.
                </div>
              </div>
            </div>

            <div className="about-actions-row">
              <a 
                href="#projects" 
                className="btn btn-primary btn-sm"
              >
                <span>Browse Project Case Studies</span>
                <ArrowRight size={14} />
              </a>
              <a 
                href="#contact" 
                className="btn btn-glass btn-sm"
              >
                <MessageSquare size={14} />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          {/* Right Column: Engineering Principles & At a Glance */}
          <div className="about-side-column">
            
            <div className="about-card-stat glass-panel">
              <div className="stat-card-top">
                <Server size={20} className="text-cyan" />
                <span className="stat-badge font-mono">GO & PYTHON</span>
              </div>
              <h4 className="stat-title">Microservice Specialist</h4>
              <p className="stat-text">
                Proficient in low-latency RESTful APIs with Go Fiber, asynchronous task workers with Celery & RabbitMQ, and enterprise Django architecture.
              </p>
            </div>

            <div className="about-card-stat glass-panel">
              <div className="stat-card-top">
                <ShieldCheck size={20} className="text-emerald" />
                <span className="stat-badge font-mono">GOVT SSO</span>
              </div>
              <h4 className="stat-title">National Identity & Security</h4>
              <p className="stat-text">
                Proven track record securing public sector infrastructure with cryptographically validated tokens, RBAC authorizations, and audit registries.
              </p>
            </div>

            <div className="about-card-stat glass-panel">
              <div className="stat-card-top">
                <Workflow size={20} className="text-purple" />
                <span className="stat-badge font-mono">REMOTE READY</span>
              </div>
              <h4 className="stat-title">Agile & Asynchronous</h4>
              <p className="stat-text">
                Accustomed to cross-functional remote teams, clear documentation, Git pull-request code reviews, and containerized CI/CD workflows.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
