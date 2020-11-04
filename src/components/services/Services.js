import React from 'react';
import CapabilityList from '../capabilities/CapabilityList';
import Carousel from "./carousel";

const Services = () => {
    return (
        <section id="two" style={{backgroundColor:"#95c3ff",border:"0.5rem solid #00142e"}} classname="wrapper style2 spotlights">
        <div classname="inner" style={{padding:"40px"}}>
        <h1 style={{color:"#00142e"}}>Our Services </h1>
        <h2 style={{color:"#00142e",textAlign:"center"}}>
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
