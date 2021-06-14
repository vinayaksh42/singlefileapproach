
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

function Eossignal_wifi_badOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24,8.98C20.93,5.9,16.69,4,12,4C7.31,4,3.07,5.9,0,8.98L12,21v-9h8.99L24,8.98z M19.59,14l-2.09,2.09l-0.3-0.3L15.41,14 L14,15.41l1.79,1.79l0.3,0.3L14,19.59L15.41,21l2.09-2.08L19.59,21L21,19.59l-2.08-2.09L21,15.41L19.59,14z"/></svg>
  );
};

Eossignal_wifi_badOutlined.defaultProps = defaultProps;

export default Eossignal_wifi_badOutlined;
