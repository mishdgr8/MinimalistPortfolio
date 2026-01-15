import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectCard from '../components/ProjectCard';
import Lightbox from '../components/Lightbox';

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(PROJECTS.map(p => p.category))];
    return ['All', ...cats.sort()];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const handleQuickPreview = (project: Project) => {
    setLightboxProject(project);
  };

  return (
    <main className="pt-48 pb-20 px-6 md:px-14 lg:px-28 xl:px-44 max-w-[1920px] mx-auto">
      <header className="mb-16 md:mb-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-12 md:mb-20 w-full tracking-tight text-left leading-[1.4]"
          style={{ lineHeight: '1.4' }}
        >
          I'm <span className="text-black">Yomamoto</span>—a motion designer and animation director with a focus on <span className="text-gray-400">branding, UX-UI, and storytelling.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center w-full"
        >
          <button className="px-8 md:px-12 py-3 md:py-4 rounded-full border-2 border-black text-base md:text-lg font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-500">
            Portfolio
          </button>
        </motion.div>
      </header>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16"
      >
        {categories.map((category, i) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + i * 0.05 }}
            className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 ${activeFilter === category
              ? 'bg-black text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Project Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="break-inside-avoid mb-4"
            >
              <ProjectCard project={project} onQuickPreview={handleQuickPreview} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-400 text-xl py-20"
        >
          No projects found in this category.
        </motion.p>
      )}

      {/* Lightbox */}
      <Lightbox
        project={lightboxProject}
        isOpen={!!lightboxProject}
        onClose={() => setLightboxProject(null)}
      />
    </main>
  );
};

export default Home;