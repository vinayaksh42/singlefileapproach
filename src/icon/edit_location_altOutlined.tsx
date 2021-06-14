
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

function Eosedit_location_altOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11,11h2.12l6.16-6.16l-2.12-2.12L11,8.88V11z M20.71,2L20,1.29c-0.39-0.39-1.02-0.39-1.41,0l-0.72,0.72l2.12,2.12 l0.72-0.72C21.1,3.02,21.1,2.39,20.71,2z M17.9,9.05C17.96,9.41,18,9.79,18,10.2c0,1.71-1.08,4.64-6,9.14c-4.92-4.49-6-7.43-6-9.14 C6,6.17,9.09,4,12,4c0.32,0,0.65,0.03,0.97,0.08l1.65-1.65C13.78,2.16,12.9,2,12,2c-4.2,0-8,3.22-8,8.2c0,3.32,2.67,7.25,8,11.8 c5.33-4.55,8-8.48,8-11.8c0-1.01-0.16-1.94-0.45-2.8L17.9,9.05z"/></svg>
  );
};

Eosedit_location_altOutlined.defaultProps = defaultProps;

export default Eosedit_location_altOutlined;
