import React from 'react';
import CapabilityList from './CapabilityList';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import image1 from "./img/image1.jpg";
import image2 from "./img/image2.jpg";
import image3 from "./img/image3.jpg";

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
        <Carousel arrows dots centered infinite>
        <img src={image1} alt={image1}/>
        <img src={image2} style={{width:"50%"}} alt={image2}/>
        <img src={image3} style={{width:"90%"}} alt={image3}/>
      </Carousel>
      </div>
  </section>

export default Capabilities;
