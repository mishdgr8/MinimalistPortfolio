
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-20 px-14 md:px-28 lg:px-44 max-w-[1400px] mx-auto min-h-[80vh] flex flex-col justify-center"
    >
      <div className="max-w-4xl">
        <h1 
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-16 leading-[1.4]"
          style={{ lineHeight: '1.4' }}
        >
          Get in <span className="text-gray-300">touch</span>.
        </h1>
        
        <div className="space-y-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email</p>
            <a href="mailto:hello@ecolombo.com" className="text-3xl md:text-6xl font-light hover:opacity-50 transition-opacity underline decoration-gray-200 underline-offset-8">
              hello@ecolombo.com
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Social</p>
              <ul className="space-y-2 text-xl font-medium">
                <li><a href="#" className="hover:opacity-50">LinkedIn</a></li>
                <li><a href="#" className="hover:opacity-50">Instagram</a></li>
                <li><a href="#" className="hover:opacity-50">Dribbble</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Location</p>
              <p className="text-xl font-medium">Milan, IT</p>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;
