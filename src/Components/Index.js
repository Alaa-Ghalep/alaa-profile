import React from 'react'
import About from './About'
import NavBar from './NavBar';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import Experience from './Experience';




export default function Index() {
  return (
    <div id="page-top">
   <NavBar/>   
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  )
}
