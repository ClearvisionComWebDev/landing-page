import React from 'react';
import logo from './img/logo.png';


const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <div className="logo">
         <img src={logo} style={{width:"457px" }} alt="Logo"/>
      </div>
      <h2>
        Delivering Quality Services to the Home and Businesses of many
        Kiwis in New Zealand
       </h2>
    </div>
  </section>


export default Introduction;
