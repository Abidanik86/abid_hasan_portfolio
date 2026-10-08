import React from 'react';
import { metricsData } from '../data/portfolioData';
import { Award, Globe, Server, Zap } from 'lucide-react';
import './TelemetryBar.css';

const metricIcons = [
  <Award key="award" className="metric-icon cyan" size={24} />,
  <Globe key="globe" className="metric-icon emerald" size={24} />,
  <Server key="server" className="metric-icon purple" size={24} />,
  <Zap key="zap" className="metric-icon amber" size={24} />
];

export default function TelemetryBar() {
  return (
    <section className="telemetry-section">
      <div className="container">
        <div className="telemetry-grid">
          {metricsData.map((item, index) => (
            <div key={index} className="telemetry-card glass-panel">
              <div className="telemetry-icon-box">
                {metricIcons[index % metricIcons.length]}
              </div>
              <div className="telemetry-content">
                <div className="telemetry-number-row">
                  <span className="telemetry-value font-display">{item.value}</span>
                  <span className="telemetry-unit font-mono">{item.unit}</span>
                </div>
                <div className="telemetry-label">{item.label}</div>
                <div className="telemetry-desc">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
