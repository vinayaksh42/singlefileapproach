
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

function EosterminalFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,5H4A2.00587,2.00587,0,0,0,2,7V17a2.00591,2.00591,0,0,0,2,2H20a2.00591,2.00591,0,0,0,2-2V7A2.00587,2.00587,0,0,0,20,5ZM6,17,4.59229,15.58771,8.17,12,4.59387,8.41388,6,7l5,5Zm13,0H12V15h7Z"/></svg>

  );
};

EosterminalFilled.defaultProps = defaultProps;

export default EosterminalFilled;
