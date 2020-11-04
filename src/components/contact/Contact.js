import React from 'react';

import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = () =>
  <section id="four" className="wrapper style1 fade-up" style={{border:"0.5rem solid #00142e"}}>
    <div className="inner">
      <h2>Get in touch</h2>
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
