import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import { contactData } from '@/data/portfolioData';

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', msg: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xyyqokzq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Your message has been sent successfully!');
        setFormData({ name: '', email: '', msg: '' });
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    } catch (error) {
      toast.error('Failed to send. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
      className="container mx-auto my-16"
      id="contact"
    >
      <Toaster /> {/* This will render toast notifications */}
      <h1 className="text-2xl md:text-4xl font-bold my-3">{contactData.heading.toLocaleUpperCase()}</h1>
      <p className="mb-12 text-slate-400">
       {contactData.description}
      </p>
      <div className="flex flex-col md:flex-row items-start gap-8 p-3 mt-10">
        <div className="flex-1 flex flex-col items-center justify-center gap-10">
          <p className="text-lg font-semibold">
            Fill in your info in the form and I look forward to hearing from you!
          </p>
          <Image className="w-[25rem]" width={400} height={400} src={"/assets/contactMe.png"} alt="Contact me" />
        </div>
        <div className="flex-1 w-full">
          <form onSubmit={handleSubmit} className="space-y-4 text-gray-600">
            <div>
              <label htmlFor="name" className="block font-semibold">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border-2 rounded-lg border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border-2 rounded-lg border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="msg" className="block font-semibold">Your Message</label>
              <textarea
                name="msg"
                id="msg"
                cols="30"
                rows="8"
                value={formData.msg}
                onChange={handleInputChange}
                required
                className="w-full p-3 border-2 rounded-lg border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`form_submit w-full md:w-[fit-content] py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
