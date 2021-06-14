
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

function EosserviceOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="9 4 7 6 5 8 7 10 9 12 9.7 11.3 10.4 10.6 9.1 9.3 7.8 8 9.1 6.7 10.4 5.4 9.7 4.7 9 4"/><polygon points="15 4 14.3 4.7 13.6 5.4 14.9 6.7 16.2 8 14.9 9.3 13.6 10.6 14.3 11.3 15 12 17 10 19 8 17 6 15 4"/><path d="M20.97723,19.08972l-.38794-1.53155a.74677.74677,0,0,0-.35614-.46643.76426.76426,0,0,0-.58728-.07148L15.0943,18.304,12,17l3.91461-1.00336a1.87961,1.87961,0,0,0,.55878-.89239L16.16559,14,8,15H3v6H8l4.45477.96436a3.19359,3.19359,0,0,0,.7276-.01709l7.259-1.95429a.75456.75456,0,0,0,.45453-.34375A.73758.73758,0,0,0,20.97723,19.08972ZM6,20H4V16H6v4Zm6.92236.98163A.55692.55692,0,0,1,12.78357,21a.53837.53837,0,0,1-.11456-.01239L8,19.96332v-3.9444l7.32886-.90765L10,17l4.72125,2.23181.31635.1272.32812-.09253,4.31635-1.21741.26385,1.04169Z"/></svg>
  );
};

EosserviceOutlined.defaultProps = defaultProps;

export default EosserviceOutlined;
