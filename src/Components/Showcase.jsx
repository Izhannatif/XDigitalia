import React from 'react'
import Marquee from 'react-fast-marquee'
import image1 from '../assets/portfolio/1.png'
import image2 from '../assets/portfolio/2.png'
import image3 from '../assets/portfolio/3.png'
import image4 from '../assets/portfolio/4.png'
import image5 from '../assets/portfolio/5.png'
import image6 from '../assets/portfolio/6.png'
import image7 from '../assets/portfolio/7.png'
import image8 from '../assets/portfolio/8.png'
import {motion} from 'framer-motion'
import { GoArrowUpRight } from 'react-icons/go'
const Showcase = () => {
    return (
        <section className='h-full w-full py-10'>
            <Marquee
                loop={1}
                autoFill={true}
                className='sticky top-0 overflow-hidden outfit text-5xl md:text-9xl text-[#fddf00a8] font-black'> SHOWCASE <span className='text-[#fddf00cb] text-4xl'>&nbsp;●&nbsp; </span>
            </Marquee>
            <br />
            <Marquee
                loop={0}
                autoFill={true}
                direction='right'
                speed={30}
                className='outfit text-8xl text-[#fddf006c] font-black'>
                <div className='flex gap-5 md:gap-10'>
                    <img className='ml-20 w-60 h-60 md:w-80 md:h-80 object-cover object-top rounded-3xl' src={image1} alt="" />
                    <img className='w-60 h-60 md:w-80 md:h-80 object-cover object-top rounded-3xl' src={image2} alt="" />
                    <img className='w-60 h-60 md:w-80 md:h-80 object-cover object-top rounded-3xl' src={image3} alt="" />
                    <img className='w-60 h-60 md:w-80 md:h-80 object-cover object-top rounded-3xl' src={image4} alt="" />
                </div>
            </Marquee>
            <br />
            <Marquee
                loop={0}
                autoFill={true}
                direction='left'
                speed={30}
                className='outfit text-8xl text-[#fddf006c] font-black'>
                <div className='flex gap-5 md:gap-10'>
                    <img className='ml-10 w-60 h-60 md:w-80 md:h-80 object-cover object-top rounded-3xl' src={image5} alt="" />
                    <img className='w-60 h-60 md:w-80 md:h-80 object-cover object-top rounded-3xl' src={image6} alt="" />
                    <img className='w-60 h-60 md:w-80 md:h-80 object-cover object-top rounded-3xl' src={image7} alt="" />
                    <img className='w-60 h-60 md:w-80 md:h-80 object-cover object-top rounded-3xl' src={image8} alt="" />
                </div>
            </Marquee>
            <br />
            <motion.div className=' my-5 group w-full flex justify-center items-center text-center text-2xl py-5 font-semibold text-black outfit bg-[#fde000] hover:tracking-widest duration-300 gap-2 hover:gap-5'>
                <p>Explore Portfolio </p>
                <span><GoArrowUpRight className='h-8 w-8 text-[#fde000] bg-black rounded-full p-1 group-hover:rotate-45 duration-300' /></span>
            </motion.div>
        </section>
    )
}

export default Showcase