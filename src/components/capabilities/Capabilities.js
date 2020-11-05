import React from 'react';
import background from "./img/background.jpg";
import image1 from "./img/image1.jpg";


const Capabilities = () =>
  <section id="one" className="wrapper style3 fade-up" style={{ borderBottom:"5px solid #00142e",backgroundImage: `url(${background})`,backgroundSize:"100% 100%"}}>
    <div className="inner">
      <h1 style={{fontFamily:"Helvetica",color:"#00142e",textAlign:"left"}}>WHO ARE WE</h1>
      <p style={{color:"black"}}>
      Clearvision Communications prides itself on consistently <br/>delivering quality services to the homes and 
      business <br/>of many Kiwis in New Zealand. Our teams are made <br/>up of highly experienced technicians who are 
      confident <br/>in their ability to solve issues expeditiously and maintain <br/>the satisfaction expected by our 
      customers. </p>

     
      
      <p style={{color:"black"}}>Here at Clearvision Communications we consider <br/>ourselves to be a top-class provider of civil works,<br/>
       making sure that all work involved is handled by<br/> nobody but ourselves. Our business is locally owned <br/>
       and operated which is something we consider to be <br/>part our success and image, striving to be a trustworthy 
       <br/>source of services which our customers can feel at ease with.
      </p>
        </div>

        <img src={image1} alt={image1} style={{width:"40%",position:"absolute",top: "210px", right:"10%",boxShadow:"rgba(0,0,0, 1.2) 8px 8px 8px"}}/>
  </section>

export default Capabilities;
