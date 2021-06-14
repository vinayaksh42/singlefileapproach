
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

function Eosnetwork_wifiOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21L24,8.98C20.93,5.9,16.69,4,12,4z M12,8c-2.86,0-5.5,0.94-7.65,2.51L2.92,9.07 C5.51,7.08,8.67,6,12,6s6.49,1.08,9.08,3.07l-1.43,1.43C17.5,8.94,14.86,8,12,8z"/></svg>
  );
};

Eosnetwork_wifiOutlined.defaultProps = defaultProps;

export default Eosnetwork_wifiOutlined;
