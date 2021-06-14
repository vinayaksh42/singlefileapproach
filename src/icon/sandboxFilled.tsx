
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

function EossandboxFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="9.54" cy="8.99" r="1"/><circle cx="11.04" cy="11.99" r="1"/><circle cx="8.04" cy="11.99" r="1"/><path d="M19,9.24V15H15a3,3,0,0,1-6,0H5V5h9.77l2-2H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V7.24Z"/><path d="M17,10.1l-.84-.84-.26.26L14.46,8.11l.26-.26-.78-.78c-.37-.38-.88-.17-1.15.31L11.62,9.29a2,2,0,0,1,1.49,1.16,1.54,1.54,0,0,1,.6-.13A1.67,1.67,0,0,1,15.39,12h0l1.25-.74C17.14,11,17.35,10.48,17,10.1Z"/><polygon points="15.87 9.53 16.13 9.26 21.41 3.99 19.99 2.57 14.72 7.85 14.46 8.11 15.87 9.53"/></svg>

  );
};

EossandboxFilled.defaultProps = defaultProps;

export default EossandboxFilled;
