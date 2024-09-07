import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Process = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = document.querySelectorAll('.process-card');

    // Intersection Observer for section opacity
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(section, { opacity: 1, duration: 0.3 });
        } else {
          gsap.to(section, { opacity: 0.2, duration: 0.3 });
        }
      });
    }, { threshold: 0.2 });

    sectionObserver.observe(section);

    // Intersection Observer for cards scaling effect
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { scale: 1, duration: 0.5 });
        } else {
          gsap.to(entry.target, { scale: 0.9, duration: 0.5 });
        }
      });
    }, { threshold: 0.6 });

    cards.forEach(card => cardObserver.observe(card));

    return () => {
      sectionObserver.unobserve(section);
      cards.forEach(card => cardObserver.unobserve(card));
    };
  }, []);

  return (
    <section ref={sectionRef} className='w-full h-full flex flex-col md:flex-row opacity-0 transition-opacity duration-1000 my-5'>
      {/* Sticky Heading Section */}
      <div className='sticky grid place-items-center top-20 md:top-0 left-0 h-full md:h-screen w-full md:w-1/4 rounded-b-full bg-black p-10 text-white amsterdam font-light tracking-widest z-10'>
        <p className='text-3xl md:text-4xl text-center'>
          How we bring your<br />
          <span className='text-[#fde000] text-5xl md:text-9xl'> ideas</span> <br /> to <br /> <span className='text-[#fde000] text-5xl md:text-9xl'> life</span>
        </p>
      </div>

      {/* Process Steps */}
      <div className='flex flex-col gap-10 h-full w-3/4 px-5 md:px-10'>
        <div className='process-card flex flex-col items-start justify-evenly border rounded-3xl border-stone-700 bg-[#0000002d] backdrop-blur-sm py-10 gap-10 px-5 md:px-10 h-full md:h-[50vh] mt-32 sm:w-full'>
          <div className='flex flex-col md:flex-row gap-10'>
            <div className='text-[#fde000] amsterdam font-bold text-5xl tracking-wide text-nowrap'>01 /</div>
            <div className='text-5xl font-semibold outfit text-white'>Creative Brainstorming & Concepting</div>
          </div>
          <div className=" text-white outfit text-xl">We kick things off by diving deep into the imagination pool. Whether it’s a funky illustration or a sleek website, we sit down with you, throw ideas around, and nail down the perfect concept that screams you.</div>
        </div>
        <div className='process-card flex flex-col items-start justify-evenly border rounded-3xl border-stone-700 bg-[#0000002d] backdrop-blur-sm py-10 px-10 gap-10 h-[50vh]'>
          <div className='flex gap-10'>
            <div className='text-[#fde000] amsterdam font-bold text-5xl tracking-wide text-nowrap'>02 /</div>
            <div className='text-5xl font-semibold outfit text-white'>Magic in Progress</div>
          </div>
          <div className="text-white outfit text-xl">Watch as your concept morphs into reality! We dive deep into the nitty-gritty, bringing together design, animation, and tech magic to create something truly special.</div>
        </div>
        <div className='process-card flex flex-col items-start justify-evenly border rounded-3xl border-stone-700 bg-[#0000002d] backdrop-blur-sm py-10 px-10 gap-10 h-[50vh]'>
          <div className='flex gap-10'>
            <div className='text-[#fde000] amsterdam font-bold text-5xl tracking-wide text-nowrap'>03 /</div>
            <div className='text-5xl font-semibold outfit text-white'>Showtime!</div>
          </div>
          <div className="text-white outfit text-xl">The moment of truth! We polish everything up and hit the launch button, delivering your project to the world with a bang. Get ready to take a bow!</div>
        </div>
        <div className='process-card flex flex-col items-start justify-evenly border rounded-3xl border-stone-700 bg-[#0000002d] backdrop-blur-sm py-10 px-10 gap-10 h-[50vh]'>
          <div className='flex gap-10'>
            <div className='text-[#fde000] amsterdam font-bold text-5xl tracking-wide text-nowrap'>04 /</div>
            <div className='text-5xl font-semibold outfit text-white'>Testing & Optimization</div>
          </div>
          <div className="text-white outfit text-xl">Before we go live, we rigorously test everything to ensure it's running smoothly and efficiently. From cross-browser compatibility to mobile responsiveness, we make sure every aspect works flawlessly. We fine-tune and optimize to deliver the best possible experience for your audience.</div>
        </div>
        <div className='process-card flex flex-col items-start justify-evenly border rounded-3xl border-stone-700 bg-[#0000002d] backdrop-blur-sm py-10 px-10 gap-10 h-[50vh]'>
          <div className='flex gap-10'>
            <div className='text-[#fde000] amsterdam font-bold text-5xl tracking-wide text-nowrap'>05 /</div>
            <div className='text-5xl font-semibold outfit text-white'>Launch & Celebration</div>
          </div>
          <div className="text-white outfit text-xl">The moment of truth! We hit the launch button and unveil your project to the world with a bang. Whether it’s a stunning new website, an engaging animation, or a captivating illustration, we’re here to celebrate your success and watch your creation shine.</div>
        </div>
      </div>
    </section>
  );
};

export default Process;
