import React from 'react';

import Capability from './Capability';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      heading: 'CAR applications with Council & Traffic management setups',
      description: '',
    },
    { 
      heading: 'Full Project Management of jobs',
      description: <ul style={{color:"black"}}>
      <li>Design/scope to build/completion of required paperworks</li>
      </ul>,
    },
    {
      heading: 'Provision of crew and equipment for short and long term works on short notice',
      description: '',
    },
    {
      heading: 'Carry out civil works',
      description: <ul style={{color:"black"}}>
      <li>Full concrete and asphalt reinstatements</li>
      <li>all excavations</li>
      <li>digs and fixes of faults</li>
      <li>laying/replacements of ducts</li>
      <li>Underground Horizontal Drilling</li>
      </ul>,
    },
  ]

  const [capabilities] = React.useState(CAPABILITIES);

  return (
    <>
      {capabilities.map((capability) => <Capability key={capability.heading} {...capability} />)}
    </>
  )
}

export default CapabilityList;
