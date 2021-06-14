
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

function EosjobFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,16.28V11l3-3L18,4,15,7H8V6h3V2H3V6H6v6H3v4H6v3H6v2h4.28A2,2,0,0,0,12,22a2,2,0,1,0-1.72-3H8V16h3V12H8V9h7l2,2v5.27a2,2,0,1,0,2,0ZM4,5V3h6V5Zm8,14a1,1,0,1,1-1,1h0A1,1,0,0,1,12,19Zm-2-6v2H4V13Zm8-7.59L20.59,8,18,10.59,15.41,8ZM18,19a1,1,0,1,1,1-1A1,1,0,0,1,18,19Z"/></svg>

  );
};

EosjobFilled.defaultProps = defaultProps;

export default EosjobFilled;
