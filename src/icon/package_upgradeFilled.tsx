
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

function Eospackage_upgradeFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.77,14.25,20,16.49V8h2V6H2V8H4V19a2,2,0,0,0,2,2h5ZM6,16h5v2H6Z"/><polygon points="22.01 20.53 19.18 17.7 17.77 16.29 13.52 20.54 14.93 21.95 17.77 19.12 20.6 21.95 22.01 20.53"/></svg>

  );
};

Eospackage_upgradeFilled.defaultProps = defaultProps;

export default Eospackage_upgradeFilled;
