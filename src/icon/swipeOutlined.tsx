
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

function EosswipeOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5,2v2.02C18.18,2.13,15.22,1,12,1S5.82,2.13,3.5,4.02V2H2v3.5V7h1.5H7V5.5H4.09c2.11-1.86,4.88-3,7.91-3 s5.79,1.14,7.91,3H17V7h3.5H22V5.5V2H20.5z"/><path d="M18.89,13.77l-3.8-1.67C14.96,12.04,14.81,12,14.65,12H14l0-4.37c0-1.32-0.96-2.5-2.27-2.62C10.25,4.88,9,6.05,9,7.5 v8.15l-1.87-0.4c-0.19-0.03-1.02-0.15-1.73,0.56L4,17.22l5.12,5.19C9.49,22.79,10,23,10.53,23h6.55c0.98,0,1.81-0.7,1.97-1.67 l0.92-5.44C20.12,15.03,19.68,14.17,18.89,13.77z M18,15.56L17.08,21h-6.55l-3.7-3.78L11,18.11V7.5C11,7.22,11.22,7,11.5,7 S12,7.22,12,7.5v6.18h1.76L18,15.56z"/></svg>
  );
};

EosswipeOutlined.defaultProps = defaultProps;

export default EosswipeOutlined;
