import React from 'react';
import logo1 from './img/image1.png';
import logo2 from './img/image2.png';
import logo3 from './img/image3.png';
import logo4 from './img/image4.png';
import logo5 from './img/image5.png';
import background from './img/background.jpg';

const Features = () => {
  return (
    <section id="three" className="wrapper style2 spotlights"  style={{ borderBottom:"5px solid #00142e", backgroundImage: `url(${background})`,backgroundSize:"100% 100%"}}>
      <div className="inner">
      <h1 style={{color:"#3098b3",fontFamily:"Helvetica",padding:"5px",backgroundColor:""}}>OUR CLIENTS</h1>

    
      <h2 style={{color:"white",textAlign:"center",backgroundColor:"rgb(7, 29, 59,0.7)", padding:"10px",marginRight:"100px",marginLeft:"100px",borderRadius:"0.5rem",boxShadow:"0 2px 25px rgba(0,0,0,1.2)"}}>
       Providing services to these amazing organisations
      </h2>
      
        <img src={logo1} style={{paddingLeft:"20px",width:"30%"}} alt={logo1}/>
        <img src={logo2} style={{paddingLeft:"20px",width:"30%"}} alt={logo2}/>
        <img src={logo3} style={{paddingLeft:"20px",width:"40%"}} alt={logo3}/>
        <img src={logo4} style={{paddingLeft:"20px",width:"50%"}} alt={logo4}/>
        <img src={logo5} style={{paddingLeft:"20px",width:"50%"}} alt={logo5}/>
      </div>
    </section>
  );
}

export default Features;
