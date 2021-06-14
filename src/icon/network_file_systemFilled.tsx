
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

function Eosnetwork_file_systemFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="16 17 13 17 13 13 11 13 11 17 8 17 8 18 2 18 2 20 8 20 8 21 16 21 16 20 22 20 22 18 16 18 16 17"/><path d="M15,13h3a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1H12L11,3H6A1,1,0,0,0,5,4v8a1,1,0,0,0,1,1h9Z"/></svg>

  );
};

Eosnetwork_file_systemFilled.defaultProps = defaultProps;

export default Eosnetwork_file_systemFilled;
