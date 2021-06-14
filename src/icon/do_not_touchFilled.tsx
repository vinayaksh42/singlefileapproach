
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

function Eosdo_not_touchFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,10.2l-2.5-2.5V2.2c0-0.7,0.6-1.2,1.2-1.2S13,1.6,13,2.2V10.2z M20,12.8V11V5.2C20,4.6,19.4,4,18.8,4s-1.2,0.6-1.2,1.2	V11h-1V3.2c0-0.7-0.6-1.2-1.2-1.2S14,2.6,14,3.2v7.9l6,6V12.8z M9.5,4.2C9.5,3.6,8.9,3,8.2,3C7.6,3,7.1,3.5,7,4.2l2.5,2.5V4.2z M21.2,21.2L2.8,2.8L1.4,4.2L7,9.9l0,0v4.3c-1.1-0.6-2.6-1.5-2.6-1.5c-0.2-0.1-0.3-0.1-0.5-0.1c-0.3,0-0.5,0.1-0.7,0.3	c0,0-1.2,1.1-1.2,1.1l6.8,7.2C9.4,21.7,10.2,22,11,22h6c0.6,0,1.2-0.2,1.6-0.5l0,0l1.1,1.1L21.2,21.2z"/></svg>
  );
};

Eosdo_not_touchFilled.defaultProps = defaultProps;

export default Eosdo_not_touchFilled;
