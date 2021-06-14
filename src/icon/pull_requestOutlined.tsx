
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

function Eospull_requestOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,17.18372V8.81628a3,3,0,1,0-2,0v8.36744a3,3,0,1,0,2,0ZM5,5A1,1,0,1,1,4,6,1,1,0,0,1,5,5ZM5,21a1,1,0,1,1,1-1A1,1,0,0,1,5,21Z"/><path d="M20,17.18372V7a2,2,0,0,0-2-2H12.82837l1.58581-1.58582L13,2,10.41425,4.58575,9,6l1.41418,1.41418L13,10l1.41418-1.41425L12.82843,7H18V17.18372a3,3,0,1,0,2,0ZM19,21a1,1,0,1,1,1-1A1,1,0,0,1,19,21Z"/></svg>
  );
};

Eospull_requestOutlined.defaultProps = defaultProps;

export default Eospull_requestOutlined;
