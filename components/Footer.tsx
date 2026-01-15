
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', { hour12: false });
  const formattedDate = time.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const socials = [
    {
      name: 'LinkedIn',
      url: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-4.78 2.618-4.803 6.11-.023 3.492.001 8.63 4.803 8.833 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.358-.2 4.78-2.618 4.803-6.11.023-3.492-.001-8.63-4.803-8.833-1.28-.058-1.688-.072-4.947-.072z" />
          <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: 'Dribbble',
      url: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-2.47-.746-4.998-.342.102.26.204.52.298.792.273.787.483 1.58.636 2.348 1.93-1.276 3.472-3.647 4.064-6.398-.19.123-.393.242-.603.354-.253.136-.516.26-.792.373zm-8.342-7.108c1.325 1.31 2.442 2.99 3.22 4.794.274-.112.538-.243.79-.374.208-.112.413-.23.606-.356C16.853 8.356 14.545 6.942 12.015 6.5c-.005.012-.01.025-.016.037-.08.196-.153.393-.223.595zm-4.322.846c-.05.105-.1.21-.148.318-.54 1.144-.933 2.34-1.173 3.556-2.825-.514-5.49-.143-5.564-.132.32 1.637 1.05 3.127 2.062 4.346.012-.006 1.97-.732 4.418-.36.074-.188.155-.373.235-.557.346-.775.744-1.507 1.185-2.186-1.077-2.613-1.933-5.352-2.015-6.17-.354.12-.693.256-1.01.405zm-3.09 11.53c.53.47 1.11.89 1.73 1.25.108-1.55.33-3.13.684-4.665-2.1-.312-3.87.16-4.14.24.415 1.24 1.01 2.37 1.74 3.355l-.014-.18zm6.52 2.45c-.32.03-.64.04-.97.04-1.92 0-3.69-.53-5.19-1.44-.012.006-.025.013-.038.02-.128.062-1.265.613-1.29 1.7.34.25.7.47 1.08.66.42.21.86.39 1.32.53.18-.53.42-1.03.73-1.49 1.55.15 3.01-.2 4.35-.61zm1.26-10.846c.113.25.223.51.332.77.83 1.94 1.45 3.84 1.86 5.64 2.16-.27 3.98.2 4.22.27-.08-2.68-1.24-5.1-3.15-6.86-.68 1.54-1.63 2.97-2.76 4.28-.15.19-.3.38-.45.57.17-.21.32-.44.47-.67z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="py-32 px-20 md:px-44 border-t border-gray-100 flex flex-col items-center text-center space-y-20">
      {/* Primary CTA */}
      <div className="space-y-10 max-w-6xl">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight whitespace-normal md:whitespace-nowrap">
          Let's bring your ideas to life.
        </h2>
        <div className="flex justify-center">
          <button className="px-12 py-4 rounded-full border-2 border-black text-lg font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-500">
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex items-center space-x-10 md:space-x-16">
        {socials.map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-colors duration-300 flex flex-col items-center group"
            whileHover={{ y: -5 }}
          >
            <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
              {social.icon}
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {social.name}
            </span>
          </motion.a>
        ))}
      </div>
      
      {/* Date and Time Footer */}
      <div className="flex flex-col items-center text-[10px] font-black text-gray-400 tracking-[0.4em] uppercase">
        <span className="text-2xl text-black mb-3 tracking-normal font-medium">{formattedTime}</span>
        <span>{formattedDate}</span>
      </div>
    </footer>
  );
};

export default Footer;
