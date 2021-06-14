
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

function Eoswb_twilightFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect height="2" transform="matrix(0.7069 -0.7074 0.7074 0.7069 -0.3887 15.676)" width="3" x="17.22" y="7.31"/><rect height="2" width="20" x="2" y="18"/><rect height="3" width="2" x="11" y="4"/><rect height="3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.2992 6.1783)" width="2" x="4.31" y="6.78"/><path d="M5,16h14c0-3.87-3.13-7-7-7S5,12.13,5,16z"/></svg>
  );
};

Eoswb_twilightFilled.defaultProps = defaultProps;

export default Eoswb_twilightFilled;
