
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

function EostypingAnimated(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
<circle cx="16" cy="10" r="0">
<animate attributeName="r" values="0;1.75;0;0" dur="1.5s" repeatCount="indefinite" begin="0.67" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
</circle>
<circle cx="12" cy="10" r="0">
<animate attributeName="r" values="0;1.75;0;0" dur="1.5s" repeatCount="indefinite" begin="0.33" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
</circle>
<circle cx="8" cy="10" r="0">
<animate attributeName="r" values="0;1.75;0;0" dur="1.5s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
</circle>
</svg>
  );
};

EostypingAnimated.defaultProps = defaultProps;

export default EostypingAnimated;
