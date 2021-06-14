
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

function Eosnew_labelFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,12l-4.37,6.16C16.26,18.68,15.65,19,15,19h-3l0-6H9v-3H3V7c0-1.1,0.9-2,2-2h10c0.65,0,1.26,0.31,1.63,0.84L21,12z M10,15H7v-3H5v3H2v2h3v3h2v-3h3V15z"/></svg>
  );
};

Eosnew_labelFilled.defaultProps = defaultProps;

export default Eosnew_labelFilled;
