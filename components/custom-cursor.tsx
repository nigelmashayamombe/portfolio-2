'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCursorStore } from '@/lib/store';

export function CustomCursor() {
  const { position, variant, setPosition } = useCursorStore();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [setPosition]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: variant === 'hover' ? 1.5 : variant === 'click' ? 0.8 : 1,
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
    >
      <div className="w-full h-full rounded-full bg-white" />
    </motion.div>
  );
}