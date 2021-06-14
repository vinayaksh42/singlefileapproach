
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

function Eoscontent_deletedFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,19H5V5h6V3H5A2.00588,2.00588,0,0,0,3,5V19a2.00588,2.00588,0,0,0,2,2H19a2.00588,2.00588,0,0,0,2-2V15H19Z"/><path d="M15,5h6a0,0,0,0,1,0,0v6a1,1,0,0,1-1,1H16a1,1,0,0,1-1-1V5A0,0,0,0,1,15,5Z"/><polygon points="22 3 20 3 19.429 2 16.571 2 16 3 14 3 14 4 22 4 22 3"/></svg>
  );
};

Eoscontent_deletedFilled.defaultProps = defaultProps;

export default Eoscontent_deletedFilled;
