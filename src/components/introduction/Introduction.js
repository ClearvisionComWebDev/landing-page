import React from 'react';
import logo from './img/logo.png';


const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up" style={{border:"0.5rem solid #00142e"}}>
    <div className="inner">
      <div className="logo">
         <img src={logo} style={{width:"457px" }} alt="Logo"/>
      </div>
      <h2>
        Delivering Quality Services to the Home and Businesses of many
        Kiwis in New Zealand
       </h2>
        <div>
          <a href="#one" style={{marginLeft:"-20px"}}>
          <button style={{backgroundColor:"#00142e"}}>Learn More</button>
          <a href="#four" style={{marginLeft:"30px"}}>
          <button style={{backgroundColor:"#00142e"}}>Get in Touch</button>
          </a>
          </a>
        </div>
        <div>
        
        </div>
    </div>
  </section>


export default Introduction;
