
// GENERATE BY ./scripts/index.ts

import * as React from 'react';

interface iconProps {
  height: string | number | undefined,
  width: string | number | undefined,
  color: string | undefined,
  rotate: string | undefined
}

const defaultProps = {
  height: 36,
  width: 36,
  color: 'black',
  rotate: '0'
};

function EoscronjobFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <rect x="10.02112" y="1.02148" width="6" height="2"/>
  <path d="M20.04041,7.41l1.43371-1.43371L20.05994,4.56213,18.62671,5.99536A8.9886,8.9886,0,0,0,7.53113,5.88147l1.42,1.44a7.038,7.038,0,0,1,4.06-1.3l.01019.00049-.00049,6.97913L17.97394,17.96A7.0013,7.0013,0,0,1,6.01111,13.02148h3l-4-4-4,4h3A9,9,0,1,0,20.04041,7.41Z"/>
</svg>

  );
};

EoscronjobFilled.defaultProps = defaultProps;

export default EoscronjobFilled;
