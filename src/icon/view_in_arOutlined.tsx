
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

function Eosview_in_arOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.34,1,1,2.34,1,4v2h2V4z"/><path d="M3,20v-2H1v2c0,1.66,1.34,3,3,3h2v-2H4C3.45,21,3,20.55,3,20z"/><path d="M20,1h-2v2h2c0.55,0,1,0.45,1,1v2h2V4C23,2.34,21.66,1,20,1z"/><path d="M21,20c0,0.55-0.45,1-1,1h-2v2h2c1.66,0,3-1.34,3-3v-2h-2V20z"/><path d="M19,14.87V9.13c0-0.72-0.38-1.38-1-1.73l-5-2.88c-0.31-0.18-0.65-0.27-1-0.27s-0.69,0.09-1,0.27L6,7.39 C5.38,7.75,5,8.41,5,9.13v5.74c0,0.72,0.38,1.38,1,1.73l5,2.88c0.31,0.18,0.65,0.27,1,0.27s0.69-0.09,1-0.27l5-2.88 C18.62,16.25,19,15.59,19,14.87z M11,17.17l-4-2.3v-4.63l4,2.33V17.17z M12,10.84L8.04,8.53L12,6.25l3.96,2.28L12,10.84z M17,14.87l-4,2.3v-4.6l4-2.33V14.87z"/></svg>
  );
};

Eosview_in_arOutlined.defaultProps = defaultProps;

export default Eosview_in_arOutlined;
