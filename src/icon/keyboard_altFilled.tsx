
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

function Eoskeyboard_altFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,4H3C1.9,4,1,4.9,1,6v13c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V6C23,4.9,22.1,4,21,4z M7,12v2H5v-2H7z M5,10V8h2v2H5z M11,12v2H9v-2H11z M9,10V8h2v2H9z M16,16v1H8v-1H16z M15,12v2h-2v-2H15z M13,10V8h2v2H13z M17,14v-2h2v2H17z M19,10h-2V8h2V10z"/></svg>
  );
};

Eoskeyboard_altFilled.defaultProps = defaultProps;

export default Eoskeyboard_altFilled;
