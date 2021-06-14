
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

function EospackageOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <rect x="8" y="16" width="4" height="2"/>
  <path d="M2,6V8H4V19a2.00282,2.00282,0,0,0,2,2H18a2.00286,2.00286,0,0,0,2-2V8h2V6ZM18,19H6V8H18Z"/>
</svg>

  );
};

EospackageOutlined.defaultProps = defaultProps;

export default EospackageOutlined;
