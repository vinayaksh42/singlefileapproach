
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

function EoscommitOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.85858,11a3.98144,3.98144,0,0,0-7.71716,0H2v2H8.14142a3.98144,3.98144,0,0,0,7.71716,0H22V11ZM12,13a1,1,0,1,1,1-1A1,1,0,0,1,12,13Z"/></svg>
  );
};

EoscommitOutlined.defaultProps = defaultProps;

export default EoscommitOutlined;
