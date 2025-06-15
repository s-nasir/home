'use client';

import React from 'react';

const BackgroundPattern = () => {
  const rows = 4;
  const cols = 5;
  const totalDivs = rows * cols;

  return (
    <div className="fixed inset-0 overflow-hidden background-container">
      {Array.from({ length: totalDivs }).map((_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        return (
          <div
            key={i}
            className="background-div"
            style={{
              left: `${(col * 25) + 5}%`,
              top: `${(row * 25) + 5}%`,
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundPattern; 