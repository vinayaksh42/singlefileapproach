
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

function EossymlinkFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,2H6A2,2,0,0,0,4,4V20a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V8ZM13,19.47V17.28c-2.78,0-4.61.85-6,2.72.56-2.67,2.11-5.33,6-5.87V12l4,3.73ZM13,9V3.5L18.51,9Z"/></svg>

  );
};

EossymlinkFilled.defaultProps = defaultProps;

export default EossymlinkFilled;
