
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

function Eosusb_offFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,8h4v4h-1v2c0,0.34-0.08,0.66-0.23,0.94L16,13.17V12h-1V8z M11,8.17l2,2V6h2l-3-4L9,6h2V8.17z M13,16v2.28 c0.6,0.34,1,0.98,1,1.72c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-0.74,0.4-1.37,1-1.72V16H8c-1.11,0-2-0.89-2-2v-2.28C5.4,11.38,5,10.74,5,10 c0-0.59,0.26-1.13,0.68-1.49L1.39,4.22l1.41-1.41l18.38,18.38l-1.41,1.41L13.17,16H13z M11,14v-0.17l-2.51-2.51 c-0.14,0.16-0.31,0.29-0.49,0.4V14H11z"/></svg>
  );
};

Eosusb_offFilled.defaultProps = defaultProps;

export default Eosusb_offFilled;
