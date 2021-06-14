
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

function Eosswitch_cameraOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,4h-3.2L15,2H9L7.2,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M9.9,4h4.2l1.8,2	H20v12H4V6h4.1L9.9,4z"/><path d="M15,11H9V8.5L5.5,12L9,15.5V13h6v2.5l3.5-3.5L15,8.5V11z"/></svg>
  );
};

Eosswitch_cameraOutlined.defaultProps = defaultProps;

export default Eosswitch_cameraOutlined;
