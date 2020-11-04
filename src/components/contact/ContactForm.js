import React from 'react';

const ContactForm = () =>
  <section>
    <form method="post" action="#">
      <div className="fields">
        <div className="field half">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Your Name"  name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Enter your email" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="What would you like to know" id="message" rows="5" />
        </div>
      </div>
      <ul className="actions">
        <li>
          <a href="/#" className="button submit" >
            <p style={{color:"#00142e"}}>Send Message</p>
          </a>
        </li>
      </ul>
    </form>
  </section>

export default ContactForm;
