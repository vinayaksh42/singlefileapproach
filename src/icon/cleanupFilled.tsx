
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

function EoscleanupFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,15.0163H15v-.01361a1.98389,1.98389,0,0,0-1.97809-1.978h-.03473L16.844,2.63208l-1.732-.64282-4.09546,11.0354h-.03845A1.98389,1.98389,0,0,0,9,15.00269v.01361H4v2H20Z"/><polygon points="20 18.018 4 18.018 2 22 4 22 20 22 22 22 20 18.018"/></svg>
  );
};

EoscleanupFilled.defaultProps = defaultProps;

export default EoscleanupFilled;
