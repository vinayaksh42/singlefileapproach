
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

function EospodFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,19.00284A1.99877,1.99877,0,0,0,8.00042,21h7.99916A1.99881,1.99881,0,0,0,18,19.00284V18H6Z"/><path d="M15,3.99178A.99485.99485,0,0,0,14.00213,3H9.99787A.99485.99485,0,0,0,9,3.99178V5h6Z"/><path d="M14.99334,6H8.99994L4,17H20ZM12.01,13.01a2,2,0,1,1,2-2A2,2,0,0,1,12.01,13.01Z"/></svg>

  );
};

EospodFilled.defaultProps = defaultProps;

export default EospodFilled;
