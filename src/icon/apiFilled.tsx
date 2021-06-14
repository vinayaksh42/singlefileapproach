
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

function EosapiFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="13.26" y="10.5" width="2" height="1"/><path d="M20,4H4A2,2,0,0,0,2,6V18a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V6A2,2,0,0,0,20,4ZM8.4,15,8,13.77H6.06L5.62,15H4L6.2,9H7.82L10,15Zm8.36-3.5a1.47,1.47,0,0,1-1.5,1.5h-2v2h-1.5V9h3.5a1.47,1.47,0,0,1,1.5,1.5ZM20,15h-1.5V9H20Z"/><polygon points="6.43 12.77 7.59 12.77 7.01 11.18 6.43 12.77"/></svg>

  );
};

EosapiFilled.defaultProps = defaultProps;

export default EosapiFilled;
