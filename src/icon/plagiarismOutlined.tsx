
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

function EosplagiarismOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M18,20L6,20V4h7v5h5V20z"/><path d="M9.03,11.03c-1.37,1.37-1.37,3.58,0,4.95c1.12,1.12,2.8,1.31,4.13,0.59l1.88,1.88l1.41-1.41l-1.88-1.88 c0.71-1.33,0.53-3.01-0.59-4.13C12.61,9.66,10.39,9.66,9.03,11.03z M12.56,14.56c-0.59,0.59-1.54,0.59-2.12,0 c-0.59-0.59-0.59-1.54,0-2.12c0.59-0.59,1.54-0.59,2.12,0C13.15,13.03,13.15,13.97,12.56,14.56z"/></svg>
  );
};

EosplagiarismOutlined.defaultProps = defaultProps;

export default EosplagiarismOutlined;
