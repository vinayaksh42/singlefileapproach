
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

function EospipelineFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,9v1H5V4H6V2H1V4H2v7a2,2,0,0,0,2,2H9v1h2V9Z"/><path d="M22,20V12a2,2,0,0,0-2-2H15V9H13v5h2V13h4v7H18v2h5V20Z"/></svg>
  );
};

EospipelineFilled.defaultProps = defaultProps;

export default EospipelineFilled;
