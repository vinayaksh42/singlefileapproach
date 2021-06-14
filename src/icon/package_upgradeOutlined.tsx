
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

function Eospackage_upgradeOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <polygon points="22.243 20.243 19.414 17.414 18 16 13.751 20.249 15.166 21.663 18 18.829 20.828 21.657 22.243 20.243"/>
  <rect x="7" y="15" width="4" height="2"/>
  <path d="M22,6H2V8H4V19a2.00284,2.00284,0,0,0,2,2h5l7-7,2,2V8h2ZM6,8H18v3l-8,8H6Z"/>
</svg>

  );
};

Eospackage_upgradeOutlined.defaultProps = defaultProps;

export default Eospackage_upgradeOutlined;
