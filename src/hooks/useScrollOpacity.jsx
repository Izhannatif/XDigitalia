import { useEffect, useState } from 'react';

const useScrollOpacity = (startOffset = 0, endOffset = 1000) => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            const start = startOffset;
            const end = startOffset + endOffset;
            let newOpacity = 1;

            if (scrollPosition >= start && scrollPosition <= end) {
                newOpacity = 1 - (scrollPosition - start) / (end - start);
            } else if (scrollPosition > end) {
                newOpacity = 0;
            }

            setOpacity(Math.max(0, Math.min(1, newOpacity)));
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [startOffset, endOffset]);

    return opacity;
};

export default useScrollOpacity;
