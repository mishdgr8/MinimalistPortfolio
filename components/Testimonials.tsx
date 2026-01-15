import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section className="py-12 md:py-20 w-full bg-gray-50 text-black">
            <div className="px-6 md:px-14 lg:px-28 xl:px-44 max-w-[1920px] mx-auto w-full">
                <div className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black">
                        Feedback<span className="text-red-500">.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {TESTIMONIALS.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className="flex flex-col justify-between px-6 md:px-10"
                        >
                            <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
                                "{review.text}"
                            </p>
                            <div>
                                <p className="text-sm font-bold uppercase tracking-wide">{review.author.split(',')[0]}</p>
                                <p className="text-xs text-gray-500 mt-1">{review.author.split(',')[1]}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
