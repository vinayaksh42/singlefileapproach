
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

function Eossend_to_mobileOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,8l4,4l-4,4l-1.41-1.41L18.17,13H13v-2h5.17l-1.59-1.59L18,8z M7,1.01L17,1c1.1,0,2,0.9,2,2v4h-2V6H7v12h10v-1h2v4 c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V3C5,1.9,5.9,1.01,7,1.01z M7,21h10v-1H7V21z M7,4h10V3H7V4z"/></svg>
  );
};

Eossend_to_mobileOutlined.defaultProps = defaultProps;

export default Eossend_to_mobileOutlined;
