// import React from 'react';
// import { motion } from 'framer-motion';
// import logo from '../assets/logo.png';
// import { FaArrowRight } from "react-icons/fa";
// import useScrollOpacity from '../hooks/useScrollOpacity';
// const Lander = () => {
//     const opacity = useScrollOpacity(0, 500);

//     return (
//         <section className='lander-bg h-screen w-full flex items-center flex-col justify-center gap-16 lg:gap-20 p-5lg:p-10' style={{ opacity }}>
//             <img className='w-1/2 lg:w-1/4' src={logo} alt="" />
//             <div className='text-8xl lg:text-9xl text-center text-white outfit uppercase font-black lander-text-bg'>
//                 <motion.p
//                     className="experienced"
//                     initial={{ y: "0%", opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
//                 >
//                     Experienced
//                 </motion.p>
//                 <motion.p
//                     className='design text-[#fde000] -skew-x-12'
//                     initial={{ y: "0%", skewX: "0deg", opacity: 0 }}
//                     animate={{ y: 0, skewX: "-10deg", opacity: 1 }}
//                     transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
//                 >
//                     Design
//                 </motion.p>
//                 <motion.p
//                     className="studio"
//                     initial={{ scale: 0, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
//                 >
//                     STUDIO.
//                 </motion.p>
//             </div>
//             <div className='absolute top-20 right-20 flex justify-center items-center amsterdam text-white contact-spinner hover:scale-110 hover:rotate-[135deg] transition-all duration-500'>
//                 <div className='h-20 w-20 p-5 rounded-full bg-[#fddf0081] text-[#ffffffa2] backdrop-blur-sm hover:scale-110' >
//                     <FaArrowRight className='spinner-arrow h-full w-full -rotate-[45deg]' />
//                 </div>
//                 <svg className="h-28 absolute w-28 text-white spinner" viewBox="0 0 100 100">
//                     <path
//                         id="contactPath"
//                         d="M50,10 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80"
//                         fill="transparent"
//                     />
//                     <text>
//                         <textPath xlinkHref="#contactPath" startOffset="50%" textAnchor="middle">
//                             Contact Us • Contact Us • Contact Us •
//                         </textPath>
//                     </text>
//                 </svg>
//             </div>
//         </section>
//     );
// };

// export default Lander;


import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { FaArrowRight } from "react-icons/fa";
import useScrollOpacity from '../hooks/useScrollOpacity';

const Lander = () => {
    const opacity = useScrollOpacity(0, 500);

    return (
        <section className='lander-bg h-screen w-full flex items-center flex-col justify-center gap-12 lg:gap-16 p-4 lg:p-8' style={{ opacity }}>
            <img className='w-3/4 md:w-1/2 lg:w-1/4' src={logo} alt="Logo" />
            <div className='text-5xl md:text-6xl lg:text-9xl text-center text-white outfit uppercase font-black lander-text-bg'>
                <motion.p
                    className="experienced"
                    initial={{ y: "0%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                >
                    Experienced
                </motion.p>
                <motion.p
                    className='design text-[#fde000] -skew-x-6 md:-skew-x-8 lg:-skew-x-12'
                    initial={{ y: "0%", skewX: "0deg", opacity: 0 }}
                    animate={{ y: 0, skewX: "-10deg", opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
                >
                    Design
                </motion.p>
                <motion.p
                    className="studio"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
                >
                    STUDIO.
                </motion.p>
            </div>
            <div className='absolute top-10 right-10 md:top-12 md:right-12 lg:top-20 lg:right-20 flex justify-center items-center amsterdam text-white contact-spinner hover:scale-110 hover:rotate-[135deg] transition-all duration-500'>
                <div className='h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 p-4 rounded-full bg-[#fddf0081] text-[#ffffffa2] backdrop-blur-sm hover:scale-110'>
                    <FaArrowRight className='spinner-arrow h-full w-full -rotate-[45deg]' />
                </div>
                <svg className="h-24 md:h-28 lg:h-32 absolute w-24 md:w-28 lg:w-32 text-white spinner" viewBox="0 0 100 100">
                    <path
                        id="contactPath"
                        d="M50,10 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80"
                        fill="transparent"
                    />
                    <text>
                        <textPath xlinkHref="#contactPath" startOffset="50%" textAnchor="middle">
                            Contact Us • Contact Us • Contact Us •
                        </textPath>
                    </text>
                </svg>
            </div>
        </section>
    );
};

export default Lander;
