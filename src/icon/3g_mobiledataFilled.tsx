
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

function Eos3g_mobiledataFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,7v2h5v2H4v2h4v2H3v2h5c1.1,0,2-0.9,2-2v-1.5c0-0.83-0.67-1.5-1.5-1.5c0.83,0,1.5-0.67,1.5-1.5V9c0-1.1-0.9-2-2-2H3z M21,11v4c0,1.1-0.9,2-2,2h-5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2h-7v6h5v-2h-2.5v-2H21z"/></svg>
  );
};

Eos3g_mobiledataFilled.defaultProps = defaultProps;

export default Eos3g_mobiledataFilled;
