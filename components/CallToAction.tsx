import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
    return (
        <section className="py-8 md:py-16 w-full text-center md:text-left">
            <div className="px-6 md:px-14 lg:px-28 xl:px-44 max-w-[1920px] mx-auto w-full">
                <div className="max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-12 leading-[1.1]"
                    >
                        Have a project in mind? <br />
                        <span className="text-gray-400">Let's build something iconic.</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-block px-10 py-5 rounded-full bg-black text-white text-lg md:text-xl font-bold tracking-wider uppercase hover:bg-gray-800 transition-all duration-300"
                        >
                            Start a Project
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
