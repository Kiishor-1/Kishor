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
        {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
          className='absolute top-[2rem z-10 w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]'>
          <path fill="#FF0066" d="M39.8,-36.4C55.9,-23.8,76.2,-11.9,79.8,3.7C83.5,19.2,70.5,38.4,54.5,48.9C38.4,59.4,19.2,61.2,1.9,59.3C-15.3,57.3,-30.7,51.7,-41.8,41.2C-52.9,30.7,-59.9,15.3,-61.7,-1.9C-63.6,-19.1,-60.4,-38.1,-49.3,-50.8C-38.1,-63.4,-19.1,-69.7,-3.6,-66.1C11.9,-62.5,23.8,-49.1,39.8,-36.4Z" transform="translate(100 100)" />
          <image href="/assets/HeaderImg.png" x="60" y="35" height="100px" width="100px" />
        </svg> */}
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
          className='absolute top-[2rem z-10 w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]'>
          <path fill="#FF0066" d="M45.8,-33.7C59.3,-19.6,70.2,-0.6,65.8,13.7C61.5,27.9,42,37.4,24,43.8C5.9,50.3,-10.8,53.7,-26.8,48.7C-42.8,43.7,-58.1,30.2,-61,14.7C-63.9,-0.8,-54.4,-18.3,-42.2,-32.1C-29.9,-45.9,-15,-56,0.6,-56.5C16.2,-57,32.3,-47.8,45.8,-33.7Z" transform="translate(100 100)" />
          <image href="/assets/HeaderImg.png" x="50" y="25" height="110px" width="110px" />
        </svg>
        <InteractiveGrid />
      </div>
    </motion.section>
  );
}
