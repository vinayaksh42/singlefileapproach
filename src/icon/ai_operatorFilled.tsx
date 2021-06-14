
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

function Eosai_operatorFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.35593,5H7.01119L5,13H6.028l.46375-1.87537H8.808L9.25993,13h1.06232ZM6.62716,10.32227,7.644,5.949h.04541l.98316,4.3733ZM11.23838,13V5h1v8Zm.18685,1H4V4H14V8.77924a5.50408,5.50408,0,0,1,4-.78486V6H16V4a2.00587,2.00587,0,0,0-2-2H12V0H10V2H8V0H6V2H4A2.00587,2.00587,0,0,0,2,4V6H0V8H2v2H0v2H2v2a2.00591,2.00591,0,0,0,2,2H6v2H8V16h2v2h2V16.00787A5.547,5.547,0,0,1,11.42523,14ZM13.5,13.5A3.5,3.5,0,1,1,17,17,3.499,3.499,0,0,1,13.5,13.5ZM17,19c-2.33625,0-7,1.1725-7,3.5V24H24V22.5C24,20.1725,19.33625,19,17,19Z"/></svg>
  );
};

Eosai_operatorFilled.defaultProps = defaultProps;

export default Eosai_operatorFilled;
