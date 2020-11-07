import React from 'react';
import background from './img/background.jpg';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = () =>
  <section id="four" className="wrapper style1 fade-up" style={{backgroundImage: `url(${background})`,backgroundSize:"100% 100%"}}>
    <div className="inner">
      <h1 style={{fontFamily:"Helvetica",textAlign:"left", color:"#09395c"}}>CONTACT US</h1>
      <h3 style={{backgroundColor:"rgb(7, 29, 59,0.7)", padding:"10px",color:"white",boxShadow:"0 2px 25px rgba(0,0,0,1.2)"}}>
        Feel free to contact us for any information on our services
      </h3>
      <div className="split style1">
        <ContactForm />
        <ContactInformation />
      </div>
    </div>
  </section>

export default Contact;
