
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

function Eosimagesearch_rollerFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 2v6H6V6H4v4h10v5h2v8h-6v-8h2v-3H2V4h4V2"/></svg>
  );
};

Eosimagesearch_rollerFilled.defaultProps = defaultProps;

export default Eosimagesearch_rollerFilled;
