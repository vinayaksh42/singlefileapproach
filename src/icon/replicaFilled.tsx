
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

function EosreplicaFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H13a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V13A2,2,0,0,0,19,11Zm0,8H13V13h6Z"/><path d="M12,3H6A2,2,0,0,0,4,5v6a2,2,0,0,0,2,2H9V11H6V5h6V9h2V5A2,2,0,0,0,12,3Z"/></svg>

  );
};

EosreplicaFilled.defaultProps = defaultProps;

export default EosreplicaFilled;
