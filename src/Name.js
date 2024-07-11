import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from 'react'

function Name() {

 
  return (
    <div className='row main'>
      <div className= "column">
        <img src="https://www.w3schools.com/howto/img_snow.jpg" alt="Picture of Rene Acosta" className="reneimg"/>
      </div>
      <div className= "column" style={{width: 500 + 'px'}}>
        <h1 className='name'>Rene Acosta</h1>
        <p className='sub'>Software Engineer</p>
        <div className='line'></div>  
      </div>
    </div>
    
  );
}

export default Name;
