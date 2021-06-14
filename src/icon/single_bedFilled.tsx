
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

function Eossingle_bedFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,12c0-1.1-0.9-2-2-2V7c0-1.1-0.9-2-2-2H8C6.9,5,6,5.9,6,7v3c-1.1,0-2,0.9-2,2v5h1.33L6,19h1l0.67-2h8.67L17,19h1l0.67-2 H20V12z M16,10h-3V7h3V10z M8,7h3v3H8V7z M6,12h12v3H6V12z"/></svg>
  );
};

Eossingle_bedFilled.defaultProps = defaultProps;

export default Eossingle_bedFilled;
