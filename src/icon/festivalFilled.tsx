
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

function EosfestivalFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="13,5.7 13,4 16,4 15,2.51 16,1 11,1 11,5.7 2,12 2,22 9,22 9,17 12.03,15 15,17 15,22 22,22 22,12"/></svg>
  );
};

EosfestivalFilled.defaultProps = defaultProps;

export default EosfestivalFilled;
