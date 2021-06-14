
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

function EospackagesOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <rect x="4" y="6" width="16" height="2"/>
  <rect x="6" y="2" width="12" height="2"/>
  <path d="M2,10v2H4v8a2.00288,2.00288,0,0,0,2,2H18a2.00594,2.00594,0,0,0,2.00352-2L20,12h2V10ZM18,20H6V12H18Z"/>
  <rect x="8" y="17" width="4" height="2"/>
</svg>

  );
};

EospackagesOutlined.defaultProps = defaultProps;

export default EospackagesOutlined;
