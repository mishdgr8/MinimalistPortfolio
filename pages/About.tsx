
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-20 px-14 md:px-28 lg:px-44 max-w-[1400px] mx-auto"
    >
      <header className="mb-24">
        <h1 
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-12 leading-[1.4]"
          style={{ lineHeight: '1.4' }}
        >
          I shape the <span className="text-gray-300 italic font-light">future</span> of digital motion.
        </h1>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-8">
          <p className="text-2xl md:text-4xl font-light leading-relaxed text-gray-800">
            Based in Milan, I help brands and agencies create memorable experiences through animation, storytelling, and interactive design. My approach is rooted in simplicity, timing, and emotion.
          </p>
          <div className="mt-16 space-y-12">
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
              With over 10 years of experience, I've had the pleasure of working with clients like Google, YouTube, and various luxury fashion houses, bringing a unique blend of technical precision and artistic vision to every project.
            </p>
          </div>
        </div>
        <div className="md:col-span-4 border-l border-gray-100 pl-8 pt-2">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Expertise</h3>
          <ul className="space-y-4 text-xl font-medium">
            <li>Motion Direction</li>
            <li>UX/UI Animation</li>
            <li>2D/3D Storytelling</li>
            <li>Interactive Prototypes</li>
            <li>Brand Guidelines</li>
          </ul>
        </div>
      </div>
    </motion.main>
  );
};

export default About;
