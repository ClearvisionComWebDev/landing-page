import React from 'react';
import CapabilityList from '../capabilities/CapabilityList';
import Carousel from "./carousel";
import background from "./img/background.jpg";

const Services = () => {
    return (
        <section id="two" style={{backgroundImage: `url(${background})`,backgroundSize:"100% 100%",borderBottom:"5px solid #00142e"}} classname="wrapper style2 spotlights">
        <div classname="inner" style={{padding:"40px"}}>
        <h1 style={{color:"white", fontFamily:"Helvetica"}}>OUR SERVICES</h1>
        <h2 style={{color:"white",textAlign:"center"}}>
        Some of the services we provide in Clearvision Communications
        </h2>
        </div>
        <div className="features">
        <CapabilityList />
        </div>
        <Carousel/>
        </section>
    )
}

export default Services;
