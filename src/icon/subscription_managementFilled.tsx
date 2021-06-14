
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

function Eossubscription_managementFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="6 19 11 19 11 23 8.5 21.5 6 23 6 19"/><path d="M20,1H12V23l2.5-1.5L17,23V21h3a2,2,0,0,0,2-2V3A2,2,0,0,0,20,1ZM14,5h2V7H14Zm0,5h2v2H14Zm0,5h2v2H14Z"/><path d="M4,1A2.00588,2.00588,0,0,0,2,3V19a2.006,2.006,0,0,0,2,2V3h7V1Z"/><rect x="6" y="5" width="2" height="2"/><rect x="6" y="10" width="2" height="2"/><rect x="6" y="15" width="2" height="2"/></svg>

  );
};

Eossubscription_managementFilled.defaultProps = defaultProps;

export default Eossubscription_managementFilled;
