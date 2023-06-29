import React from 'react'
import About from '../Components/About'
import Experience from '../Components/Experience'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Projects from '../Components/Projects'
import Tech from '../Components/Tech'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        {/* <Hero/> */}
        <Experience/>
        <About/>
        <Tech/>
        {/* <Projects/> */}
    </div>
  )
}

export default HomePage