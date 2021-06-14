
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

function Eosendpoints_connectedFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="21.02 13.01 21.02 11.01 17.01 11.01 17.01 6.01 18.01 6.01 18.01 2.01 14.01 2.01 14.01 6.01 15.01 6.01 15.01 11.01 3.01 11.01 3.01 13.01 7 13.01 7 18 6 18 6 22 9.99 22 9.99 18 8.99 18 8.99 13.01 21.02 13.01"/></svg>

  );
};

Eosendpoints_connectedFilled.defaultProps = defaultProps;

export default Eosendpoints_connectedFilled;
