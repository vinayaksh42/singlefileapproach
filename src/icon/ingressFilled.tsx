
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

function EosingressFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,24H10V20h4v4Zm2-13.98247H13v7.99631H11V10.01753H8L9,9.0166l1-1.00092,1-1.00092,1-1.00092,1,1.00092,1,1.00092L15,9.0166ZM1,15.99935V3.00065a1.9829,1.9829,0,0,1,.15781-.77682,2.01986,2.01986,0,0,1,1.06563-1.066A1.98115,1.98115,0,0,1,3,1H21a1.98115,1.98115,0,0,1,.77656.15786,2.01986,2.01986,0,0,1,1.06563,1.066A1.9829,1.9829,0,0,1,23,3.00065v12.9987a1.98294,1.98294,0,0,1-.15781.77682,2.01986,2.01986,0,0,1-1.06563,1.066A1.98115,1.98115,0,0,1,21,18H15V16.00935h6V3.0096H3V16.00935H9V18H3a1.98115,1.98115,0,0,1-.77656-.15786,2.01986,2.01986,0,0,1-1.06563-1.066A1.98294,1.98294,0,0,1,1,15.99935Z"/></svg>

  );
};

EosingressFilled.defaultProps = defaultProps;

export default EosingressFilled;
