"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import HireMeButton from './HireMeButton';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import InteractiveGrid from './InteractiveGrid';
import { Header_N_Footer } from '@/data/portfolioData';
import Link from 'next/link';

export default function Header() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
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
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
      className="  relative my-16 gap-10 md:gap-0"
    >
      <div id="left" className="flex-1 flex flex-col items-center space-y-6">
        <div className="text-4xl">{`Hi👋, I'm`}</div>
        <h1 className="md:text-7xl text-5xl">Kishor <span className="text-[#E0F7FA]">Nishad</span></h1>
        <h3 className="text-xl md:text-2xl flex gap-1">
          I am a <br />
          <TypeAnimation
            sequence={[
              'Software Developer',
              1000,
              'Web Developer',
              1000,
              'MERN Stack Developer',
              1000,
              'DevOps Engineer',
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-[#A3EBB1]"
          />
        </h3>
        <div className="social flex space-x-4 text-lavender">
          {
            Header_N_Footer && Header_N_Footer.social.map((item, id) => (
              <Link key={id} href={item.link}>{(item.name === 'linkedin' && <FaLinkedin />) || (item.name === 'twitter' && <FaTwitter />) || (item.name === 'gmail' && <MdEmail />)}</Link>
            ))
          }
        </div>
        <HireMeButton onClick={() => window.location.href = '#contact'} />
      </div>
      <div id="right" className="relative flex-1 flex justify-center items-center py-20 bg-no-repeat bg-center bg-cover" >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='md:w-[70%] w-[100%] absolute z-10'>
          <path fill="#FF0066" d="M59.3,-22.3C64.6,-2.8,48.3,20.6,26.8,36C5.3,51.4,-21.4,58.8,-38.2,47.7C-55.1,36.6,-62.1,7.1,-54.1,-16.1C-46.1,-39.2,-23,-56,2,-56.6C27,-57.2,53.9,-41.8,59.3,-22.3Z" transform="translate(100 100)" />
          <image href="/assets/HeaderImg.png" x="50" y="30" height="100px" width="100px" />
        </svg>
        <InteractiveGrid />
      </div>



    </motion.section>
  );
}
