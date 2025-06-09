import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Pattern = () => {
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div 
        className="absolute"
        style={{
          width: '200vw',
          height: '200vh',
          top: '-50vh',
          left: '-50vw',
          '--size': '80px',
          '--color': '#d7d9d4',
          '--l': 'var(--color) 20%, #0000 0',
          '--bg': '35%, #c0c3bb 0 45%, var(--color) 0',
          background: `
            linear-gradient(
              45deg,
              var(--l) 45%,
              var(--color) 0 70%,
              #db777700 0
            ),
            linear-gradient(-45deg, var(--l) var(--bg) 70%, #0000 0),
            linear-gradient(45deg, var(--color) var(--bg))
          `,
          backgroundSize: 'var(--size) var(--size)',
          y,
          x
        } as React.CSSProperties}
      />
    </div>
  );
};

export default Pattern;
