
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

function Eosabstract_instanceOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.73206,10.99994l-4-7a2.00023,2.00023,0,0,0-1.74-1h-8a2.00025,2.00025,0,0,0-1.71,1l-4,7a2.00012,2.00012,0,0,0,0,2l4,7a2,2,0,0,0,1.71,1h8a2,2,0,0,0,1.74-1l4-7A2.00017,2.00017,0,0,0,21.73206,10.99994ZM16,19H8L4,12,8,5h8l4,7Z"/><circle cx="12" cy="12" r="2"/></svg>
  );
};

Eosabstract_instanceOutlined.defaultProps = defaultProps;

export default Eosabstract_instanceOutlined;
