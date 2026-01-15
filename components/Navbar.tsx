
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.4 }
    })
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-[100] flex justify-between items-center px-6 md:px-14 lg:px-44 py-8 md:py-12 bg-transparent pointer-events-none">
        <div className="pointer-events-auto">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-black">EC.</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-12 lg:space-x-24 xl:space-x-32 pointer-events-auto items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xl font-normal text-black transition-opacity duration-300 hover:opacity-100 ${location.pathname === link.path ? 'opacity-100' : 'opacity-40'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden pointer-events-auto p-2 z-[110]"
          aria-label="Open menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className="w-full h-[2px] bg-black transition-all" />
            <span className="w-full h-[2px] bg-black transition-all" />
            <span className="w-2/3 h-[2px] bg-black transition-all ml-auto" />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[150] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white z-[200] shadow-2xl md:hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-6 p-2"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Menu Links */}
              <nav className="flex flex-col pt-24 px-8 space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-3xl font-bold tracking-tight transition-opacity duration-300 ${location.pathname === link.path ? 'opacity-100' : 'opacity-40'}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Section */}
              <div className="absolute bottom-12 left-8 right-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">Get in touch</p>
                <a href="mailto:hello@ecolombo.com" className="text-lg font-medium hover:opacity-50 transition-opacity">
                  hello@ecolombo.com
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
