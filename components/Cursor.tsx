
import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const Cursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth, lagging motion
  const ringX = useSpring(mouseX, { stiffness: 250, damping: 30 });
  const ringY = useSpring(mouseY, { stiffness: 250, damping: 30 });

  const dotX = useSpring(mouseX, { stiffness: 1200, damping: 50 });
  const dotY = useSpring(mouseY, { stiffness: 1200, damping: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-hover], video, .group, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Ultra-Minimal Red Ring with Yellow Outline */}
      {/* Scale is now fixed at 1 to prevent size increase during scrolling */}
      <motion.div
        className="absolute top-0 left-0 w-3.5 h-3.5 border border-yellow-200 rounded-full bg-red-600 shadow-sm"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          scale: 1,
        }}
      />

      {/* High-precision center point */}
      <motion.div
        className="absolute top-0 left-0 w-[1px] h-[1px] bg-yellow-300 rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isHovering ? 0 : 1,
        }}
      />
      
      {/* Dynamic Scroll Label */}
      <motion.div
        animate={{ opacity: isScrolling ? 1 : 0, scale: isScrolling ? 1 : 0.8 }}
        className="absolute top-0 left-0 text-[5px] font-black uppercase tracking-[0.3em] text-red-600"
        style={{
          x: dotX,
          y: dotY,
          translateX: '10px',
          translateY: '-50%',
        }}
      >
        Scroll
      </motion.div>
    </div>
  );
};

export default Cursor;
