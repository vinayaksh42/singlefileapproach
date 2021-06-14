
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

function Eospin_invokeFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,12v6c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h10l0,2H4v12h16v-6H22z M22,7c0-1.66-1.34-3-3-3 c-1.66,0-3,1.34-3,3s1.34,3,3,3C20.66,10,22,8.66,22,7z M11.47,12.12l-2.83,2.83l1.41,1.41l2.83-2.83L15,15.66V10H9.34L11.47,12.12z"/></svg>
  );
};

Eospin_invokeFilled.defaultProps = defaultProps;

export default Eospin_invokeFilled;
