import React from "react";

const ContactInformation = () =>
  <section>
    <ul className="contact">
      <li>
        <h3 style={{color:"black"}}>Address</h3>
        <span style={{color:"#00142e"}}>
          13/38 Eaglehurst Road
          <br />
          Ellerslie, Auckland 1060
          <br />
          New Zealand
        </span>
      </li>
      <li>
        <h3 style={{color:"black"}}>Email</h3>
        <a href="/#" style={{color:"#00142e"}}>user@untitled.tld</a>
      </li>
      <li>
        <h3 style={{color:"black"}}>Phone</h3>
        <span style={{color:"#00142e"}}>(000) 000-0000</span>
      </li>
    </ul>
  </section>

export default ContactInformation;
