
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

function EoscasesFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,9H2V20a1.9931,1.9931,0,0,0,2,2H18a1.9931,1.9931,0,0,0,2-2H4Z"/><path d="M18,6V4L16,2H11L9,4V6H5V17.004A1.99606,1.99606,0,0,0,6.996,19H20.004A1.99606,1.99606,0,0,0,22,17.004V6ZM11,5a1.059,1.059,0,0,1,1-1h3a1.14673,1.14673,0,0,1,1,1V6H11Z"/></svg>
  );
};

EoscasesFilled.defaultProps = defaultProps;

export default EoscasesFilled;
