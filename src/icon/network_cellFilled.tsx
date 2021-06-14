
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

function Eosnetwork_cellFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-opacity=".3" d="M2 22h20V2z"/><path d="M17 7L2 22h15z"/></svg>
  );
};

Eosnetwork_cellFilled.defaultProps = defaultProps;

export default Eosnetwork_cellFilled;
