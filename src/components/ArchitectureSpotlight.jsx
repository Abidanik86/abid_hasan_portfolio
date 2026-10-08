import React, { useState } from 'react';
import { architectureSpotlight } from '../data/portfolioData';
import { Network, ShieldCheck, CheckCircle2, ChevronRight, Server, Database, ArrowRight } from 'lucide-react';
import './ArchitectureSpotlight.css';

export default function ArchitectureSpotlight() {
  const [selectedFlowId, setSelectedFlowId] = useState(architectureSpotlight.flows[0].id);
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const currentFlow = architectureSpotlight.flows.find(f => f.id === selectedFlowId) || architectureSpotlight.flows[0];

  const handleFlowChange = (id) => {
    setSelectedFlowId(id);
    setActiveStepIdx(0);
  };

  const handleStepClick = (idx) => {
    setActiveStepIdx(idx);
  };

  return (
    <section id="architecture" className="arch-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Network size={14} />
            <span>Systems Architecture Spotlight</span>
          </div>
          <h2 className="section-title">
            Engineered for <span className="gradient-text-emerald">High Throughput</span> & Fault Tolerance
          </h2>
          <p className="section-subtitle">
            Step-by-step interactive breakdown of real production distributed systems architected by Abid Hasan Anik.
          </p>
        </div>

        {/* Architecture Switcher Tabs */}
        <div className="arch-flow-selector">
          {architectureSpotlight.flows.map((flow) => (
            <button
              key={flow.id}
              type="button"
              className={`arch-selector-btn ${selectedFlowId === flow.id ? 'active' : ''}`}
              onClick={() => handleFlowChange(flow.id)}
            >
              <div className="arch-btn-icon">
                {flow.id === 'event-pipeline' ? <Network size={18} /> : <ShieldCheck size={18} />}
              </div>
              <div className="arch-btn-text">
                <span className="arch-btn-title">{flow.name}</span>
                <span className="arch-btn-sub">{flow.context}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Interactive Architecture Stage */}
        <div className="arch-stage glass-panel">
          <div className="arch-stage-header">
            <div>
              <span className="arch-badge-scale font-mono">{currentFlow.throughput}</span>
              <h3 className="arch-stage-title">{currentFlow.name}</h3>
            </div>
            <span className="arch-step-indicator font-mono">
              Step {activeStepIdx + 1} of {currentFlow.steps.length}
            </span>
          </div>

          {/* Interactive Pipeline Sequence Nodes */}
          <div className="arch-nodes-track">
            {currentFlow.steps.map((step, idx) => (
              <div key={idx} className="arch-node-wrapper">
                <button
                  type="button"
                  className={`arch-node-btn ${activeStepIdx === idx ? 'active' : ''} ${idx < activeStepIdx ? 'completed' : ''}`}
                  onClick={() => handleStepClick(idx)}
                >
                  <span className="arch-node-number font-mono">{idx + 1}</span>
                  <span className="arch-node-title">{step.title}</span>
                  <span className="arch-node-role">{step.role}</span>
                </button>
                {idx < currentFlow.steps.length - 1 && (
                  <div className={`arch-node-connector ${idx < activeStepIdx ? 'active' : ''}`}>
                    <ChevronRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Deep-Dive Inspection Panel for Active Step */}
          <div className="arch-step-detail glass-panel">
            <div className="arch-detail-header">
              <div className="arch-detail-tag font-mono">
                STAGE {activeStepIdx + 1} // {currentFlow.steps[activeStepIdx].role.toUpperCase()}
              </div>
              <h4>{currentFlow.steps[activeStepIdx].title}</h4>
            </div>
            
            <p className="arch-detail-desc">
              {currentFlow.steps[activeStepIdx].desc}
            </p>

            <div className="arch-step-nav-footer">
              <button
                type="button"
                className="btn btn-sm btn-glass"
                disabled={activeStepIdx === 0}
                onClick={() => handleStepClick(Math.max(0, activeStepIdx - 1))}
              >
                Previous Step
              </button>

              <button
                type="button"
                className="btn btn-sm btn-primary"
                disabled={activeStepIdx === currentFlow.steps.length - 1}
                onClick={() => handleStepClick(Math.min(currentFlow.steps.length - 1, activeStepIdx + 1))}
              >
                <span>Next Stage</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
