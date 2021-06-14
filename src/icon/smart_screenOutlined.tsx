
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

function Eossmart_screenOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect height="1.5" width="1.5" x="12.5" y="11.25"/><rect height="1.5" width="1.5" x="15" y="11.25"/><rect height="1.5" width="1.5" x="10" y="11.25"/><rect height="1.5" width="1.5" x="7.5" y="11.25"/><path d="M21,5H3C1.9,5,1,5.9,1,7v10c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V7C23,5.9,22.1,5,21,5z M4,17H3V7h1V17z M18,17H6V7h12V17z M21,17h-1V7h1V17z"/></svg>
  );
};

Eossmart_screenOutlined.defaultProps = defaultProps;

export default Eossmart_screenOutlined;
