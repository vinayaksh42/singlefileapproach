
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

function Eossync_altFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,8l-4-4v3H3v2h15v3L22,8z"/><path d="M2,16l4,4v-3h15v-2H6v-3L2,16z"/></svg>
  );
};

Eossync_altFilled.defaultProps = defaultProps;

export default Eossync_altFilled;
