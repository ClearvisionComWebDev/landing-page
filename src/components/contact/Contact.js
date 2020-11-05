import React from 'react';
import background from './img/background.jpg';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = () =>
  <section id="four" className="wrapper style1 fade-up" style={{backgroundImage: `url(${background})`,backgroundSize:"100% 100%"}}>
    <div className="inner">
      <h1 style={{fontFamily:"Helvetica",textAlign:"left", color:"#09395c"}}>CONTACT US</h1>
      <h3 style={{backgroundColor:"#071D3B", padding:"10px",marginRight:"400px",borderRadius:"1rem",color:"white"}}>
        Feel free to contact us for any information on our services
      </h3>
      <div className="split style1">
        <ContactForm />
        <ContactInformation />
      </div>
    </div>
  </section>

export default Contact;
