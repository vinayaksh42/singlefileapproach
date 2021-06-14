
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

function EosbranchOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,2a2.99289,2.99289,0,0,0-1,5.81628V11H7V7.81628a3,3,0,1,0-2,0v8.36744a3,3,0,1,0,2,0V13H17a2,2,0,0,0,2-2V7.81628A2.99289,2.99289,0,0,0,18,2ZM6,20a1,1,0,1,1,1-1A1,1,0,0,1,6,20ZM6,6A1,1,0,1,1,7,5,1,1,0,0,1,6,6ZM18,6a1,1,0,1,1,1-1A1,1,0,0,1,18,6Z"/></svg>
  );
};

EosbranchOutlined.defaultProps = defaultProps;

export default EosbranchOutlined;
