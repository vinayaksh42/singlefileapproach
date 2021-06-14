
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

function Eoscontent_lifecycle_managementFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="6" y="7" width="8" height="2"/><rect x="6" y="11" width="12" height="2"/><rect x="6" y="15" width="2.99" height="2"/><path d="M14,3,11,0V2H4A2,2,0,0,0,2,4V20a2,2,0,0,0,2,2H8V20H4V4h7V6Z"/><path d="M10,21l3,3V22h7a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2H16V4h4V20H13V18Z"/></svg>

  );
};

Eoscontent_lifecycle_managementFilled.defaultProps = defaultProps;

export default Eoscontent_lifecycle_managementFilled;
