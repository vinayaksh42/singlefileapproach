
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

function EosscientistFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8,17c-2.67,0-8,1.34-8,4v3H16V21C16,18.34,10.67,17,8,17Z"/><circle cx="8" cy="12" r="4"/><circle cx="20" cy="5" r="1"/><circle cx="21.5" cy="3.5" r="0.5"/><circle cx="20.5" cy="1.5" r="0.5"/><path d="M16,7V8h1l.00285,10.03118C17,19.71222,18,21,19.5,21S22,19.79326,22,18V8h1V7Zm5,8-.56537.424a1.76514,1.76514,0,0,1-1.04925.326H19V15H18V13h1V12H18V10h1V9H18V8h3Z"/></svg>

  );
};

EosscientistFilled.defaultProps = defaultProps;

export default EosscientistFilled;
