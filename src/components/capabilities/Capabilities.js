import React from 'react';
import background from "./img/background.jpg";
import image1 from "./img/image1.jpg";

const Capabilities = () =>
  <section id="one" className="wrapper style3 fade-up" style={{ borderBottom:"5px solid #00142e",backgroundImage: `url(${background})`,backgroundSize:"100% 100%"}}>
    <div className="inner">
      <h1 style={{fontFamily:"Helvetica",color:"#00142e",textAlign:"left"}}>WHO ARE WE</h1>

      <p style={{color:"black",marginLeft:"-20px",textAlign:"justify"}}>
      Clearvision prides itself on consistently delivering quality services <br/>to the homes and 
      business of many Kiwis in New Zealand. <br/>Our teams are made up of highly experienced technicians who<br/> are 
      confident in their ability to solve issues expeditiously and <br/>maintain the satisfaction expected by our 
      customers. </p>
      </div>
      <p style={{color:"black",marginLeft:"50px",textAlign:"justify"}}>Here at Clearvision we consider ourselves to be a top-class <br/>provider of civil works,
       making sure that all work involved  <br/>is handled by nobody but ourselves. Our business is locally <br/> owned 
       and operated which is something we consider to be <br/>part our success and image, striving to be a trustworthy 
       <br/>source of services which our customers can feel at ease with.
      </p>
      <img src={image1} alt={image1} style={{width:"40%",position:"absolute",top: "210px", right:"10%",boxShadow:"rgba(0,0,0, 1.2) 8px 8px 8px"}}/> 
  </section>

export default Capabilities;
