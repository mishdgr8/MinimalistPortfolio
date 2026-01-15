import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

interface LightboxProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ project, isOpen, onClose }) => {
    // Handle Escape key
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, handleKeyDown]);

    return (
        <AnimatePresence>
            {isOpen && project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-xl"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 text-white/80 hover:text-white transition-colors z-10"
                        aria-label="Close lightbox"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-[90vw] max-w-6xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Project Info */}
                        <div className="mb-6">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>
                            <p className="text-white/60 text-lg">{project.subtitle}</p>
                        </div>

                        {/* Video */}
                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
                            <video
                                src={project.videoUrl}
                                className="w-full h-full object-cover"
                                controls
                                autoPlay
                                muted
                                loop
                            />
                        </div>

                        {/* Category Badge */}
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                                {project.category}
                            </span>
                            <span className="text-xs text-white/40">
                                Press ESC to close
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Lightbox;
