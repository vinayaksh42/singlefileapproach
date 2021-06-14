
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

function Eosalign_horizontal_leftFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,22H2V2h2V22z M22,7H6v3h16V7z M16,14H6v3h10V14z"/></svg>
  );
};

Eosalign_horizontal_leftFilled.defaultProps = defaultProps;

export default Eosalign_horizontal_leftFilled;
