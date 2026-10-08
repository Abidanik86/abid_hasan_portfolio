import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  User, 
  MapPin, 
  Clock, 
  Cpu, 
  Database, 
  Activity,
  Layers,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' or 'terminal'
  const [terminalOutput, setTerminalOutput] = useState([
    { type: 'cmd', text: '$ anik-cli --system-overview' },
    { type: 'info', text: 'Initializing Abid Hasan Anik system diagnostics...' },
    { type: 'success', text: '[OK] Core: Golang (Fiber) & Python (FastAPI, Django)' },
    { type: 'success', text: '[OK] Event Broker: Apache Kafka & RabbitMQ (0 lag)' },
    { type: 'success', text: '[OK] Data Layer: PostgreSQL (Tuned) & Redis Caching' },
    { type: 'success', text: '[OK] Frontend: React 19 & GSAP High-FPS Animations' },
    { type: 'highlight', text: 'Ready for enterprise microservices & high-scale challenges.' }
  ]);
  const [activeCmd, setActiveCmd] = useState('sys.status');

  const executeCmd = (cmdKey) => {
    setActiveCmd(cmdKey);

    if (cmdKey === 'sys.status') {
      setTerminalOutput([
        { type: 'cmd', text: '$ go run telemetry/status.go' },
        { type: 'info', text: 'Telemetry Node: Production Cluster (Dhaka / Cloud)' },
        { type: 'success', text: '✓ Go Fiber Microservices: 100% HEALTHY' },
        { type: 'success', text: '✓ Goroutine Concurrency: 0 memory leaks detected' },
        { type: 'success', text: '✓ Database Pool (PostgreSQL): p99 latency < 3.8ms' },
        { type: 'success', text: '✓ Redis Distributed Cache: Hit ratio 98.7%' },
        { type: 'highlight', text: 'Status: RESILIENT & FAULT-TOLERANT' }
      ]);
    } else if (cmdKey === 'kafka.telemetry') {
      setTerminalOutput([
        { type: 'cmd', text: '$ kafka-consumer-groups.sh --describe --group ballot-workers' },
        { type: 'info', text: 'Topic: national.ballot.events | Partition Count: 16' },
        { type: 'success', text: 'Consumer Lag: 0 messages across all partitions' },
        { type: 'success', text: 'Throughput: ~14,200 events/sec peak ingestion' },
        { type: 'success', text: 'Dead-Letter Queue (DLQ): 0 dropped messages' },
        { type: 'highlight', text: 'Auto-recovery & Exponential Backoff: ACTIVE' }
      ]);
    } else if (cmdKey === 'services.list') {
      setTerminalOutput([
        { type: 'cmd', text: '$ docker ps --format "table {{.Names}}\\t{{.Status}}"' },
        { type: 'info', text: 'Production Services Monitored:' },
        { type: 'success', text: '1. dakporichoy-sso-auth      Up 180 days (Govt SSO)' },
        { type: 'success', text: '2. postal-ballot-consumer     Up 140 days (Kafka/Go)' },
        { type: 'success', text: '3. slotbro-automation-worker  Up 45 days (FastAPI/Playwright)' },
        { type: 'success', text: '4. aquabit-iot-engine         Up 90 days (Fiber/Redis)' },
        { type: 'highlight', text: 'All microservices running under Docker containerization.' }
      ]);
    } else if (cmdKey === 'channels.info') {
      setTerminalOutput([
        { type: 'cmd', text: '$ anik-cli --professional-channels' },
        { type: 'success', text: `GitHub: ${personalInfo.github}` },
        { type: 'success', text: `LinkedIn: ${personalInfo.linkedin}` },
        { type: 'success', text: 'Direct Message: Use Inquiry form at bottom of page' },
        { type: 'highlight', text: 'Location: Dhaka, Bangladesh (Remote Ready Worldwide)' }
      ]);
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Hero Narrative */}
        <div className="hero-content">
          {/* Headline */}
          <h1 className="hero-headline">
            Architecting <span className="gradient-text-cyan">Resilient</span> Systems & High-Velocity <span className="gradient-text-emerald">APIs</span>
          </h1>

          {/* Subtitle & Role */}
          <p className="hero-role-title">
            <span>{personalInfo.name}</span> — <strong>Software Engineer & Backend Systems Architect</strong>
          </p>

          <p className="hero-pitch">
            2.5+ years of commercial experience designing distributed microservices, event-driven pipelines (Kafka, RabbitMQ), and national-scale government infrastructure using <strong>Golang</strong> and <strong>Python</strong> — delivered alongside modern, fluid <strong>React</strong> frontends.
          </p>

          {/* Primary Action Buttons */}
          <div className="hero-actions">
            <a 
              href="#projects" 
              className="btn btn-primary"
            >
              <span>Explore My Projects</span>
              <ArrowRight size={17} />
            </a>

            <a 
              href="#contact" 
              className="btn btn-emerald"
            >
              <MessageSquare size={17} />
              <span>Get in Touch / Inquiry</span>
            </a>
          </div>

          {/* Verified Core Technologies Chips */}
          <div className="hero-tech-strip">
            <span className="hero-tech-label">Core Engine:</span>
            <div className="hero-tech-chips">
              <span className="tech-tag">Golang (Fiber)</span>
              <span className="tech-tag">Python (FastAPI, Django)</span>
              <span className="tech-tag">Apache Kafka</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">Redis</span>
              <span className="tech-tag">React 19</span>
              <span className="tech-tag">Docker</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Spotlight Showcase */}
        <div className="hero-visual">
          <div className="visual-card glass-panel">
            
            {/* Tab Header */}
            <div className="visual-tabs-header">
              <button 
                type="button" 
                className={`visual-tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <User size={15} />
                <span>Identity & Profile</span>
              </button>

              <button 
                type="button" 
                className={`visual-tab-btn ${activeTab === 'terminal' ? 'active' : ''}`}
                onClick={() => setActiveTab('terminal')}
              >
                <Terminal size={15} />
                <span>Live System Console</span>
              </button>
            </div>

            {/* Tab 1: Profile View with User Portrait */}
            {activeTab === 'profile' && (
              <div className="profile-view">
                <div className="portrait-wrapper">
                  <div className="portrait-glow"></div>
                  <img 
                    src={personalInfo.photo} 
                    alt={personalInfo.name} 
                    className="portrait-image"
                  />
                </div>

                <div className="profile-details">
                  <div className="profile-name-row">
                    <h3>{personalInfo.name}</h3>
                    <span className="profile-role-pill">Backend & Systems</span>
                  </div>

                  <div className="profile-meta-grid">
                    <div className="profile-meta-item">
                      <MapPin size={14} className="meta-icon" />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="profile-meta-item">
                      <Clock size={14} className="meta-icon" />
                      <span>{personalInfo.timezone}</span>
                    </div>
                    <div className="profile-meta-item">
                      <Cpu size={14} className="meta-icon" />
                      <span>2.5+ Years Commercial Exp</span>
                    </div>
                    <div className="profile-meta-item">
                      <Layers size={14} className="meta-icon" />
                      <span>National Govt SSO & Election Scale</span>
                    </div>
                  </div>

                  <div className="profile-cta-footer">
                    <button 
                      type="button" 
                      className="btn btn-sm btn-emerald" 
                      onClick={() => setActiveTab('terminal')}
                      style={{ width: '100%' }}
                    >
                      <Terminal size={14} />
                      <span>Test Interactive Systems Telemetry</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Interactive Terminal Telemetry */}
            {activeTab === 'terminal' && (
              <div className="terminal-view">
                <div className="terminal-window-bar">
                  <div className="terminal-dots">
                    <span className="term-dot red"></span>
                    <span className="term-dot yellow"></span>
                    <span className="term-dot green"></span>
                  </div>
                  <span className="terminal-title">anik@node-01: ~ (production-telemetry)</span>
                  <span className="terminal-status-live">LIVE</span>
                </div>

                <div className="terminal-body font-mono">
                  {terminalOutput.map((line, idx) => (
                    <div key={idx} className={`term-line term-${line.type}`}>
                      {line.text}
                    </div>
                  ))}
                </div>

                {/* Clickable Quick Command Triggers */}
                <div className="terminal-command-bar">
                  <span className="term-bar-label font-mono">Run Telemetry:</span>
                  <div className="term-quick-cmds">
                    <button 
                      type="button" 
                      className={`term-cmd-btn ${activeCmd === 'sys.status' ? 'active' : ''}`}
                      onClick={() => executeCmd('sys.status')}
                    >
                      sys.status
                    </button>
                    <button 
                      type="button" 
                      className={`term-cmd-btn ${activeCmd === 'kafka.telemetry' ? 'active' : ''}`}
                      onClick={() => executeCmd('kafka.telemetry')}
                    >
                      kafka.metrics
                    </button>
                    <button 
                      type="button" 
                      className={`term-cmd-btn ${activeCmd === 'services.list' ? 'active' : ''}`}
                      onClick={() => executeCmd('services.list')}
                    >
                      services.list
                    </button>
                    <button 
                      type="button" 
                      className={`term-cmd-btn ${activeCmd === 'channels.info' ? 'active' : ''}`}
                      onClick={() => executeCmd('channels.info')}
                    >
                      channels.info
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
