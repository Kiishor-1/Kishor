"use client"
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Header_N_Footer } from "@/data/portfolioData";

const Footer = () => {
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
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <motion.footer
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            className=" text-lavender px-4 py-10 mt-10"
        >
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex-1">
                    <h2 className="font-bold text-xl">{Header_N_Footer.brand}</h2>
                    <p>{Header_N_Footer.profileSummary}</p>
                </div>
                <div className="flex-1 text-center">
                    <h2 className="font-bold text-xl">Social</h2>
                    <div className="flex justify-center space-x-4 mt-4">
                        {
                            Header_N_Footer && Header_N_Footer.social.map((item,id)=>(
                                <Link key={id} href={item.link}>{(item.name === 'linkedin' && <FaLinkedinIn/>) || (item.name === 'twitter' && <FaTwitter/>) || (item.name === 'gmail' && <MdEmail/>)}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-full h-1 bg-slate-300 opacity-50 mt-10"></div>
            <div className="text-center mt-4">&copy; All rights reserved | Kishor Nishad</div>
        </motion.footer>
    );
};

export default Footer;

