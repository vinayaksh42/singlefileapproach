
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

function EosvolumeOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,22H5V2H19ZM19,0H5A2,2,0,0,0,3,2V22a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2Z"/><path d="M8,4A1,1,0,1,1,7,3,1,1,0,0,1,8,4Z"/><path d="M18,4a1,1,0,1,1-1-1A1,1,0,0,1,18,4Z"/><path d="M8,20a1,1,0,1,1-1-1A1,1,0,0,1,8,20Z"/><path d="M18,20a1,1,0,1,1-1-1A1,1,0,0,1,18,20Z"/><path d="M12,6a5,5,0,0,0-5,5,4.93633,4.93633,0,0,0,1,3h3v1.89923A5.00112,5.00112,0,0,0,17,11C17,6,12,6,12,6Zm0,7a2,2,0,1,1,2-2,2,2,0,0,1-2,2Z"/></svg>
  );
};

EosvolumeOutlined.defaultProps = defaultProps;

export default EosvolumeOutlined;
