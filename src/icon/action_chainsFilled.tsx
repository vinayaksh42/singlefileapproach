
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

function Eosaction_chainsFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="20.01" cy="20.01" r="3"/><path d="M18,3H6.83a3,3,0,1,0,0,2H18a3,3,0,0,1,0,6H14.83a3,3,0,0,0-5.64,0H6A5,5,0,0,0,6,21h6v3l4-4-4-4v3H6a3,3,0,1,1,0-6H9.2a3,3,0,0,0,5.63,0H18A5,5,0,0,0,18,3Z"/></svg>

  );
};

Eosaction_chainsFilled.defaultProps = defaultProps;

export default Eosaction_chainsFilled;
