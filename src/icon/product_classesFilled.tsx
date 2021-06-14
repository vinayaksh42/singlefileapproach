
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

function Eosproduct_classesFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V3A1,1,0,0,0,7,2ZM5,21a2,2,0,1,1,2-2A2,2,0,0,1,5,21Zm2-9H3V3H7Z"/><circle cx="5.01" cy="19.01" r="1"/><polygon points="10.01 2 10.01 9 10.01 11.01 15.01 11.01 15.01 9 15.01 2 10.01 2"/><polygon points="17 2 17 9 17 11.01 22 11.01 22 9 22 2 17 2"/><polygon points="10.01 13 10.01 20 10.01 20.01 10.01 22 15.01 22 15.01 20.01 15.01 20 15.01 13 10.01 13"/><polygon points="17 13 17 20 17 22 22 22 22 20 22 13 17 13"/></svg>

  );
};

Eosproduct_classesFilled.defaultProps = defaultProps;

export default Eosproduct_classesFilled;
