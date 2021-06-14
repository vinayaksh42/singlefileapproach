
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

function EospipelineOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,20V12a2,2,0,0,0-2-2H15V9H13v6h2V14h3v6H17v2h6V20Zm-1,0H19V13H15V11h5a1,1,0,0,1,1,1Z"/><path d="M9,9v1H6V4H7V2H1V4H2v8a2,2,0,0,0,2,2H9v1h2V9Zm0,4H4a1,1,0,0,1-1-1V4H5v7H9Z"/></svg>
  );
};

EospipelineOutlined.defaultProps = defaultProps;

export default EospipelineOutlined;
