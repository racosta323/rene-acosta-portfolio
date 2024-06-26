import logo from './logo.svg';
import './App.css';
import './Name'; 
import Name from './Name';
import NavBar from './NavBar';
import React from "react";

import FadeInSection from './FadeIn';

function App() {
  return (
    <div>
      <NavBar/>

      <FadeInSection>
        <Name/>
      </FadeInSection>

      <p id='about'>about</p>
     
      <FadeInSection>
        <Name/>
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
