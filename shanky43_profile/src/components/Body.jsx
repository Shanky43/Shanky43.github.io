import React from 'react'
import AboutMe from './AboutMe'
import Home from './Home'
import NavBar from './NavBar'
import Projects from './Projects'
import Skills from './Skills'

const Body = () => {
  return (
    <div>
        <NavBar/>
        <Home/>
        <AboutMe />
        <Skills/>
        <Projects />
    </div>
  )
}

export default Body