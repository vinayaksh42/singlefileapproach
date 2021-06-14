
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

function EosenhancementFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="2.02" y="13.99" width="4" height="8.02"/><rect x="9.02" y="10.02" width="4" height="11.99"/><polygon points="22 6 18 2 14 6 16 6 16 22.02 20 22.02 20 6 22 6"/></svg>

  );
};

EosenhancementFilled.defaultProps = defaultProps;

export default EosenhancementFilled;
