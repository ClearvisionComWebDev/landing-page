import React from 'react';
import image from "./img/image.png";
import CapabilityList from './CapabilityList';

const Capabilities = () =>
  <section id="one" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>Who Are We</h2>
      <p>
      Clearvision Communications prides itself on consistently delivering quality services to the homes and 
      business of many Kiwis in New Zealand. Our teams are made up of highly experienced technicians who are 
      confident in their ability to solve issues expeditiously and maintain the satisfaction expected by our 
      customers. Here at Clearvision Communications we consider ourselves to be a top-class provider of civil works,
       making sure that all work involved is handled by nobody but ourselves. Our business is locally owned 
       and operated which is something we consider to be part our success and image, striving to be a trustworthy 
       source of services which our customers can feel at ease with.
      </p>
      <div className="features">
        <CapabilityList />
      </div>
        <div style={{position:"relative"}}>
        <img src={image} style={{width: "90%",paddingLeft: "150px", }} alt="Logo"/> 
        </div>
    </div>
  </section>
  

export default Capabilities;
