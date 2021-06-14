
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

function EosquotaFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,12V3H11A10,10,0,1,0,21,13V12Z"/><path d="M14,10V1a9,9,0,0,1,9,9Z"/></svg>

  );
};

EosquotaFilled.defaultProps = defaultProps;

export default EosquotaFilled;
