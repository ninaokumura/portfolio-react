import React from 'react';
import { Link } from 'react-router-dom';

import Typewriter from 'typewriter-effect';

const sentences = [
  'Hi, I am Nina',
  'A self-taught coder',
  'Click here to check my progress',
];
const lastStepIndex = sentences.length - 1;

function Home() {
  return (
    <div style={{ padding: '0 8%' }}>
      <Link to='/about'>
        <Typewriter
          onInit={typewriter => {
            sentences.forEach((sentence, index) => {
              typewriter.typeString(sentence);

              if (index !== lastStepIndex) {
                typewriter.pauseFor(1000).deleteAll();
              }
            });

            typewriter.start();
          }}
        />
      </Link>
    </div>
  );
}

export default Home;
