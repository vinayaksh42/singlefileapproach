
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

function Eospiano_offFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.19,21.19L2.81,2.81L1.39,4.22L3,5.83V19c0,1.1,0.9,2,2,2h13.17l1.61,1.61L21.19,21.19z M8.25,19H5V7.83l2,2v3.67 c0,0.55,0.45,1,1,1h0.25V19z M9.75,19v-4.5H10c0.46,0,0.82-0.31,0.94-0.73l3.31,3.31V19H9.75z M11,8.17L5.83,3H19c1.1,0,2,0.9,2,2 v13.17l-2-2V5h-2v8.5c0,0.19-0.07,0.36-0.16,0.51L13,10.17V5h-2V8.17z"/></svg>
  );
};

Eospiano_offFilled.defaultProps = defaultProps;

export default Eospiano_offFilled;
