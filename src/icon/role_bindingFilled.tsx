
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

function Eosrole_bindingFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,21H13a2,2,0,0,1,0-4h2V15H13a4,4,0,0,0,0,8h2Z"/><path d="M23,19a4,4,0,0,1-4,4H17V21h2a2,2,0,0,0,0-4H17V15h2A4,4,0,0,1,23,19Z"/><rect x="14" y="18" width="4" height="2"/><path d="M7,19a5.98867,5.98867,0,0,1,.09033-1H3V16.6c0-2,4-3.1,6-3.1a8.54825,8.54825,0,0,1,1.35083.12463A5.95435,5.95435,0,0,1,13,13h5V4a2.00587,2.00587,0,0,0-2-2H11.82A2.98811,2.98811,0,0,0,6.18,2H2A2.00587,2.00587,0,0,0,0,4V18a2.00591,2.00591,0,0,0,2,2H7.09033A5.98867,5.98867,0,0,1,7,19ZM9,2A1,1,0,1,1,8,3,1.003,1.003,0,0,1,9,2ZM9,6A3,3,0,1,1,6,9,2.996,2.996,0,0,1,9,6Z"/></svg>
  );
};

Eosrole_bindingFilled.defaultProps = defaultProps;

export default Eosrole_bindingFilled;
