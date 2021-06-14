
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

function EosendpointsFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3.02" y="10.98" width="2" height="2"/><rect x="6.99" y="15.01" width="2" height="2"/><rect x="6.99" y="10.98" width="2" height="2"/><rect x="11" y="10.98" width="2" height="2"/><rect x="15.01" y="10.98" width="2" height="2"/><rect x="19.02" y="10.98" width="2" height="2"/><rect x="15.01" y="7.01" width="2" height="2"/><rect x="5.99" y="17.99" width="4" height="4"/><rect x="14.01" y="2.01" width="4" height="4"/></svg>

  );
};

EosendpointsFilled.defaultProps = defaultProps;

export default EosendpointsFilled;
