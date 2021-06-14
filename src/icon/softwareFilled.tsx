
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

function EossoftwareFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,18.32A7.06,7.06,0,0,1,11.28,16H3V4H21V6.26a7.08,7.08,0,0,1,2,2.15V4a2,2,0,0,0-2-2H3A2,2,0,0,0,1,4V16a2,2,0,0,0,2,2h7v2H8v2h8V20H14Z"/><path d="M17,6a6,6,0,1,0,6,6A6,6,0,0,0,17,6Zm0,7.5a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,17,13.5Z"/></svg>

  );
};

EossoftwareFilled.defaultProps = defaultProps;

export default EossoftwareFilled;
