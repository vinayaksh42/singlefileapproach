
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

function Eostransit_enterexitFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16v3z"/></svg>
  );
};

Eostransit_enterexitFilled.defaultProps = defaultProps;

export default Eostransit_enterexitFilled;
