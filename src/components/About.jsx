import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { about } from '@/data/portfolioData';

const About = () => {
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
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
      className="mt-12"
      id="about"
    >
      <h1 className="text-2xl md:text-4xl font-bold my-3">{about.heading.toUpperCase()}</h1>
      <p className="text-slate-400 mb-8">
        {about.sectionDecription}
      </p>
      <div className="flex items-center flex-col md:flex-row justify-between gap-8">
        <aside className="flex-1 fle justify-center">
          <Image
            src={"/assets/AboutImage.png"}
            width={400} height={400}
            alt="Kishor Nishad"
            className="rounded-ful w-[400px] transition-all duration-1000"
            layout=''
          />
        </aside>
        <section className="flex-1 flex items-center justify-center">
          <div className="">
            <h2 className="md:text-2xl text-xl uppercase font-bold mb-4 text-lavender">{about.subHeading}</h2>
            <p className="text-md mb-4 text-slate-300">
              {about.description1}
            </p>
            <p className="text-md mb-4 text-slate-300">I also like sharing content related to the stuff that
              {about.description2}
            </p>
            <button className="resume px-8 py-3 rounded-3xl border border-2 border-blue-300" onClick={() => window.open(about.resumeLink, '_blank')}>Resume</button>
          </div>
        </section>
      </div>
    </motion.section>
  );
};

export default About;
