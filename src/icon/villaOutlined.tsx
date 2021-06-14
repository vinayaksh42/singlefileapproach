
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

function EosvillaOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,10c-1.1,0-2,0.9-2,2h-1V3L3,8v13h18v-9C21,10.9,20.1,10,19,10z M5,9.37l9-3.46V12H9v7H5V9.37z M19,19h-3v-3h-2v3h-3v-5 h8V19z"/></svg>
  );
};

EosvillaOutlined.defaultProps = defaultProps;

export default EosvillaOutlined;
