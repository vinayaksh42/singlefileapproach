
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

function EosmultistateFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="4" cy="4" r="3"/><path d="M4,15a3,3,0,1,1,3-3A3,3,0,0,1,4,15Zm0-5a2,2,0,1,0,2,2A2,2,0,0,0,4,10Z"/><path d="M12,23a3,3,0,1,1,3-3A3,3,0,0,1,12,23Zm0-5a2,2,0,1,0,2,2A2,2,0,0,0,12,18Z"/><path d="M20,7a3,3,0,1,1,3-3A3,3,0,0,1,20,7Zm0-5a2,2,0,1,0,2,2A2,2,0,0,0,20,2Z"/><circle cx="4" cy="20" r="3"/><circle cx="12" cy="4" r="3"/><circle cx="12" cy="12" r="3"/><circle cx="20" cy="12" r="3"/><circle cx="20" cy="20" r="3"/></svg>

  );
};

EosmultistateFilled.defaultProps = defaultProps;

export default EosmultistateFilled;
