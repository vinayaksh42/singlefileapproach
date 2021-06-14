
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

function EosadminFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path id="path6" d="M12,1,3,5v6c0,5.55,3.84,10.74,9,12,5.16-1.26,9-6.45,9-12V5Zm0,3.9a3,3,0,1,1-3,3A3,3,0,0,1,12,4.9Zm0,7.9c2,0,6,1.09,6,3.08a7.2,7.2,0,0,1-12,0C6,13.89,10,12.8,12,12.8Z"/></svg>

  );
};

EosadminFilled.defaultProps = defaultProps;

export default EosadminFilled;
