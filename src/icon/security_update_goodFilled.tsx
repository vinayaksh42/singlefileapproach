
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

function Eossecurity_update_goodFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1z M17,18H7V6h10V18z M16,10.05 l-1.41-1.41l-3.54,3.54l-1.41-1.41l-1.41,1.41L11.05,15L16,10.05z"/></svg>
  );
};

Eossecurity_update_goodFilled.defaultProps = defaultProps;

export default Eossecurity_update_goodFilled;
