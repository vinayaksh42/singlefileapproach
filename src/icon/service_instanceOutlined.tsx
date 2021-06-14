
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

function Eosservice_instanceOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.97723,19.08972l-.38794-1.53155a.74677.74677,0,0,0-.35614-.46643.76426.76426,0,0,0-.58728-.07148L15.0943,18.304,12,17l3.91461-1.00336a1.87961,1.87961,0,0,0,.55878-.89239L16.16559,14,8,15H3v6H8l4.45477.96436a3.19359,3.19359,0,0,0,.7276-.01709l7.259-1.95429a.75456.75456,0,0,0,.45453-.34375A.73758.73758,0,0,0,20.97723,19.08972ZM6,20H4V16H6v4Zm6.92236.98163A.55692.55692,0,0,1,12.78357,21a.53837.53837,0,0,1-.11456-.01239L8,19.96332v-3.9444l7.32886-.90765L10,17l4.72125,2.23181.31635.1272.32812-.09253,4.31635-1.21741.26385,1.04169Z"/><path d="M9,2V13l8.18-5.5Zm2,3.76L13.6,7.5,11,9.25Z"/></svg>
  );
};

Eosservice_instanceOutlined.defaultProps = defaultProps;

export default Eosservice_instanceOutlined;
