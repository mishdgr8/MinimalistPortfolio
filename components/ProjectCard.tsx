import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onQuickPreview?: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onQuickPreview }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          if (entry.isIntersecting) {
            setHasBeenVisible(true);
          }
        });
      },
      {
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle video playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      // Small timeout to ensure src is set
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented
          // We can try muting and playing again or just ignore
        });
      }
    } else {
      video.pause();
    }
  }, [isVisible]);

  const handleContextMenu = (e: React.MouseEvent) => {
    if (onQuickPreview) {
      e.preventDefault();
      onQuickPreview(project);
    }
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 }
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    hover: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      ref={cardRef}
      initial="initial"
      whileHover="hover"
      className="relative w-full"
      onContextMenu={handleContextMenu}
    >
      <Link
        to={`/project/${project.id}`}
        className="group relative block w-full overflow-hidden rounded-[32px] bg-gray-100 transition-all duration-700 ease-[0.16, 1, 0.3, 1] hover:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        aria-label={`View ${project.title} project`}
      >
        {/* Media Container */}
        <div className="w-full relative overflow-hidden">
          {/* Skeleton loader */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse aspect-video" />
          )}

          {project.videoThumbnail ? (
            <video
              ref={videoRef}
              src={hasBeenVisible ? project.videoThumbnail : undefined}
              autoPlay={false}
              muted
              loop
              playsInline
              preload="none"
              onLoadedData={() => setIsLoaded(true)}
              className={`w-full h-auto block transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          ) : (
            <img
              src={project.thumbnail}
              alt={project.title}
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
              className={`w-full h-auto block transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          )}

          {/* Interaction Overlay: Blur + Title */}
          <motion.div
            variants={overlayVariants}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-xl p-8 text-center z-10"
          >
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-3 tracking-tight leading-tight">
                {project.title}
              </h3>
              <p className="text-[10px] font-black text-gray-900 uppercase tracking-[0.4em]">
                {project.category}
              </p>
              {onQuickPreview && (
                <p className="text-[8px] text-gray-500 mt-4 uppercase tracking-widest">
                  Right-click for quick preview
                </p>
              )}
            </motion.div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;