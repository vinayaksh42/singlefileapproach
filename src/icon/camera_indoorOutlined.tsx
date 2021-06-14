
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

function Eoscamera_indoorOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,13v-1c0-0.55-0.45-1-1-1H9c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-1l2,1.06v-4.12L14,13z M12,5.5l6,4.5v9H6v-9L12,5.5 M12,3L4,9v12h16V9L12,3z"/></svg>
  );
};

Eoscamera_indoorOutlined.defaultProps = defaultProps;

export default Eoscamera_indoorOutlined;
