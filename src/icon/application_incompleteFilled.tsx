
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

function Eosapplication_incompleteFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1,3V5H23l.00008-2A2.00007,2.00007,0,0,0,21,1H3A2,2,0,0,0,1,3ZM4,4.00092a1,1,0,1,1,1-1A1,1,0,0,1,4,4.00092ZM7.00008,4a1,1,0,1,1,1-1A1.003,1.003,0,0,1,7.00008,4Z"/><path d="M1,6V20a1.99946,1.99946,0,0,0,2,2H21a1.99946,1.99946,0,0,0,2-2V6ZM12,19A5,5,0,0,1,12,9v5h5A5,5,0,0,1,12,19Z"/></svg>
  );
};

Eosapplication_incompleteFilled.defaultProps = defaultProps;

export default Eosapplication_incompleteFilled;
