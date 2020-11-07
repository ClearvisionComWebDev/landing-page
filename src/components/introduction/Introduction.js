import React from 'react';
import logo from './img/logo.png';
import image from './img/image1.jpg';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Button } from '@material-ui/core';


const Introduction = () =>

  <section id="intro" className="wrapper style1 fullscreen fade-up" style={{backgroundImage: `url(${image})`,borderBottom:"5px solid #00142e"}}>
      <div className="inner">
      <div className="logo">
         <img src={logo} style={{width:"457px", marginLeft:"-60px"}} alt="Logo"/>
      </div>  
      <h2 style={{color: "white", fontFamily:"Helvetica", textShadow:"0 2px 5px rgba(0,0,0,.5)",boxShadow:"0 2px 25px rgba(0,0,0,1.2)",padding:"20px",backgroundColor:"rgb(7, 29, 59,0.7)"}}>
        Delivering Quality Services to Kiwis Homes and Businesses
       </h2>
       </div>
        <div style={{paddingLeft:"60px"}}>
          <Button size="small" style={{marginRight:"10px"}}onClick={() => scrollTo('#one')}>Who Are We</Button>
          <Button size="small" onClick={() => scrollTo('#four')}>Make an enquiry</Button>
        </div>
        <div>
        </div>
  </section>


export default Introduction;
