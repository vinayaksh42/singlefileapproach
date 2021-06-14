
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

function Eossystem_imageOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,6V8H7V6Zm-2,4v2h6V10ZM8,14v2h5V14Zm3,4v2h6V18ZM7,18v2H9V18Zm8-4v2h2V14Zm0-8V8h2V6Zm4,16H5V4H19ZM19,2H5A2,2,0,0,0,3,4V22a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V0Z"/></svg>
  );
};

Eossystem_imageOutlined.defaultProps = defaultProps;

export default Eossystem_imageOutlined;
