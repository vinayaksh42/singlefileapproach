
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

function EosscienceFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.68,22H5.32a2.31755,2.31755,0,0,1-1.96-3.55L4.27,17,9,9.46V3H7V1H17V3H15V9.46L19.73,17l.91,1.45A2.31755,2.31755,0,0,1,18.68,22Z"/></svg>

  );
};

EosscienceFilled.defaultProps = defaultProps;

export default EosscienceFilled;
