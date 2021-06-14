
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

function Eosbreakfast_diningFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,3H6C3.79,3,2,4.79,2,7c0,1.48,0.81,2.75,2,3.45V19c0,1.1,0.9,2,2,2h12 c1.1,0,2-0.9,2-2v-8.55c1.19-0.69,2-1.97,2-3.45C22,4.79,20.21,3,18,3z M14,15h-4v-4h4V15z" fill-rule="evenodd"/></svg>
  );
};

Eosbreakfast_diningFilled.defaultProps = defaultProps;

export default Eosbreakfast_diningFilled;
