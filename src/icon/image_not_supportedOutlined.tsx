
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

function Eosimage_not_supportedOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.9,21.9l-6.1-6.1l-2.69-2.69l0,0L5,5l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31 L21.9,21.9z M5,19V7.83l6.84,6.84L11,15.72L9,13l-3,4h8.17l2,2H5z M7.83,5l-2-2H19c1.1,0,2,0.9,2,2v13.17l-2-2V5H7.83z"/></svg>
  );
};

Eosimage_not_supportedOutlined.defaultProps = defaultProps;

export default Eosimage_not_supportedOutlined;
