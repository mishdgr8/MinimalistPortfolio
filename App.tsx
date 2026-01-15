
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative selection:bg-black selection:text-white bg-white min-h-screen">
        <Cursor />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
