
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

function Eosadd_roadFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20 23,18"/><rect height="9" width="2" x="18" y="4"/><rect height="16" width="2" x="4" y="4"/><rect height="4" width="2" x="11" y="4"/><rect height="4" width="2" x="11" y="10"/><rect height="4" width="2" x="11" y="16"/></svg>
  );
};

Eosadd_roadFilled.defaultProps = defaultProps;

export default Eosadd_roadFilled;
