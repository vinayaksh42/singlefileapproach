
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

function Eossystem_re_registeredFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,2H3A2,2,0,0,0,1,4V16a2,2,0,0,0,2,2h7v2H8v2h8V20H14V18h7a2,2,0,0,0,2-2V4A2,2,0,0,0,21,2Zm0,7H14v2h7v5H3V11H8v3l4-4L8,6V9H3V4H21Z"/></svg>

  );
};

Eossystem_re_registeredFilled.defaultProps = defaultProps;

export default Eossystem_re_registeredFilled;
