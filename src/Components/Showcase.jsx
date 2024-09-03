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

const Showcase = () => {
    return (
        <section className='h-full w-full py-10'>
            <Marquee
                loop={1}
                autoFill={true}
                className='sticky top-0 overflow-hidden outfit text-9xl text-[#fddf00a8] font-black'> SHOWCASE <span className='text-[#fddf00cb] text-8xl'>&nbsp;●&nbsp; </span>
            </Marquee>
            <br />
            <Marquee
                loop={0}
                autoFill={true}
                direction='right'
                speed={30}
                className='outfit text-8xl text-[#fddf006c] font-black'>
                <div className='flex gap-10'>
                    <img className='ml-20 w-80 h-80 object-cover object-top rounded-3xl' src={image1} alt="" />
                    <img className='w-80 h-80 object-cover object-top rounded-3xl' src={image2} alt="" />
                    <img className='w-80 h-80 object-cover object-top rounded-3xl' src={image3} alt="" />
                    <img className='w-80 h-80 object-cover object-top rounded-3xl' src={image4} alt="" />
                </div>
            </Marquee>
            <br />
            <Marquee
                loop={0}
                autoFill={true}
                direction='left'
                speed={30}
                className='outfit text-8xl text-[#fddf006c] font-black'>
                <div className='flex gap-10'>
                    <img className='ml-10 w-80 h-80 object-cover object-top rounded-3xl' src={image5} alt="" />
                    <img className='w-80 h-80 object-cover object-top rounded-3xl' src={image6} alt="" />
                    <img className='w-80 h-80 object-cover object-top rounded-3xl' src={image7} alt="" />
                    <img className='w-80 h-80 object-cover object-top rounded-3xl' src={image8} alt="" />
                </div>
            </Marquee>
<br />
        </section>
    )
}

export default Showcase