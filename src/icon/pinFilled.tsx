
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

function EospinFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="18.27 9.81 15.45 9.81 9.77 4.13 10.48 3.42 9.06 2.01 1.99 9.08 3.41 10.49 4.12 9.78 9.79 15.46 9.78 15.46 9.78 18.29 11.2 19.71 14.74 16.16 19.51 20.93 20.92 19.52 16.15 14.75 19.68 11.22 18.27 9.81"/></svg>

  );
};

EospinFilled.defaultProps = defaultProps;

export default EospinFilled;
