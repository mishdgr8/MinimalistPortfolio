
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <button 
          onClick={() => navigate('/')}
          className="px-8 py-3 rounded-full border border-black hover:bg-black hover:text-white transition-all"
        >
          Project not found. Go back.
        </button>
      </div>
    );
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-20 px-20 md:px-44 max-w-[1600px] mx-auto"
    >
      <header className="mb-24">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter"
        >
          {project.title}
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-3xl text-gray-400 font-medium"
        >
          {project.subtitle}
        </motion.p>
      </header>

      {/* Main Video Hero */}
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full aspect-video bg-black rounded-[56px] overflow-hidden mb-32 shadow-2xl"
      >
        <video 
          src={project.videoUrl} 
          className="w-full h-full object-cover" 
          controls 
          autoPlay 
          muted 
          loop
        />
      </motion.div>

      {/* Description and Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        <div className="lg:col-span-8 space-y-12">
          {project.description.map((text, i) => (
            <p key={i} className="text-2xl md:text-3xl leading-relaxed text-gray-800 font-light">
              {i === 0 && <span className="float-left text-8xl font-bold mr-6 leading-[0.8] text-black">{text.charAt(0)}</span>}
              {i === 0 ? text.slice(1) : text}
            </p>
          ))}
        </div>

        <div className="lg:col-span-4">
          <div className="space-y-10 sticky top-48">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-2">Client / Agency</p>
              <p className="text-2xl font-semibold tracking-tight">{project.client}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-2">My Role</p>
              <p className="text-2xl font-semibold tracking-tight">{project.role}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-2">Art Direction</p>
              <p className="text-2xl font-semibold tracking-tight">{project.artDirection}</p>
            </div>
            {project.music && (
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-2">Music</p>
                <p className="text-2xl font-semibold tracking-tight">{project.music}</p>
              </div>
            )}
            
            <div className="pt-10">
              <button 
                onClick={() => navigate('/')}
                className="group flex items-center space-x-4 text-sm font-bold tracking-widest uppercase"
              >
                <span className="w-12 h-[1px] bg-black transition-all group-hover:w-20"></span>
                <span>All Projects</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default ProjectDetail;
