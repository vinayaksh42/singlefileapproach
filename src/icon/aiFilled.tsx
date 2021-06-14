
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

function EosaiFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,11V9H19V7a2.00587,2.00587,0,0,0-2-2H15V3H13V5H11V3H9V5H7A2.00587,2.00587,0,0,0,5,7V9H3v2H5v2H3v2H5v2a2.00591,2.00591,0,0,0,2,2H9v2h2V19h2v2h2V19h2a2.00591,2.00591,0,0,0,2-2V15h2V13H19V11Zm-4,6H7V7H17Z"/><path d="M11.36119,8h-1.3448L8.00515,16H9.03329L9.497,14.12463h2.31618L12.26513,16h1.06232ZM9.6324,13.32371,10.64924,8.9504h.04547l.9831,4.37331Z"/><rect x="14.2436" y="8" width="1" height="8"/></svg>
  );
};

EosaiFilled.defaultProps = defaultProps;

export default EosaiFilled;
