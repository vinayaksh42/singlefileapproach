
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

function Eosreplica_setFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,13H15a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V15A2,2,0,0,0,21,13Zm0,8H15V15h6ZM16,7v4H14V7H8v6h3v2H8a2,2,0,0,1-2-2V7A2,2,0,0,1,8,5h6A2,2,0,0,1,16,7ZM4.00259,8.99756h-2V3.00244a1.99991,1.99991,0,0,1,2-2H9.99741v2H4.00259Z"/></svg>

  );
};

Eosreplica_setFilled.defaultProps = defaultProps;

export default Eosreplica_setFilled;
