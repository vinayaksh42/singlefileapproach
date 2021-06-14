
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

function Eospush_pinFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="18 13.04 16.01 11.048 16.01 3.017 17.01 3.017 17.01 1.017 7.01 1.017 7.01 3.017 8.01 3.017 8.01 11.04 8.001 11.04 6 13.04 6 15.04 11.01 15.04 11 22 13 22 13.01 15.04 18 15.04 18 13.04"/></svg>
  );
};

Eospush_pinFilled.defaultProps = defaultProps;

export default Eospush_pinFilled;
