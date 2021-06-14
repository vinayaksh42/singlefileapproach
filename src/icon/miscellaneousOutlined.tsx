
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

function EosmiscellaneousOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.36039,15,18,21H6l1.63961-6h8.72078M18,13H6L4,21a2.18549,2.18549,0,0,0,2,2H18a2.15843,2.15843,0,0,0,2-2l-2-8Z"/><polygon points="22 10 2 10 2 12 22 12 22 10 22 10"/><path d="M10,8a1,1,0,0,1,1,1h2a1,1,0,0,1,2,0h2a5.1098,5.1098,0,0,0-2.28564-3.196A6.30272,6.30272,0,0,0,15,3.83527C15,2.26941,14.55231,1,14,1s-1,1.26941-1,2.83527a7.11546,7.11546,0,0,0,.11505,1.30108,4.62618,4.62618,0,0,0-2.23395.001A7.09423,7.09423,0,0,0,11,3.83527C11,2.26941,10.55225,1,10,1,9.44769,1,9,2.26941,9,3.83527A6.30975,6.30975,0,0,0,9.28253,5.806,5.10972,5.10972,0,0,0,7,9H9A1,1,0,0,1,10,8Z"/></svg>
  );
};

EosmiscellaneousOutlined.defaultProps = defaultProps;

export default EosmiscellaneousOutlined;
