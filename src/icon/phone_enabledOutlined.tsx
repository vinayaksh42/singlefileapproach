
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

function Eosphone_enabledOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.46,5c-0.06,0.89-0.21,1.76-0.45,2.59l1.2,1.2c0.41-1.2,0.67-2.47,0.76-3.79H17.46z M7.6,17.02 c-0.85,0.24-1.72,0.39-2.6,0.45v1.49c1.32-0.09,2.59-0.35,3.8-0.75L7.6,17.02z M16.5,3H20c0.55,0,1,0.45,1,1c0,9.39-7.61,17-17,17 c-0.55,0-1-0.45-1-1v-3.49c0-0.55,0.45-1,1-1c1.24,0,2.45-0.2,3.57-0.57c0.1-0.04,0.21-0.05,0.31-0.05c0.26,0,0.51,0.1,0.71,0.29 l2.2,2.2c2.83-1.45,5.15-3.76,6.59-6.59l-2.2-2.2c-0.28-0.28-0.36-0.67-0.25-1.02C15.3,6.45,15.5,5.25,15.5,4 C15.5,3.45,15.95,3,16.5,3z"/></svg>
  );
};

Eosphone_enabledOutlined.defaultProps = defaultProps;

export default Eosphone_enabledOutlined;
