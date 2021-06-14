
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

function EosdrawFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.5,8c1.04,0,2.34-1.5,4.25-1.5c1.52,0,2.75,1.23,2.75,2.75c0,2.04-1.99,3.15-3.91,4.22C5.42,14.67,4,15.57,4,17 c0,1.1,0.9,2,2,2v2c-2.21,0-4-1.79-4-4c0-2.71,2.56-4.14,4.62-5.28c1.42-0.79,2.88-1.6,2.88-2.47c0-0.41-0.34-0.75-0.75-0.75 C7.5,8.5,6.25,10,4.5,10C3.12,10,2,8.88,2,7.5C2,5.45,4.17,2.83,5,2l1.41,1.41C5.41,4.42,4,6.43,4,7.5C4,7.78,4.22,8,4.5,8z M8,21 l3.75,0l8.06-8.06l-3.75-3.75L8,17.25L8,21z M20.37,6.29c-0.39-0.39-1.02-0.39-1.41,0l-1.83,1.83l3.75,3.75l1.83-1.83 c0.39-0.39,0.39-1.02,0-1.41L20.37,6.29z"/></svg>
  );
};

EosdrawFilled.defaultProps = defaultProps;

export default EosdrawFilled;
