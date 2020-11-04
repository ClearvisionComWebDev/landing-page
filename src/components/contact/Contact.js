import React from 'react';

import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = () =>
  <section id="four" className="wrapper style1 fade-up">
    <div className="inner">
      <h2 style={{fontFamily:"Helvetica"}}>GET IN TOUCH</h2>
      <h3>
        Feel free to contact us for any information on our services
      </h3>
      <div className="split style1">
        <ContactForm />
        <ContactInformation />
      </div>
    </div>
  </section>

export default Contact;
