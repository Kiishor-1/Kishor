"use client";

import React, { useEffect, useState } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

const InteractiveGrid = () => {
  const mousePosition = useMousePosition();
  const [gridItems, setGridItems] = useState([]);

  useEffect(() => {
    // Set the grid items when the component mounts
    setGridItems(Array.from(document.querySelectorAll('.grid-item')));
  }, []);

  const calculateDistance = (x, y, element) => {
    if (!element) return Infinity;
    const rect = element.getBoundingClientRect();
    const elementX = rect.left + rect.width / 2; // Get the center X of the element
    const elementY = rect.top + rect.height / 2; // Get the center Y of the element
    // Calculate distance between the mouse and the element
    return Math.sqrt(Math.pow(x - elementX, 2) + Math.pow(y - elementY, 2));
  };

  const getTransformStyle = (distance) => {
    const maxDistance = 150; // Adjust the sensitivity of the effect
    const intensity = Math.max(0, maxDistance - distance) / maxDistance; // Calculate intensity based on proximity
    const scale = 1 + intensity * 2; // Uniform scale in all directions

    return {
      transform: `scale(${scale})`, // Apply uniform radial scaling
      opacity: 0.5 + intensity * 0.5, // Adjust opacity for a smoother effect
      transition: 'transform 0.2s ease-out, opacity 0.2s ease-out', // Smooth transition for scaling and opacity
    };
  };

  return (
    <div className="relative grid md:grid-cols-8 gap-6 grid-cols-12  transform md:rotate-90 transform-origin-top-left">
      {Array.from({ length: 144 }).map((_, index) => (
        <div
          key={index}
          className="w-2 h-2 bg-blue-500 grid-item rounded-full"
          style={
            mousePosition.x && mousePosition.y && gridItems[index]
              ? getTransformStyle(
                  calculateDistance(
                    mousePosition.x,
                    mousePosition.y,
                    gridItems[index]
                  )
                )
              : {}
          }
        />
      ))}
    </div>
  );
};

export default InteractiveGrid;


