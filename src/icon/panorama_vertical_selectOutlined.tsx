
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

function Eospanorama_vertical_selectOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.5,12c0-3.89,0.84-6.95,1.43-8.69C20.15,2.67,19.67,2,18.98,2L5,2C4.32,2,3.84,2.66,4.05,3.31C4.74,5.36,5.5,8.1,5.5,12 c0,3.87-0.76,6.66-1.45,8.69C3.84,21.34,4.32,22,5,22h14c0.68,0,1.17-0.66,0.95-1.31C19.27,18.66,18.5,15.86,18.5,12z"/></svg>
  );
};

Eospanorama_vertical_selectOutlined.defaultProps = defaultProps;

export default Eospanorama_vertical_selectOutlined;
