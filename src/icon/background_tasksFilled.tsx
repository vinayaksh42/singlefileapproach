
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

function Eosbackground_tasksFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="6" y="3" width="8.99" height="1.5"/><rect x="2.99" y="6" width="1.5" height="1.5"/><rect x="2.99" y="3" width="1.5" height="1.5"/><rect x="2.99" y="9.01" width="1.51" height="1.5"/><path d="M4.5,12h-3V1.49h15V6H18V2a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2v9.48a2,2,0,0,0,2,2H4.5Z"/><path d="M22,7.5H8a2,2,0,0,0-2,2V19a2,2,0,0,0,2,2h5.53v1.53H12V24h6V22.51H16.5V21H22a2,2,0,0,0,2-2V9.5A2,2,0,0,0,22,7.5Zm.51,12h-15V9h15Z"/></svg>

  );
};

Eosbackground_tasksFilled.defaultProps = defaultProps;

export default Eosbackground_tasksFilled;
