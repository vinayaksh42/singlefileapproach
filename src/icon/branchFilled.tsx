
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

function EosbranchFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,5a3,3,0,1,0-4,2.81628V11H7V7.81628a3,3,0,1,0-2,0v8.36744a3,3,0,1,0,2,0V13H17a2,2,0,0,0,2-2V7.81628A2.99121,2.99121,0,0,0,21,5Z"/></svg>
  );
};

EosbranchFilled.defaultProps = defaultProps;

export default EosbranchFilled;
