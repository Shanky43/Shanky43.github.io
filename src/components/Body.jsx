import React, { useState, useEffect } from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import NavBar from './NavBar';
import Projects from './Projects';
import Skills from './Skills';
import Loading from './Loading';
import GitHubStatus from './GitHubStatus';

const Body = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    isLoading ? (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          // paddingTop: '50vh',
          backgroundColor: 'black',
          width: "100%",
          height: "100vh",
        }}
      >
        <div pt={["50vh", "50vh", "50vh", "50vh"]}> <Loading /></div>
      </div>
    ) : (
      <>
        <NavBar />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <GitHubStatus />
        <Contact />
        <Footer />


      </>
    )

  );
};

export default Body;

