import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
const Navbar = () => {
    const [navbarHidden, setNavbarHidden] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) { // Adjust the scroll threshold as needed
                setNavbarHidden(false);
            } else {
                setNavbarHidden(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Check the scroll position on initial load
        handleScroll();

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section className={`navbar h-20 ${navbarHidden ? 'navbar-hidden' : 'navbar-visible'} justify-between text-white font-light text-2xl items-center px-20 bg-[#00000060] backdrop-blur-xl rounded-br-full rounded-bl-full z-10`}>
                <div className="flex justify-between  gap-10 tracking-wider ">
                    <p>
                        Home
                    </p>
                    <p>About</p>
                    <p>Services</p>
                </div>
                <img className='object-contain w-1/5' src={logo} alt="Logo" />
                <div className="flex justify-between gap-10">
                    <p>Work</p>
                    <p>Process</p>
                    <p>Contact</p>
                </div>
            </section>
        </>

    );
};

export default Navbar;
