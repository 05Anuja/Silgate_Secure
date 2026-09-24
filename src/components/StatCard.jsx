import React from "react";

export function StatCard({ number, label, className = "" }) {
  return (
    <div className={`threat-stat-item ${className}`}>
      <div className="threat-stat-number">{number}</div>
      <div className="threat-stat-label">{label}</div>
    </div>
  );
}

export default StatCard;
