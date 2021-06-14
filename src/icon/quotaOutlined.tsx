
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

function EosquotaOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.93091,12A8.05425,8.05425,0,1,1,12,5.06909V3H11A10,10,0,1,0,21,13V12Z"/><path d="M20.364,3.63605A9.00308,9.00308,0,0,0,14,1v9h9A9.003,9.003,0,0,0,20.364,3.63605ZM16,3.2937A7.00966,7.00966,0,0,1,20.7063,8H16Z"/></svg>
  );
};

EosquotaOutlined.defaultProps = defaultProps;

export default EosquotaOutlined;
