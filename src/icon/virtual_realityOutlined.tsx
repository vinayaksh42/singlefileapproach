
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

function Eosvirtual_realityOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.82574,10a3.01219,3.01219,0,0,0-1.95465-1.87109A3.00493,3.00493,0,0,0,16,6H8A3.00493,3.00493,0,0,0,5.12891,8.12891,3.01125,3.01125,0,0,0,3.17419,10H2v4H3.17419a3.01125,3.01125,0,0,0,1.95472,1.87109A3.00553,3.00553,0,0,0,8,18H9.60547l1.89062-3.27539a.58178.58178,0,0,1,1.00782,0L14.39551,18H16a3.00553,3.00553,0,0,0,2.87109-2.12891A3.01219,3.01219,0,0,0,20.82574,14H22V10ZM19,13a1.00067,1.00067,0,0,1-1,1H17v1a1.00067,1.00067,0,0,1-1,1h-.4502l-1.31347-2.27539a2.58242,2.58242,0,0,0-4.47266,0L8.4502,16H8a1.001,1.001,0,0,1-1-1V14H6a1.001,1.001,0,0,1-1-1V11a1.0013,1.0013,0,0,1,1-1H7V9A1.0013,1.0013,0,0,1,8,8h8a1.001,1.001,0,0,1,1,1v1h1a1.001,1.001,0,0,1,1,1Z"/><path d="M15,11H9V10h6Z"/></svg>
  );
};

Eosvirtual_realityOutlined.defaultProps = defaultProps;

export default Eosvirtual_realityOutlined;
