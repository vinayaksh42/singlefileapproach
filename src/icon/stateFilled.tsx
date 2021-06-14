
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

function EosstateFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,6V18h5V6Zm4,7H11V7h3ZM19,1H6A2.00067,2.00067,0,0,0,4,3V21a2.005,2.005,0,0,0,2,2H19a2,2,0,0,0,2-2V3A2.00588,2.00588,0,0,0,19,1Zm0,20H6V3H19Z"/></svg>

  );
};

EosstateFilled.defaultProps = defaultProps;

export default EosstateFilled;
