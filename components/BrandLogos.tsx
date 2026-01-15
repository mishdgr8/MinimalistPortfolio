import React from 'react';
import { motion } from 'framer-motion';
import { BRANDS } from '../constants';

const BrandLogos: React.FC = () => {
    return (
        <section className="py-6 md:py-8 overflow-hidden bg-white w-full">
            <div className="px-6 md:px-14 lg:px-28 xl:px-44 max-w-[1920px] mx-auto w-full">
                <div className="mb-12 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black">
                        Clients I have worked with<span className="text-red-500">.</span>
                    </h3>
                </div>

                <div className="w-full space-y-10">
                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-between items-center gap-y-8">
                        {BRANDS.slice(0, 5).map((brand, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex justify-center md:justify-start grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="h-10 md:h-14 w-auto object-contain max-w-[140px]"
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-between items-center gap-y-8">
                        {BRANDS.slice(5, 10).map((brand, i) => (
                            <motion.div
                                key={i + 5}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i + 5) * 0.05 }}
                                className="flex justify-center md:justify-start grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="h-10 md:h-14 w-auto object-contain max-w-[140px]"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandLogos;
