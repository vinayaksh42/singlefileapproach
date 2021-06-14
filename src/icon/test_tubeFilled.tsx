
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

function Eostest_tubeFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="13" cy="11" r="1"/><circle cx="11.5" cy="7.5" r="0.5"/><circle cx="12.5" cy="5.5" r="0.5"/><path d="M5,0V2H7V19a5,5,0,0,0,10,0V2h2V0ZM15,2V15H12a1,1,0,0,0-2,0H9V2Z"/></svg>
  );
};

Eostest_tubeFilled.defaultProps = defaultProps;

export default Eostest_tubeFilled;
