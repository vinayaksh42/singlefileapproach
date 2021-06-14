
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

function Eoscall_receivedOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41L20 5.41z"/></svg>
  );
};

Eoscall_receivedOutlined.defaultProps = defaultProps;

export default Eoscall_receivedOutlined;
