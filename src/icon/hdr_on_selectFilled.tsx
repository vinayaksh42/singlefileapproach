
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

function Eoshdr_on_selectFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,18.5v-1c0-0.8-0.7-1.5-1.5-1.5H13v6h1.5v-2h1.1l0.9,2H18l-0.9-2.1C17.6,19.6,18,19.1,18,18.5z M16.5,18.5h-2v-1h2 V18.5z M3.5,18h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5V18z M10,16H6.5v6H10c0.8,0,1.5-0.7,1.5-1.5v-3C11.5,16.7,10.8,16,10,16z M10,20.5H8v-3h2V20.5z M24,20h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2V20z M12,4c2.21,0,4,1.79,4,4s-1.79,4-4,4s-4-1.79-4-4 S9.79,4,12,4 M12,2C8.69,2,6,4.69,6,8s2.69,6,6,6s6-2.69,6-6S15.31,2,12,2z"/></svg>
  );
};

Eoshdr_on_selectFilled.defaultProps = defaultProps;

export default Eoshdr_on_selectFilled;
