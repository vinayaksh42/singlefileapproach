
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

function Eosbuild_circleOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10 C22,6.48,17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8s8,3.59,8,8C20,16.41,16.41,20,12,20z" fill-rule="evenodd"/><path d="M13.49,11.38c0.43-1.22,0.17-2.64-0.81-3.62c-1.11-1.11-2.79-1.3-4.1-0.59 l2.35,2.35l-1.41,1.41L7.17,8.58c-0.71,1.32-0.52,2.99,0.59,4.1c0.98,0.98,2.4,1.24,3.62,0.81l3.41,3.41c0.2,0.2,0.51,0.2,0.71,0 l1.4-1.4c0.2-0.2,0.2-0.51,0-0.71L13.49,11.38z" fill-rule="evenodd"/></svg>
  );
};

Eosbuild_circleOutlined.defaultProps = defaultProps;

export default Eosbuild_circleOutlined;
