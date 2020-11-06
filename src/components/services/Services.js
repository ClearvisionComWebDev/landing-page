import React from 'react';
import CapabilityList from '../capabilities/CapabilityList';
import Carousel from "./carousel";
import background from "./img/background.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {
    AOS.init();
    return (
        <section id="two" style={{backgroundImage: `url(${background})`,backgroundSize:"100% 100%",borderBottom:"5px solid #00142e"}} classname="wrapper style2 spotlights">
        <div classname="inner" style={{padding:"40px"}}>
        <h1 style={{color:"white", fontFamily:"Helvetica"}}>OUR SERVICES</h1>

        <div data-aos="fade-in">
        <h2 style={{color:"white",textAlign:"center"}}>
        Some of the services we provide in Clearvision Communications
        </h2>
        </div>
        </div>
        <div data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
        >   
        <div className="features">
        <CapabilityList />
        </div>
        </div>
        <div data-aos="fade-in">
        <Carousel/>
        </div>
        </section>
    )
}

export default Services;
