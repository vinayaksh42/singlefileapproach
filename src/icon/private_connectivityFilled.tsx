
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

function Eosprivate_connectivityFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.93,11c-0.49-3.39-3.4-6-6.93-6s-6.44,2.61-6.93,6H2v2h3.07c0.49,3.39,3.4,6,6.93,6s6.44-2.61,6.93-6H22v-2H18.93z M15,14.5c0,0.55-0.45,1-1,1h-4c-0.55,0-1-0.45-1-1v-3c0-0.55,0.45-1,1-1v-1c0-1.21,1.08-2.18,2.34-1.97C13.32,7.69,14,8.61,14,9.61 v0.89c0.55,0,1,0.45,1,1V14.5z M12.75,13c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75c0-0.41,0.34-0.75,0.75-0.75 S12.75,12.59,12.75,13z M13,9.5v1h-2v-1c0-0.55,0.45-1,1-1S13,8.95,13,9.5z"/></svg>
  );
};

Eosprivate_connectivityFilled.defaultProps = defaultProps;

export default Eosprivate_connectivityFilled;
