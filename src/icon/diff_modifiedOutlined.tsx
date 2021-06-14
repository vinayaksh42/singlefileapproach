
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

function Eosdiff_modifiedOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.2,3H4.8A1.8,1.8,0,0,0,3,4.8V19.2A1.8,1.8,0,0,0,4.8,21H19.2A1.8,1.8,0,0,0,21,19.2V4.8A1.8,1.8,0,0,0,19.2,3ZM19,19H5V5H19Z"/><circle cx="12" cy="12" r="4"/></svg>
  );
};

Eosdiff_modifiedOutlined.defaultProps = defaultProps;

export default Eosdiff_modifiedOutlined;
