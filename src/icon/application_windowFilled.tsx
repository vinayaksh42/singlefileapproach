
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

function Eosapplication_windowFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,1H3A2,2,0,0,0,1,3l.00012,2H23V3A2,2,0,0,0,21,1ZM4.00006,4.00092a1,1,0,1,1,1-1A1,1,0,0,1,4.00006,4.00092ZM7.00012,4a1,1,0,1,1,1-1A1.003,1.003,0,0,1,7.00012,4Z"/><path d="M23,9.99939V6H1V20a1.99946,1.99946,0,0,0,2,2H21a1.99946,1.99946,0,0,0,2-2Z"/></svg>
  );
};

Eosapplication_windowFilled.defaultProps = defaultProps;

export default Eosapplication_windowFilled;
