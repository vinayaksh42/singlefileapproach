
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

function EoscottageFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,3L6,7.58V6H4v3.11L1,11.4l1.21,1.59L4,11.62V21h7v-6h2v6h7v-9.38l1.79,1.36L23,11.4L12,3z M10,1c0,1.66-1.34,3-3,3 C6.45,4,6,4.45,6,5H4c0-1.66,1.34-3,3-3c0.55,0,1-0.45,1-1H10z"/></svg>
  );
};

EoscottageFilled.defaultProps = defaultProps;

export default EoscottageFilled;
