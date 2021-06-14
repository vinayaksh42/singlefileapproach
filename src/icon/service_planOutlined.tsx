
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

function Eosservice_planOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="14" y="2" width="8" height="2"/><rect x="10" y="2" width="2" height="2"/><rect x="14" y="6" width="8" height="2"/><rect x="10" y="6" width="2" height="2"/><rect x="14" y="10" width="8" height="2"/><rect x="10" y="10" width="2" height="2"/><circle cx="5" cy="19" r="1"/><rect x="4" y="4" width="2" height="9"/><path d="M7,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V3A1,1,0,0,0,7,2ZM7,21H3V3H7Z"/></svg>
  );
};

Eosservice_planOutlined.defaultProps = defaultProps;

export default Eosservice_planOutlined;
