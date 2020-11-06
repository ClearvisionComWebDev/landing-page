import React from 'react';
import logo from './img/logo.png';
import image from './img/image1.jpg';
import scrollTo from 'gatsby-plugin-smoothscroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up" style={{backgroundImage: `url(${image})`, borderBottom:"5px solid #00142e"}}>
      <div className="inner">
      <div className="logo">
         <img src={logo} style={{width:"457px", marginLeft:"-60px" }} alt="Logo"/>
      </div>  

      <div data-aos="fade-bottom">
      <h2 style={{color: "white", fontFamily:"Helvetica", textShadow:"0 2px 5px rgba(0,0,0,.5)",boxShadow:"0 2px 25px rgba(0,0,0,1.2)",padding:"20px",backgroundColor:"rgb(7, 29, 59,0.7)"}}>
        Delivering Quality Services to Kiwis Homes and Businesses
       </h2>
       </div>
        <div>
          <button  style={{backgroundColor: "transparent"}} onClick={() => scrollTo('#one')}>Learn More</button>
          <button style={{backgroundColor:"transparent",marginLeft:"30px"}} onClick={() => scrollTo('#four')}>Get in Touch</button>
        </div>
        <div>
        </div>
    </div>
  </section>


export default Introduction;
