
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

function Eosreset_tvOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,8V5c0-1.1-0.9-2-2-2H4C2.9,3,2,3.9,2,5v12c0,1.1,0.9,2,2,2h4v2h8v-2h4c1.1,0,1.99-0.9,1.99-2v-5H22c0-1.1-0.9-2-2-2 h-7.17l1.83-1.83l-1.41-1.41C9.69,10.31,10.88,9.12,9,11c2.06,2.06,0.9,0.9,4.24,4.24l1.41-1.41L12.83,12H20v5H4V5h16v3H22z"/></svg>
  );
};

Eosreset_tvOutlined.defaultProps = defaultProps;

export default Eosreset_tvOutlined;
