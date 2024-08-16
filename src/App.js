import './App.css';
import React from "react";
import Home from './Home'
import NavBar from './NavBar';
import About from './About'
import Projects from './Projects';
import Resume from './Resume';



function App() {

  
  return (
    <div className='container'>
      <NavBar/>
      <Home/>
      <Projects/>
      <Resume/>
      <About/>
    </div>
  );
}

export default App;
