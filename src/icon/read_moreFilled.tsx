
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

function Eosread_moreFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect height="2" width="9" x="13" y="7"/><rect height="2" width="9" x="13" y="15"/><rect height="2" width="6" x="16" y="11"/><polygon points="13,12 8,7 8,11 2,11 2,13 8,13 8,17"/></svg>
  );
};

Eosread_moreFilled.defaultProps = defaultProps;

export default Eosread_moreFilled;
