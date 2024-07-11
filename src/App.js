import logo from './logo.svg';
import './App.css';
import React from "react";

import FadeInSection from './FadeIn';
import Name from './Name';
import NavBar from './NavBar';
import About from './About'


function App() {
  return (
    <div>
      <NavBar/>

      <FadeInSection>
        <Name/>
      </FadeInSection>

      
     
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
      </FadeInSection>
      
    </div>
  );
}

export default App;
