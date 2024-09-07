import React from 'react'
import logo from '../assets/logo.png'
import { BsTwitterX } from 'react-icons/bs'
import { GoArrowUpRight } from "react-icons/go";
import Marquee from 'react-fast-marquee';
const Footer = () => {
    return (
        <>
            <div className='w-full h-max bg-gradient-to-b from-transparent to-black flex from-10% to-80% flex-col py-10 gap-16'>
                <div className='w-full overflow-hidden border-t border-b border-white'>
                    <Marquee speed={90} loop={0} autoFill className='py-3 italic text-white text-8xl outfit tracking-tight'>HAVE A PROJECT IN MIND ?&nbsp;<span className='text-[#fde000] amsterdam tracking-wide text-9xl not-italic'>&nbsp;Reach Out To Us.&nbsp;</span></Marquee>
                </div>
                <section className='px-20 pb-10 w-full outfit flex '>
                    <div className='w-full flex flex-col gap-10'>
                        <img src={logo} alt="" className='w-1/3 object-contain' />

                        <div className='flex gap-5 text-xl text-white font-extralight tracking-tighter'>
                            <div className='flex justify-center items-center gap-1'>
                                <p>LinkedIn</p>
                                <GoArrowUpRight />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <p>Instagram</p>
                                <GoArrowUpRight />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <p>Facebook</p>
                                <GoArrowUpRight />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <BsTwitterX />
                                <GoArrowUpRight />
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col items-end justify-start text-white font-extralight tracking-tighter pt-5'>
                        <div className='text-white pb-3 text-7xl font-light '>
                            hello@xdigitalia.com
                        </div>
                        <div className='text-lg text-stone-300 font-normal'>
                            © 2024 XDigitalia
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Footer