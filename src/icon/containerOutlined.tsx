
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

function EoscontainerOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,10H18L13.21008,6.5A1.85387,1.85387,0,0,0,14,5a2.03073,2.03073,0,0,0-1-1.72137V2H12V4a1,1,0,1,1-1,1H10a1.84576,1.84576,0,0,0,.79565,1.5L6,10H4a2.00228,2.00228,0,0,0-2,2v8a2.00231,2.00231,0,0,0,2,2H20a1.99746,1.99746,0,0,0,2-2V12A2.00228,2.00228,0,0,0,20,10ZM12,7h0c.00568,0,4,3,4,3H8Zm8,13H4V12H20Z"/><path d="M14,19a1,1,0,0,0,1-1V14a1,1,0,0,0-2,0v4A1,1,0,0,0,14,19Z"/><path d="M18,19a1,1,0,0,0,1-1V14a1,1,0,0,0-2,0v4A1,1,0,0,0,18,19Z"/><path d="M6,19a1,1,0,0,0,1-1V14a1,1,0,0,0-2,0v4A1,1,0,0,0,6,19Z"/><path d="M10,19a1,1,0,0,0,1-1V14a1,1,0,0,0-2,0v4A1,1,0,0,0,10,19Z"/></svg>
  );
};

EoscontainerOutlined.defaultProps = defaultProps;

export default EoscontainerOutlined;
