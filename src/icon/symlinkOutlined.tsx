
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

function EossymlinkOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,12l4,3.5L13,19V17a6.95649,6.95649,0,0,0-6,3c.56-2.67,2.11-5.46,6-6Z"/><path d="M13,4l5,5H13Z"/><path d="M14.68,0H4A2.00587,2.00587,0,0,0,2,2V22a2.00591,2.00591,0,0,0,2,2H20a2.00591,2.00591,0,0,0,2-2V7.15ZM20,22H4V2h9.83L20,8Z"/></svg>
  );
};

EossymlinkOutlined.defaultProps = defaultProps;

export default EossymlinkOutlined;
