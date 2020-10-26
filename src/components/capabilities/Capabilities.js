import React from 'react';

import CapabilityList from './CapabilityList';

const Capabilities = () =>
  <section id="one" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>Who Are We</h2>
      <p>
        Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
        turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
        lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
        imperdiet est velit quis lorem.
      </p>
      <div className="features">
        <CapabilityList />
      </div>
    </div>
  </section>

export default Capabilities;
