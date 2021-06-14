
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

function Eosproduct_classesOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="5" cy="19" r="1"/><rect x="4" y="4" width="2" height="9"/><path d="M7,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V3A1,1,0,0,0,7,2ZM7,21H3V3H7Z"/><path d="M14,3v7H11V3h3m1-1H10v9h5V2Z"/><path d="M21,3v7H18V3h3m1-1H17v9h5V2Z"/><path d="M14,14v7H11V14h3m1-1H10v9h5V13Z"/><path d="M21,14v7H18V14h3m1-1H17v9h5V13Z"/></svg>
  );
};

Eosproduct_classesOutlined.defaultProps = defaultProps;

export default Eosproduct_classesOutlined;
