
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

function EosprojectOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="6" r="1"/><rect x="6" y="17" width="12" height="2"/><polygon points="10 11.83 12.792 14.624 16.724 10.689 18 12 18 8 14 8 15.31 9.275 12.791 11.794 10 9 6 13 7.414 14.414 10 11.83"/><path d="M19,3H15.70215l-.00049-.00067a4.49706,4.49706,0,0,0-.319-.42444L15.372,2.56323a4.42613,4.42613,0,0,0-2.89-1.51776,2.577,2.577,0,0,0-.96392,0,4.42613,4.42613,0,0,0-2.89,1.51776l-.01074.01166a4.49706,4.49706,0,0,0-.319.42444L8.29785,3H5A3.00328,3.00328,0,0,0,2,6V20a3.00328,3.00328,0,0,0,3,3H19a3.00328,3.00328,0,0,0,3-3V6A3.00328,3.00328,0,0,0,19,3Zm1,17a1.00067,1.00067,0,0,1-1,1H5a1.001,1.001,0,0,1-1-1V6A1.0013,1.0013,0,0,1,5,5H9.55042a2.50011,2.50011,0,0,1,4.89916,0H19a1.001,1.001,0,0,1,1,1Z"/></svg>
  );
};

EosprojectOutlined.defaultProps = defaultProps;

export default EosprojectOutlined;
