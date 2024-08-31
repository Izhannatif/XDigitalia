import React from 'react'
import logo from '../assets/logo.png'
const Lander = () => {
    return (

        <section className='lander-bg h-screen w-full sticky flex items-center flex-col justify-evenly gap-5 p-10'>
            <img className='w-1/4' src={logo} alt="" />
            <div className='text-9xl text-center outfit uppercase font-black '>
                <p className='lander-text-bg'>Experienced</p>
                <p className='text-[#fde000] -skew-x-12'>Design</p>
                <p className='lander-text-bg'>STUDIO.</p>
            </div>
        </section>
    )
}

export default Lander