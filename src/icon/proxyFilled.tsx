
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

function EosproxyFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.0127,9.3949l4.56982-4.56977L21,6.24261V2H16.75739l1.41088,1.41089L13.33405,8.24512A3.93757,3.93757,0,0,0,8.14288,10.9953H5.72009a2.00033,2.00033,0,1,0,.00507,2H8.14a3.94008,3.94008,0,0,0,5.20423,2.75647l4.83069,4.83069L16.75739,22H21V17.75732l-1.41089,1.41095-4.57043-4.57043a3.96651,3.96651,0,0,0,.84137-1.60254L18,13v2l3-3L18,9v2l-2.14288-.0047A3.96785,3.96785,0,0,0,15.0127,9.3949Z"/></svg>

  );
};

EosproxyFilled.defaultProps = defaultProps;

export default EosproxyFilled;
