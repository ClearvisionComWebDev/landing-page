import React from "react";

const ContactInformation = () =>
  <section>
    <ul className="contact" style={{textAlign:"right"}}>
      <li>
        <h3 style={{color:"white"}}>Address</h3>
        <span style={{color:"white"}}>
          13/38 Eaglehurst Road
          <br />
          Ellerslie, Auckland 1060
          <br />
          New Zealand
        </span>
      </li>
      <li>
        <h3 style={{color:"white"}}>Email</h3>
        <a href="/#" style={{color:"white"}}>user@untitled.tld</a>
      </li>
      <li>
        <h3 style={{color:"white"}}>Phone</h3>
        <span style={{color:"white"}}>(000) 000-0000</span>
      </li>
    </ul>
  </section>

export default ContactInformation;
