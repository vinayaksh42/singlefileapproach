
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

function EoscompressOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,9v2h16V9H4z M16,4l-1.41-1.41L13,4.17V1h-2v3.19L9.39,2.61L8,4l4,4L16,4z M4,14h16v-2H4V14z M8,19l1.39,1.39L11,18.81 V22h2v-3.17l1.59,1.59L16,19l-4-4L8,19z"/></svg>
  );
};

EoscompressOutlined.defaultProps = defaultProps;

export default EoscompressOutlined;
