
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

function EosinboundFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2h8V16H4V6l8,5,8-5v8h2V4A2,2,0,0,0,20,2ZM12,9,4,4H20Zm6,4v3h4v2H18v3l-4-4Z"/></svg>

  );
};

EosinboundFilled.defaultProps = defaultProps;

export default EosinboundFilled;
