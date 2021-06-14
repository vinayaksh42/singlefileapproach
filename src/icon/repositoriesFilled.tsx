
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

function EosrepositoriesFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="8 23.01 10.5 21.51 13 23.01 13 19 8 19 8 23.01"/><rect x="8" y="5" width="2" height="2"/><rect x="8" y="10" width="2" height="2"/><rect x="8" y="15.01" width="2" height="2"/><path d="M18.36,1.05A1.47,1.47,0,0,0,18,1H6A2,2,0,0,0,4,3V19a2,2,0,0,0,2,2V3H18V19H15v2h3a2,2,0,0,0,2-2V3A2,2,0,0,0,18.36,1.05Z"/></svg>

  );
};

EosrepositoriesFilled.defaultProps = defaultProps;

export default EosrepositoriesFilled;
