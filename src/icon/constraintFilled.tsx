
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

function EosconstraintFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,15V13.5a2.5,2.5,0,0,0-5,0V15a1.07539,1.07539,0,0,0-1,1v4a1.07539,1.07539,0,0,0,1,1h5a1.07539,1.07539,0,0,0,1-1V16A1.07539,1.07539,0,0,0,21,15Zm-1,0H17V13.5a1.5,1.5,0,0,1,3,0ZM22,5H2V3H22Zm0,4H2V7H22Zm-9,4H2V11H13Zm0,4H2V15H13Zm0,4H2V19H13Z"/></svg>
  );
};

EosconstraintFilled.defaultProps = defaultProps;

export default EosconstraintFilled;
