import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
const Services = () => {
    return (
        <section className='flex flex-col justify-center items-center h-full px-2 md:px-10 py-5'>
            <p className='text-left w-full text-7xl text-[#fde000] amsterdam py-10'>What we really do</p>
            
            <ServiceCard
                index={1}
                serviceName='Branding'
                serviceDetail='Building strong, memorable brand identities that resonate with your target audience. Our branding services include logo design, brand strategy, and visual identity creation.'
                subCategories={['Logo Design', 'Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Stationery Design', 'Marketing Collateral']}
            />
            
            <ServiceCard
                index={2}
                serviceName='Illustrations'
                serviceDetail='Creating custom illustrations that bring your ideas to life. Whether you need eye-catching graphics for your website, marketing materials, or social media, our illustrations add a personal touch.'
                subCategories={['Digital Illustrations', 'Editorial Illustrations', 'Character Design', 'Infographics', 'Custom Graphics', 'Concept Art']}
            />
            <ServiceCard
                index={3}
                serviceName='Animations'
                serviceDetail='Designing engaging animations that capture attention and convey messages effectively. We create explainer videos, animated infographics, and dynamic web animations.'
                subCategories={['Explainer Videos', 'Animated Infographics', 'Motion Graphics', 'Web Animations', 'Character Animation', '2D/3D Animation']}
            />
            <ServiceCard
                index={4}
                serviceName='Web Development'
                serviceDetail='Crafting high-performance, responsive websites tailored to your business needs. From custom-built solutions to CMS integrations, we ensure your site is optimized for speed, functionality, and user experience.'
                subCategories={['Frontend Development', 'Backend Development', 'Full-Stack Development', 'E-commerce Solutions', 'CMS Integration', 'Web Application Development']}
            />
        </section>
    );
};

export default Services;
