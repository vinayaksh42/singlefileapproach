
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

function Eossubscriptions_createdOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,8H4V6H20ZM18,2H6V4H18Z"/><path d="M10.31183,21.1l-3.3-3.3,1.4-1.4,1.9,1.9,5.3-5.3,1.4,1.4Z"/><path d="M22,10H2a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V12A2,2,0,0,0,22,10Zm0,12H2V12H22Z"/></svg>
  );
};

Eossubscriptions_createdOutlined.defaultProps = defaultProps;

export default Eossubscriptions_createdOutlined;
