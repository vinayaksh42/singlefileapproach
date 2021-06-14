
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

function Eosvirtual_realityFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="21" y="10" width="2" height="4"/><rect x="1" y="10" width="2" height="4"/><path d="M18,9a2,2,0,0,0-2-2H8A2,2,0,0,0,6,9a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2,2,2,0,0,0,2,2H9.02765l1.60242-2.77551a1.58186,1.58186,0,0,1,2.73986,0L14.97235,17H16a2,2,0,0,0,2-2,2,2,0,0,0,2-2V11A2,2,0,0,0,18,9Zm-1,3H7V10H17Z"/></svg>

  );
};

Eosvirtual_realityFilled.defaultProps = defaultProps;

export default Eosvirtual_realityFilled;
