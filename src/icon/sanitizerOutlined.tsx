
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

function EossanitizerOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5,6.5C15.5,5.66,17,4,17,4s1.5,1.66,1.5,2.5C18.5,7.33,17.83,8,17,8S15.5,7.33,15.5,6.5z M19.5,15 c1.38,0,2.5-1.12,2.5-2.5c0-1.67-2.5-4.5-2.5-4.5S17,10.83,17,12.5C17,13.88,18.12,15,19.5,15z M13,14h-2v-2H9v2H7v2h2v2h2v-2h2V14z M16,12v8c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2v-8c0-2.97,2.16-5.43,5-5.91V4H7V2h6c1.13,0,2.15,0.39,2.99,1.01l-1.43,1.43 C14.1,4.17,13.57,4,13,4h-2v2.09C13.84,6.57,16,9.03,16,12z M14,12c0-2.21-1.79-4-4-4s-4,1.79-4,4v8h8V12z"/></svg>
  );
};

EossanitizerOutlined.defaultProps = defaultProps;

export default EossanitizerOutlined;
