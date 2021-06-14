
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

function EosdeployFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M24.01,20.02744v2H.01v-2h4v-1a2.00591,2.00591,0,0,1-2-2v-10a2.00587,2.00587,0,0,1,2-2H6.00639v2H4.01v10h16v-10H18.00636v-2H20.01a2.00583,2.00583,0,0,1,2,2l-.01,10a1.99731,1.99731,0,0,1-1.99,2v1Zm-9-6.0127-3-3-3,3h2v2.01h2v-2.01Zm.995-7.99081a4,4,0,1,1-4-4A4.00145,4.00145,0,0,1,16.005,6.02393Zm-4.4,2.95959V8.42389a.80233.80233,0,0,1-.8-.8v-.4L9.06006,5.479A2.9577,2.9577,0,0,0,11.605,8.98352Zm2.65839-1.00641a2.97657,2.97657,0,0,0-1.06824-4.7044.79733.79733,0,0,1-.7901.75122H11.605v.8a.40121.40121,0,0,1-.4.4h-.8v.8h2.4a.40117.40117,0,0,1,.4.4v1.2h.4A.78657.78657,0,0,1,14.26337,7.97711Z"/>
</svg>

  );
};

EosdeployFilled.defaultProps = defaultProps;

export default EosdeployFilled;
