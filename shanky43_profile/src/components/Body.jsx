import React from 'react'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import NavBar from './NavBar'
import Projects from './Projects'
import Skills from './Skills'

const Body = () => {

  return (
    <div>
    
      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Body