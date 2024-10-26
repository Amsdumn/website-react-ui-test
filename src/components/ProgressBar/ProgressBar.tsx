import React from "react";

interface ProgressBarProps {
  progress: number;
}

function ProgressBarComponent ({
  progress
} : ProgressBarProps) {
  return (
    <div style={{ width: '100%', backgroundColor: '#f3f3f3', borderRadius: '8px' }}>
      <div
        style={{
          width: `${progress}%`,
          height: '8px',
          backgroundColor: '#A8AD00',
          borderRadius: '8px',
          transition: 'width 0.3s ease',
        }}
      />
    </div>
  )
}

export default ProgressBarComponent;