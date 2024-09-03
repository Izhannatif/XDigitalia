import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';


const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once when in view
        threshold: 0.1,    // Trigger when 10% of the section is in view
    });
    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 :0}}
            transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
            className='px-10 py-5 outfit flex flex-col md:flex-row justify-start gap-5 md:gap-10 '>
            <p className='text-[#fde000] drop-shadow-2xl text-4xl amsterdam text-nowrap '>Something about us </p>
            <p className='text-[#fde000] drop-shadow-2xl text-4xl amsterdam'>-</p>
            <p className='text-white text-2xl font-light  drop-shadow-2xl'>Lorem ipsum dolor sit amet consetetur adipisicing elit. Dolorum repudiandae quidem quibusdam doloribus aliquam! Magnam placeat et, accusamus repudiandae eos adipisci tempora in voluptatum? Voluptate aut sit maxime labore hic?</p>
        </motion.section>
    )
}

export default About