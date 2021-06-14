
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

function Eosphoto_camera_frontOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,5h-3.17L15,3H9L7.17,5H4C2.9,5,2,5.9,2,7v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M20,19H4V7 h4.05l1.83-2h4.24l1.83,2H20V19z"/><circle cx="12" cy="11" r="2"/><path d="M14.78,14.58C13.93,14.21,12.99,14,12,14s-1.93,0.21-2.78,0.58C8.48,14.9,8,15.62,8,16.43V17h8v-0.57 C16,15.62,15.52,14.9,14.78,14.58z"/></svg>
  );
};

Eosphoto_camera_frontOutlined.defaultProps = defaultProps;

export default Eosphoto_camera_frontOutlined;
