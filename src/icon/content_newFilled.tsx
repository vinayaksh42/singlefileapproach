
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

function Eoscontent_newFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,5V7H19v3H17V7H14V5h3V2h2V5ZM19,19H5V5h6V3H5A2.00588,2.00588,0,0,0,3,5V19a2.00588,2.00588,0,0,0,2,2H19a2.00588,2.00588,0,0,0,2-2V13H19Z"/></svg>
  );
};

Eoscontent_newFilled.defaultProps = defaultProps;

export default Eoscontent_newFilled;
