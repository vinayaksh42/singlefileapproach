
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

function EosproductsFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V3A1,1,0,0,0,7,2ZM5,21a2,2,0,1,1,2-2A2,2,0,0,1,5,21Zm2-9H3V3H7ZM6,19a1,1,0,1,1-1-1A1,1,0,0,1,6,19ZM14,2H10A1,1,0,0,0,9,3V21a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V3A1,1,0,0,0,14,2ZM12,21a2,2,0,1,1,2-2A2,2,0,0,1,12,21Zm2-9H10V3h4Zm-1,7a1,1,0,1,1-1-1A1,1,0,0,1,13,19ZM21,2H17a1,1,0,0,0-1,1V21a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM19,21a2,2,0,1,1,2-2A2,2,0,0,1,19,21Zm2-9H17V3h4Zm-1,7a1,1,0,1,1-1-1A1,1,0,0,1,20,19Z"/></svg>

  );
};

EosproductsFilled.defaultProps = defaultProps;

export default EosproductsFilled;
