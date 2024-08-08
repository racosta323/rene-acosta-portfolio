import logo from './logo.svg';
import './App.css';
import React from "react";

import FadeInSection from './FadeIn';
import Home from './Home'
import Name from './Name';
import NavBar from './NavBar';
import About from './About'
import Projects from './Projects';
import Resume from './Resume';



function App() {

  
  return (
    <div className='container'>
      <NavBar/>

      {/* <FadeInSection> */}
        <Home/>
        <Projects/>
        <Resume/>
        <About/>
      {/* </FadeInSection> */}

      
{/*      
      <FadeInSection>
        <p id='about'>about</p>
        <About/>
      </FadeInSection>

      <p id='projects'>projects</p>

      <FadeInSection>
        <Name/>
      </FadeInSection>

      <p id='contact'>contact me</p>

      <FadeInSection>
        <Name/>
      </FadeInSection> */}
      
    </div>
  );
}

export default App;
