import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ExperienceEntry({ experience }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({ backgroundColor: "#3B82F6" });
    } else {
      controls.start({ backgroundColor: "white" });
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="relative pl-12 mb-8">
      <motion.div
        className="absolute left-[-8px] top-0 w-4 h-4 border-2 border-blue-500 rounded-full"
        animate={controls}
      />
      <h3 className="text-xl font-semibold mb-1">{experience.role}</h3>
      <h4 className="text-gray-400 mb-2">{experience.company} | <i>{experience.period}</i></h4>
      <p className="text-gray-700">{experience.description}</p>
    </div>
  );
}
