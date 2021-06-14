
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

function EosmiscellaneousFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,13l.9888,7.87542A1,1,0,0,1,17.99659,22H6.00341a1,1,0,0,1-.99221-1.12458L6,13Zm3-3H3v2H21ZM14.71436,5.804A6.30272,6.30272,0,0,0,15,3.83527C15,2.26941,14.55231,1,14,1s-1,1.26941-1,2.83527a7.11546,7.11546,0,0,0,.11505,1.30108,4.62618,4.62618,0,0,0-2.23395.001A7.09423,7.09423,0,0,0,11,3.83527C11,2.26941,10.55225,1,10,1S9,2.26941,9,3.83527A6.30975,6.30975,0,0,0,9.28253,5.806,5.10972,5.10972,0,0,0,7,9H9a1,1,0,0,1,2,0h2a1,1,0,0,1,2,0h2A5.1098,5.1098,0,0,0,14.71436,5.804Z"/></svg>

  );
};

EosmiscellaneousFilled.defaultProps = defaultProps;

export default EosmiscellaneousFilled;
