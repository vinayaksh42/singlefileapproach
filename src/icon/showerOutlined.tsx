
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

function EosshowerOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,17c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1S9,16.45,9,17z M12,16c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1 S12.55,16,12,16z M16,16c-0.55,0-1,0.45-1,1s0.45,1,1,1c0.55,0,1-0.45,1-1S16.55,16,16,16z M19,12v2H5v-2c0-3.53,2.61-6.43,6-6.92 V3h2v2.08C16.39,5.57,19,8.47,19,12z M17,12c0-2.76-2.24-5-5-5s-5,2.24-5,5H17z M8,19c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1 S8.55,19,8,19z M12,19c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S12.55,19,12,19z M16,19c-0.55,0-1,0.45-1,1s0.45,1,1,1 c0.55,0,1-0.45,1-1S16.55,19,16,19z"/></svg>
  );
};

EosshowerOutlined.defaultProps = defaultProps;

export default EosshowerOutlined;
