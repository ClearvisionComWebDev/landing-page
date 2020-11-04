import React from 'react';
import logo1 from './img/image1.png';
import logo2 from './img/image2.png';
import logo3 from './img/image3.png';
import logo4 from './img/image4.png';
import logo5 from './img/image5.png';

const Features = () => {

  return (
    <section id="three" className="wrapper style2 spotlights" style={{border:"0.5rem solid #00142e"}}>
      <div className="inner">
      <h1 style={{color:"#00142e"}}>Our Clients </h1>
      <h2>
       Providing services to these amazing organisations
      </h2>

      <div style={{position:"relative"}}>
        <img src={logo1} style={{paddingLeft:"20px",width:"30%"}} alt={logo1}/>
        <img src={logo2} style={{paddingLeft:"20px",width:"30%"}} alt={logo2}/>
        <img src={logo3} style={{paddingLeft:"20px",width:"40%"}} alt={logo3}/>
        <img src={logo4} style={{paddingLeft:"20px",width:"50%"}} alt={logo4}/>
        <img src={logo5} style={{paddingLeft:"20px",width:"50%"}} alt={logo5}/>
      </div>

      </div>
    </section>
  );
}

export default Features;
