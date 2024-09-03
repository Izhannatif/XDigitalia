import React from 'react'
import Lander from '../Components/Lander'
import About from '../Components/About'
import Services from '../Components/Services'
import Showcase from '../Components/Showcase'
import Process from '../Components/Process'

const Home = () => {
    return (
        <>
            <Lander />
            <About />
            <Services />
            <Showcase />
            <Process />
        </>
    )
}

export default Home