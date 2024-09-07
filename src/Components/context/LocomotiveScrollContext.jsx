import React, { createContext, useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export const LocomotiveScrollContext = createContext(null);

export const LocomotiveScrollProvider = ({ children }) => {
    const [scroll, setScroll] = useState(null);

    useEffect(() => {
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            multiplier: 1,
        });

        setScroll(locoScroll);

        return () => {
            locoScroll.destroy();
        };
    }, []);

    return (
        <LocomotiveScrollContext.Provider value={{ scroll }}>
            {children}
        </LocomotiveScrollContext.Provider>
    );
};
