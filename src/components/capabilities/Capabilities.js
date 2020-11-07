import React from 'react';
import background from "./img/background.jpg";
import image1 from "./img/image1.jpg";

const Capabilities = () =>
  <section id="one" className="wrapper style3 fade-up" style={{ borderBottom:"5px solid #00142e",backgroundImage: `url(${background})`,backgroundSize:"cover"}}>
    <div className="inner">
      <h1 style={{fontFamily:"Helvetica",color:"black",textAlign:"left"}}>WHO ARE WE</h1>
     
      <p style={{color:"black",textAlign:"justify"}}>
      Clearvision prides itself on consistently delivering quality services to the homes and 
      business of many Kiwis in New Zealand. Our teams are made up of highly experienced technicians who are 
      confident in their ability to solve issues expeditiously and maintain the satisfaction expected by our 
      customers.
      </p>
     
      <p style={{color:"black",textAlign:"justify"}}>Here at Clearvision we consider ourselves to be a top-class provider of civil works,
       making sure that all work involved is handled by nobody but ourselves. Our business is locally owned 
       and operated which is something we consider to be part our success and image, striving to be a trustworthy 
       source of services which our customers can feel at ease with.
      </p>
  
      <h3 style={{color: "black"}}>Example of our HOTMIX Works</h3>
      <img src={image1} alt={image1} style={{width:"100%",position:"relative",boxShadow:"rgba(0,0,0, 1.2) 8px 8px 8px",display:"flex"}}/> 
     
      </div>
  </section>

export default Capabilities;
