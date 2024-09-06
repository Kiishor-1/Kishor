"use client"
import { TagCloud } from '@frank-mayer/react-tag-cloud';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/data/portfolioData';

export default function SkillsSection() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const fadeInVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    return (
        <section id="skills" className="mb-16 mt-6">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInVariants}
                className="box"
            >
                <h2 className="text-2xl md:text-4xl font-bold mb-6" id="heading">
                    {skills.heading.toUpperCase()}
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={fadeInVariants}
                        className="skillHeading flex-1"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">
                            {skills.subHeading}
                        </h3>
                        <p className="job_seek text-lg">
                            {skills.description}
                        </p>
                    </motion.div>
                    <div className="Sphere flex-1 flex justify-center items-center relative z-[8]">
                        <TagCloud
                            options={(w) => ({
                                radius: Math.min(450, w.innerWidth * 0.8, w.innerHeight * 0.5) / 2,
                                maxSpeed: "fast",
                            })}
                            itemStyle={() => ({
                                color: "black",
                                fontSize: "20px",
                                fontWeight: "bold",
                            })}
                        >
                            {[
                                ...skills.cloudTags
                            ]}
                        </TagCloud>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
