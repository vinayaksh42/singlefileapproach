
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

function Eosqr_codeFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,11h8V3H3V11z M5,5h4v4H5V5z"/><path d="M3,21h8v-8H3V21z M5,15h4v4H5V15z"/><path d="M13,3v8h8V3H13z M19,9h-4V5h4V9z"/><rect height="2" width="2" x="19" y="19"/><rect height="2" width="2" x="13" y="13"/><rect height="2" width="2" x="15" y="15"/><rect height="2" width="2" x="13" y="17"/><rect height="2" width="2" x="15" y="19"/><rect height="2" width="2" x="17" y="17"/><rect height="2" width="2" x="17" y="13"/><rect height="2" width="2" x="19" y="15"/></svg>
  );
};

Eosqr_codeFilled.defaultProps = defaultProps;

export default Eosqr_codeFilled;
