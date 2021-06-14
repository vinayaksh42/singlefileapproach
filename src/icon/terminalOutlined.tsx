
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

function EosterminalOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="12" y="15" width="7" height="2"/><polygon points="4.594 8.414 8.17 12 4.592 15.588 6 17 11 12 6 7 4.594 8.414"/><path d="M22,3H2A2,2,0,0,0,0,5V19a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V5A2,2,0,0,0,22,3Zm0,16H2V5H22Z"/></svg>
  );
};

EosterminalOutlined.defaultProps = defaultProps;

export default EosterminalOutlined;
