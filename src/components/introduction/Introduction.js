import React from 'react';
import logo from './img/logo.png';
import image from './img/image1.jpg';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up" style={{backgroundImage: `url(${image})`, borderBottom:"5px solid #00142e"}}>
      <div className="inner">
      <div className="logo">
         <img src={logo} style={{width:"457px", marginLeft:"-60px" }} alt="Logo"/>
      </div>
      <h2 style={{color: "white", fontFamily:"Helvetica"}}>
        Delivering Quality Services to Kiwis Homes and Businesses
       </h2>
        <div>
          <button  style={{backgroundColor: "transparent"}} onClick={() => scrollTo('#one')}>Learn More</button>
          <button style={{backgroundColor:"transparent",marginLeft:"30px"}} onClick={() => scrollTo('#four')}>Get in Touch</button>
        </div>
        <div>
        </div>
    </div>
  </section>


export default Introduction;
