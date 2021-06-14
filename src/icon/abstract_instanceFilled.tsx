
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

function Eosabstract_instanceFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,11l-4-7A2,2,0,0,0,16,3H8A2,2,0,0,0,6.3,4l-4,7a2,2,0,0,0,0,2l4,7A2,2,0,0,0,8,21H16a2,2,0,0,0,1.74-1l4-7A2,2,0,0,0,21.71,11ZM12,14a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/></svg>

  );
};

Eosabstract_instanceFilled.defaultProps = defaultProps;

export default Eosabstract_instanceFilled;
