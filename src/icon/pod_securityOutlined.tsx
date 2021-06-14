
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

function Eospod_securityOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.75,12,17.5,11l-2.25,1L13,13v3a6.40493,6.40493,0,0,0,1.28247,3.80438A5.77647,5.77647,0,0,0,17.5,22a5.77647,5.77647,0,0,0,3.21753-2.19562A6.40493,6.40493,0,0,0,22,16V13Zm.09814,7.28687A4.7874,4.7874,0,0,1,17.5,20.965V16.5H14V13.65l1.75-.77746L17.5,12.095v4.4H21A5.80322,5.80322,0,0,1,19.84814,19.28687Z"/><path d="M13,4a1.00368,1.00368,0,0,0-1-1H8A1.00368,1.00368,0,0,0,7,4V5h6Z"/><circle cx="10" cy="11" r="1.5"/><polygon points="12 17 12 15 5.1 15 8.28 8 11.7 8 13.404 11.726 15.229 10.915 12.99 6 7 6 2 17 12 17"/><path d="M14,21a5.79693,5.79693,0,0,1-.51855-.59668A7.48756,7.48756,0,0,1,12.67865,19H6V18H4v1.00281A1.99841,1.99841,0,0,0,6,21"/></svg>
  );
};

Eospod_securityOutlined.defaultProps = defaultProps;

export default Eospod_securityOutlined;
