
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

function Eosmachine_learningOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,10a16.84028,16.84028,0,0,0-9,3.24367A16.84028,16.84028,0,0,0,3,10v2.96005a2.00363,2.00363,0,0,0-2,2.00727V15.971c0,1.10856,2,2.20751,2,2.20751v2.00726a14.868,14.868,0,0,1,7.41687,2.55049A15.08968,15.08968,0,0,1,12,24a15.08968,15.08968,0,0,1,1.58313-1.26379A14.868,14.868,0,0,1,21,20.18572V17.97821A2.00366,2.00366,0,0,0,23,15.971V14.96732a2.00363,2.00363,0,0,0-2-2.00727ZM12,21.42213a16.84123,16.84123,0,0,0-7-2.996v-6.151a14.80025,14.80025,0,0,1,5.41687,2.28267A15.08968,15.08968,0,0,1,12,15.82154a15.08968,15.08968,0,0,1,1.58313-1.26379A14.80025,14.80025,0,0,1,19,12.27508v6.151A16.84123,16.84123,0,0,0,12,21.42213Z"/><rect x="11" y="8" width="2" height="1"/><rect x="11" y="4" width="2" height="1"/><rect x="11" y="10" width="2" height="1"/><path d="M9,5a1,1,0,0,0,1-1,.983.983,0,0,0-.99-.99A.99506.99506,0,1,0,9,5Z"/><circle cx="15" cy="4" r="1"/><path d="M16,8H8A3.00328,3.00328,0,0,1,5,5V3A3.00328,3.00328,0,0,1,8,0h8a3.00328,3.00328,0,0,1,3,3V5A3.00328,3.00328,0,0,1,16,8ZM8,2A1.0013,1.0013,0,0,0,7,3V5A1.0013,1.0013,0,0,0,8,6h8a1.001,1.001,0,0,0,1-1V3a1.001,1.001,0,0,0-1-1Z"/></svg>
  );
};

Eosmachine_learningOutlined.defaultProps = defaultProps;

export default Eosmachine_learningOutlined;
