
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

function Eosopen_in_new_offFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.79,5.8L14,3h7v7l-2.79-2.8l-4.09,4.09l-1.41-1.41L16.79,5.8z M19,12v4.17l2,2V12H19z M19.78,22.61L18.17,21H5 c-1.11,0-2-0.9-2-2V5.83L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M16.17,19l-4.88-4.88L9.7,15.71L8.29,14.3l1.59-1.59L5,7.83 V19H16.17z M7.83,5H12V3H5.83L7.83,5z"/></svg>
  );
};

Eosopen_in_new_offFilled.defaultProps = defaultProps;

export default Eosopen_in_new_offFilled;
