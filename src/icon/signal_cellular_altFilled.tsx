
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

function Eossignal_cellular_altFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z"/></svg>
  );
};

Eossignal_cellular_altFilled.defaultProps = defaultProps;

export default Eossignal_cellular_altFilled;
