
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

function Eosarrow_forward_iosOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></svg>
  );
};

Eosarrow_forward_iosOutlined.defaultProps = defaultProps;

export default Eosarrow_forward_iosOutlined;
