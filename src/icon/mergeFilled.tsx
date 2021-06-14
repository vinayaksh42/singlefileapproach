
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

function EosmergeFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11a2.99133,2.99133,0,0,0-2.81543,1.99713c-2.99493-.014-5.25958-.129-6.72559-.8858A6.20547,6.20547,0,0,1,6.1012,7.78485,3.00849,3.00849,0,1,0,4,7.81628v9.36744a3,3,0,1,0,2,0V11.92706a8.57852,8.57852,0,0,0,2.541,1.96161c1.8468.9527,4.35974,1.0921,7.64166,1.108A2.99492,2.99492,0,1,0,19,11Z"/></svg>
  );
};

EosmergeFilled.defaultProps = defaultProps;

export default EosmergeFilled;
