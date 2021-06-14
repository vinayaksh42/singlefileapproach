
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

function Eostable_rowsFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,7H2V2h20V7z M22,9.5H2v5h20V9.5z M22,17H2v5h20V17z"/></svg>
  );
};

Eostable_rowsFilled.defaultProps = defaultProps;

export default Eostable_rowsFilled;
