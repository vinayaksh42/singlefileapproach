
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

function Eosai_healingFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="11" y="4" width="2" height="1"/><circle cx="9" cy="4" r="1"/><circle cx="15" cy="4" r="1"/><path d="M18,10H13V8l3-.01A3.00027,3.00027,0,0,0,19,5V3a3.00879,3.00879,0,0,0-3-3H8A3.00879,3.00879,0,0,0,5,3V5A3.00883,3.00883,0,0,0,8,8h3v2H6a3.00879,3.00879,0,0,0-3,3v8a3.00883,3.00883,0,0,0,3,3H18a3.00883,3.00883,0,0,0,3-3V13A3.00879,3.00879,0,0,0,18,10ZM8,6A1.003,1.003,0,0,1,7,5V3A1.003,1.003,0,0,1,8,2h7.99A1.01158,1.01158,0,0,1,17,3V5a1.01158,1.01158,0,0,1-1.01,1Zm4.435,14.07166L12,20.5l-.435-.43164C10.02,18.54138,9,17.5343,9,16.29834A1.71211,1.71211,0,0,1,10.65,14.5a1.74022,1.74022,0,0,1,1.35.68335A1.74022,1.74022,0,0,1,13.35,14.5,1.71211,1.71211,0,0,1,15,16.29834C15,17.5343,13.98,18.54138,12.435,20.07166Z"/></svg>
  );
};

Eosai_healingFilled.defaultProps = defaultProps;

export default Eosai_healingFilled;
