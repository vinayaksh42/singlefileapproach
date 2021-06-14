
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

function Eosice_skatingFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8,8.5C8,8.22,8.22,8,8.5,8h2.52L11,7H8.5C8.22,7,8,6.78,8,6.5C8,6.22,8.22,6,8.5,6H11V3H3v15h3v2H2v2h16 c2.76,0,5-2.24,5-5h-2c0,1.66-1.34,3-3,3h-2v-2h3l0-2.88c0-2.1-1.55-3.53-3.03-3.88l-2.7-0.67C12.4,10.35,11.7,9.76,11.32,9H8.5 C8.22,9,8,8.78,8,8.5z M14,20H8v-2h6V20z"/></svg>
  );
};

Eosice_skatingFilled.defaultProps = defaultProps;

export default Eosice_skatingFilled;
