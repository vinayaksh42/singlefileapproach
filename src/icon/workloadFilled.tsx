
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

function EosworkloadFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,6H2V20a2,2,0,0,0,2,2H18V20H4Z"/><rect x="10" y="10" width="8" height="2"/><rect x="10" y="13" width="8" height="2"/><polygon points="13.47 4.99 11.16 4.99 10 7 11.16 9 13.47 9 14.63 7 13.47 4.99"/><path d="M20,2H8A2,2,0,0,0,6,4V16a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V4A2,2,0,0,0,20,2Zm0,14H8V4H20Z"/></svg>

  );
};

EosworkloadFilled.defaultProps = defaultProps;

export default EosworkloadFilled;
