
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

function Eossmart_buttonFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9v6c0,1.1-0.9,2-2,2h-1v-2h1V9H4v6h6v2H4c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h16C21.1,7,22,7.9,22,9z M14.5,19l1.1-2.4	l2.4-1.1l-2.4-1.1L14.5,12l-1.1,2.4L11,15.5l2.4,1.1L14.5,19z M17,14l0.6-1.4L19,12l-1.4-0.6L17,10l-0.6,1.4L15,12l1.4,0.6L17,14z"/></svg>
  );
};

Eossmart_buttonFilled.defaultProps = defaultProps;

export default Eossmart_buttonFilled;
