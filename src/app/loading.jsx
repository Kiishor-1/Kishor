"use client"
import React, { useState, useEffect } from 'react';

export default function Loading() {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    // Simulate the loading progress
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='text-center mt-[20%] text-[#87ACA3] text-6xl'>
      <h1>{loadingPercentage}%</h1>
    </div>
  );
}
