
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

function Eossystem_imageFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,3H6A2,2,0,0,0,4,5V20a2,2,0,0,0,2,2H17a2,2,0,0,0,1.41-.58A2,2,0,0,0,19,20V2ZM6,6h8V8H6Zm4,14H8V18h2Zm0-6h4v2H10Zm7,6H11V18h6Zm0-4H15V14h2Zm0-4H12V10h5Zm0-4H15V6h2Z"/></svg>

  );
};

Eossystem_imageFilled.defaultProps = defaultProps;

export default Eossystem_imageFilled;
