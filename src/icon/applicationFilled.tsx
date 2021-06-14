
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

function EosapplicationFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1.00008,3,1,5H23V3a2,2,0,0,0-2-2H3A1.99993,1.99993,0,0,0,1.00008,3ZM4,4.00092a1,1,0,1,1,1-1A1,1,0,0,1,4,4.00092ZM7.00008,4a1,1,0,1,1,1-1A1.003,1.003,0,0,1,7.00008,4Z"/><path d="M1,6V20a1.99946,1.99946,0,0,0,2,2H21a1.99943,1.99943,0,0,0,2-2V6Zm8.1,9.3,1.3,1.3-.7.7L9,18,7,16,5,14l2-2,2-2,.7.7.7.7L9.1,12.7,7.8,14ZM17,16l-2,2-.7-.7-.7-.7,1.3-1.3L16.2,14l-1.3-1.3-1.3-1.3.7-.7L15,10l2,2,2,2Z"/></svg>
  );
};

EosapplicationFilled.defaultProps = defaultProps;

export default EosapplicationFilled;
