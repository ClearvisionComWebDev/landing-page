import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const ContactForm = () =>
  <section>

    <form method="post" action="#">
      <div className="fields">
        <div className="field half">
        <div data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
        >   
          <label htmlFor="name" style={{color:"white"}}>Name</label>
          <input type="text" placeholder="Your Name"  name="name" id="name" style={{boxShadow:"rgba(0,0,0, 1.2) 0px 0px 8px"}}/>
          </div>
        </div>
        <div className="field half">
        <div data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
        >   
          <label htmlFor="email" style={{color:"black"}}>Email</label>
          <input type="text" placeholder="Enter your email" name="email" id="email" style={{boxShadow:"rgba(0,0,0, 1.2) 0px 0px 8px"}}/>
          </div>
        </div>
        <div className="field">
        <div data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
        >   
          <label htmlFor="message"style={{color:"white"}}>Message</label>
          <textarea name="message" placeholder="What would you like to know" id="message" rows="5" style={{boxShadow:"rgba(0,0,0, 1.2) 0px 0px 8px"}}/>
          </div>
        </div>
      </div>
      <ul className="actions">
        <li>
          <a href="/#" className="button submit" >
            <p style={{color:"white"}}>Send Message</p>
          </a>
        </li>
      </ul>
    </form>
  </section>

export default ContactForm;
