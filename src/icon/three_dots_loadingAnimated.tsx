
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

function Eosthree_dots_loadingAnimated(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
<circle cx="18" cy="12" r="0">
<animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.67" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
</circle>
<circle cx="12" cy="12" r="0">
<animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.33" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
</circle>
<circle cx="6" cy="12" r="0">
<animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
</circle>
</svg>

  );
};

Eosthree_dots_loadingAnimated.defaultProps = defaultProps;

export default Eosthree_dots_loadingAnimated;
