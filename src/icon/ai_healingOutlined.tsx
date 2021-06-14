
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

function Eosai_healingOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,20.5l-.435-.43161C10.02,18.54142,9,17.53433,9,16.29837A1.71212,1.71212,0,0,1,10.65,14.5a1.74018,1.74018,0,0,1,1.35.68338A1.74018,1.74018,0,0,1,13.35,14.5,1.71212,1.71212,0,0,1,15,16.29837c0,1.236-1.02,2.24305-2.565,3.77329Z"/><rect x="11" y="4" width="2" height="1"/><circle cx="9" cy="4" r="1"/><circle cx="15" cy="4" r="1"/><path d="M18,10H13V8l3-.008A2.99753,2.99753,0,0,0,19,5V3a3.00434,3.00434,0,0,0-3-3H8A3.00434,3.00434,0,0,0,5,3V5A3.00434,3.00434,0,0,0,8,8h3v2H6a3.00465,3.00465,0,0,0-3,3v8a3.0043,3.0043,0,0,0,3,3H18a3.0043,3.0043,0,0,0,3-3V13A3.00465,3.00465,0,0,0,18,10ZM8,6A1.0013,1.0013,0,0,1,7,5V3A1.0013,1.0013,0,0,1,8,2l7.9917.002A1.00642,1.00642,0,0,1,17,3V5a1.00812,1.00812,0,0,1-1.0083,1ZM19,21a1.0011,1.0011,0,0,1-1,1H6a1.00141,1.00141,0,0,1-1-1V13a1.00173,1.00173,0,0,1,1-1H18a1.00141,1.00141,0,0,1,1,1Z"/></svg>
  );
};

Eosai_healingOutlined.defaultProps = defaultProps;

export default Eosai_healingOutlined;
