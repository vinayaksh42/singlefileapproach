
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

function Eossports_baseballOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M5.61,16.78C4.6,15.45,4,13.8,4,12 s0.6-3.45,1.61-4.78C7.06,8.31,8,10.05,8,12S7.06,15.69,5.61,16.78z M12,20c-1.89,0-3.63-0.66-5-1.76c1.83-1.47,3-3.71,3-6.24 S8.83,7.23,7,5.76C8.37,4.66,10.11,4,12,4s3.63,0.66,5,1.76c-1.83,1.47-3,3.71-3,6.24s1.17,4.77,3,6.24C15.63,19.34,13.89,20,12,20 z M18.39,16.78C16.94,15.69,16,13.95,16,12s0.94-3.69,2.39-4.78C19.4,8.55,20,10.2,20,12S19.4,15.45,18.39,16.78z"/></svg>
  );
};

Eossports_baseballOutlined.defaultProps = defaultProps;

export default Eossports_baseballOutlined;
