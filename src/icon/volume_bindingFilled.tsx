
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

function Eosvolume_bindingFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M6,18.99988A5.99988,5.99988,0,0,1,12,13h4V3a2.00073,2.00073,0,0,0-2-2H4A2.00073,2.00073,0,0,0,2,3V19.001A1.99984,1.99984,0,0,0,4,21H6.34875A5.97625,5.97625,0,0,1,6,18.99988ZM14,2a1,1,0,1,1-1,1A1,1,0,0,1,14,2ZM9,3a5,5,0,1,1-2,9.57788V10H4.42212A4.99113,4.99113,0,0,1,9,3ZM4,2A1,1,0,1,1,3,3,1,1,0,0,1,4,2ZM4,20a1,1,0,1,1,1-1A1,1,0,0,1,4,20Z"/>
  <circle cx="9" cy="8.00004" r="2"/>
  <rect x="13" y="18" width="4" height="2"/>
  <path d="M18,15H16v2h2a2,2,0,0,1,0,4H16v2h2a4,4,0,0,0,0-8Z"/>
  <path d="M14,21H12a2,2,0,0,1,0-4h2V15H12a4,4,0,0,0,0,8h2Z"/>
</svg>

  );
};

Eosvolume_bindingFilled.defaultProps = defaultProps;

export default Eosvolume_bindingFilled;
