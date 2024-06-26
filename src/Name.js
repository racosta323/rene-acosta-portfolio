import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from 'react'

function Name() {

 
  return (
    <div className='row'>
      <div className= "column">
        <img src="https://www.w3schools.com/howto/img_snow.jpg" alt="Picture of Rene Acosta" className="reneimg"/>
      </div>
      <div className= "column">
        <h1 className='name'>RENE <br/>ACOSTA</h1>
        <p className='sub'>Software Engineer</p>
      </div>
    </div>
  );
}

export default Name;
