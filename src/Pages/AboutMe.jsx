import React from 'react';

import Timeline from '../components/timeline/timeline';
import Info from '../components/info/info';

function AboutMe() {
  return (
    <div>
      <Info />
      {/* <hr style={{ borderTop: '1px dotted #222525' }} /> */}
      <Timeline />
    </div>
  );
}

export default AboutMe;
