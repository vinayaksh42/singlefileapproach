
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

function Eosbreakfast_diningOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,3H6C3.79,3,2,4.79,2,7c0,1.48,0.81,2.75,2,3.45V19c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-8.55c1.19-0.69,2-1.97,2-3.45 C22,4.79,20.21,3,18,3z M19,8.72L18,9.3V19H6V9.31L5.01,8.73C4.38,8.35,4,7.71,4,7c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2 C20,7.71,19.62,8.36,19,8.72z"/><path d="M12.71,9.29C12.51,9.1,12.26,9,12,9s-0.51,0.1-0.71,0.29l-3,3c-0.39,0.39-0.39,1.02,0,1.41l3,3C11.49,16.9,11.74,17,12,17 s0.51-0.1,0.71-0.29l3-3c0.39-0.39,0.39-1.02,0-1.41L12.71,9.29z M12,14.58L10.41,13L12,11.41L13.59,13L12,14.58z"/></svg>
  );
};

Eosbreakfast_diningOutlined.defaultProps = defaultProps;

export default Eosbreakfast_diningOutlined;
