// import React, { useState, useEffect } from 'react';

// const ServiceCard = ({ serviceName, serviceDetail, subCategories = [], index, totalCards }) => {
//     const [style, setStyle] = useState({ opacity: 1, transform: 'scale(1)' });

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY;
//             const windowHeight = window.innerHeight;
//             const cardHeight = windowHeight * 1.3; 
//             const cardStartPosition = index * (windowHeight ); 
//             const cardEndPosition = cardStartPosition + cardHeight;

//             let newOpacity = 1;
//             let newScale = 1;

//             if (scrollPosition > cardStartPosition && scrollPosition < cardEndPosition) {
//                 const progress = (scrollPosition - cardStartPosition) / cardHeight;
//                 newOpacity = 0.9 - progress;
//                 newScale = 1 - progress * 0.2; // Adjust the scale factor as needed
//             } else if (scrollPosition >= cardEndPosition) {
//                 newOpacity = 0;
//                 newScale = 1; // Minimum scale
//             }

//             setStyle({ opacity: newOpacity, transform: `scale(${newScale})` });
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll(); // Run on mount to set initial styles

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [index]);

//     return (
//         <div
//             id={`card-${index}`}
//             className={`service-card flex w-11/12 h-[80vh] p-10 bg-[#00000081] backdrop-blur-sm rounded-3xl justify-between items-center gap-10 my-5 sticky top-28`}
//             style={style}
//         >
//             <div className='flex flex-col w-1/2 text-justify gap-10'>
//                 <p className='text-6xl text-white outfit font-semibold'>{serviceName}</p>
//                 <p className='text-stone-200 outfit font-light text-xl'>{serviceDetail}</p>
//                 <div className='flex flex-wrap gap-3 outfit font-light'>
//                     {subCategories.map((cat, i) => (
//                         <p key={i} className='border border-[#fde000] text-white px-4 py-2 rounded-full font-medium'>
//                             {cat}
//                         </p>
//                     ))}
//                 </div>
//             </div>
//             <div className='h-full w-1/3 bg-[#ffffff0a] rounded-3xl grid place-items-center'>
//                 <p className='text-white outfit text-xl'>Image here.</p>
//             </div>
//         </div>
//     );
// };

// export default ServiceCard;


import React, { useState, useEffect } from 'react';

const ServiceCard = ({ serviceName, serviceDetail, subCategories = [], index, totalCards }) => {
    const [style, setStyle] = useState({ opacity: 1, transform: 'scale(1)' });

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const cardHeight = windowHeight * 1.3; 
            const cardStartPosition = index * (windowHeight ); 
            const cardEndPosition = cardStartPosition + cardHeight;

            let newOpacity = 1;
            let newScale = 1;

            if (scrollPosition > cardStartPosition && scrollPosition < cardEndPosition) {
                const progress = (scrollPosition - cardStartPosition) / cardHeight;
                newOpacity = 0.9 - progress;
                newScale = 1 - progress * 0.2; // Adjust the scale factor as needed
            } else if (scrollPosition >= cardEndPosition) {
                newOpacity = 0;
                newScale = 1; // Minimum scale
            }

            setStyle({ opacity: newOpacity, transform: `scale(${newScale})` });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run on mount to set initial styles

        return () => window.removeEventListener('scroll', handleScroll);
    }, [index]);

    return (
        <div
            id={`card-${index}`}
            className={`service-card flex flex-col-reverse md:flex-row w-full md:w-11/12 h-full md:h-[80vh] p-5 md:p-10 bg-black md:bg-[#00000081] backdrop-blur-sm rounded-3xl justify-between items-center gap-5 md:gap-10 my-5 md:my-10 sticky top-20 md:top-28`}
            style={style}
        >
            <div className='flex flex-col w-full md:w-1/2 text-justify gap-5 md:gap-10'>
                <p className='text-4xl md:text-6xl text-white outfit font-semibold'>{serviceName}</p>
                <p className='text-stone-200 outfit font-light text-lg md:text-xl'>{serviceDetail}</p>
                <div className='flex flex-wrap gap-2 md:gap-3 outfit font-light'>
                    {subCategories.map((cat, i) => (
                        <p key={i} className='border border-[#fde000] text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-medium'>
                            {cat}
                        </p>
                    ))}
                </div>
            </div>
            <div className='h-[30vh] md:h-full w-full md:w-1/3 bg-[#ffffff0a] rounded-3xl grid place-items-center'>
                <p className='text-white outfit text-lg md:text-xl'>Image here.</p>
            </div>
        </div>
    );
};

export default ServiceCard;
