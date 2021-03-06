import React from 'react';

const ContactForm = () =>
  <section>
    <form method="post" action="#">
      <div className="fields">
        <div className="field half">
          <label htmlFor="name" style={{color:"white"}}>Name</label>
          <input type="text" placeholder="Your Name"  name="name" id="name" style={{boxShadow:"rgba(0,0,0, 1.2) 0px 0px 8px",padding:"10px",opacity:0.9}}/>
        </div>
        <div className="field half">
          <label htmlFor="email" style={{color:"white"}}>Email</label>
          <input type="text" placeholder="Enter your email" name="email" id="email" style={{boxShadow:"rgba(0,0,0, 1.2) 0px 0px 8px",opacity:0.9}}/>
          </div>
        <div className="field">
          <label htmlFor="message"style={{color:"white"}}>Message</label>
          <textarea name="message" placeholder="What would you like to know" id="message" rows="5" style={{boxShadow:"rgba(0,0,0, 1.2) 0px 0px 8px",padding:"5px",opacity:0.9}}/>
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
