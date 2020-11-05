import React from 'react';
import background from './img/background.jpg';
import '../../assets/sass/main.scss';

const Footer = () => (
  <footer id="footer" className="wrapper style1-alt" style={{backgroundImage: `url(${background})`,backgroundSize:"100% 100%"}}>
    <div className="inner">
      <ul className="menu">
        <div style={{textAlign: 'center'}}>
        <li style={{color: "white"}}>&copy; 2020 Research and Development TeamClearVision All rights reserved.</li>
        </div>
      </ul>
    </div>
  </footer>
);

export default Footer;
