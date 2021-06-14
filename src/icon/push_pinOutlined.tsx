
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

function Eospush_pinOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.99591,12.01123A3.00521,3.00521,0,0,1,16,9V4h1l-.01294.01123A1.02319,1.02319,0,0,0,18,3a1.00722,1.00722,0,0,0-1.01532-.98822L17,2H7a.9997.9997,0,0,0-.00293,1.99939L8,4,7.99561,8.99908A2.99117,2.99117,0,0,1,5,12v2h6v7l1,1,1-1V14h6V12ZM9,12a4.941,4.941,0,0,0,1-3V4h4V9a4.99059,4.99059,0,0,0,1,3Z"/></svg>
  );
};

Eospush_pinOutlined.defaultProps = defaultProps;

export default Eospush_pinOutlined;
