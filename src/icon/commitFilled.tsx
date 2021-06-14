
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

function EoscommitFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,11H15.85858a3.98144,3.98144,0,0,0-7.71716,0H2v2H8.14142a3.98144,3.98144,0,0,0,7.71716,0H22Z"/></svg>
  );
};

EoscommitFilled.defaultProps = defaultProps;

export default EoscommitFilled;
