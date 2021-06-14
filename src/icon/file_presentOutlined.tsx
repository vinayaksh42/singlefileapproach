
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

function Eosfile_presentOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M18,20H6V4h8v4h4V20z M12,17L12,17 c-1.1,0-2-0.9-2-2l0-5.5C10,9.22,10.22,9,10.5,9h0C10.78,9,11,9.22,11,9.5V15h2V9.5C13,8.12,11.88,7,10.5,7h0C9.12,7,8,8.12,8,9.5 L8,15c0,2.21,1.79,4,4,4h0c2.21,0,4-1.79,4-4v-4h-2v4C14,16.1,13.1,17,12,17z"/></svg>
  );
};

Eosfile_presentOutlined.defaultProps = defaultProps;

export default Eosfile_presentOutlined;
