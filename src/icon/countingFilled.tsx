
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

function EoscountingFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="2" y="2" width="2" height="20"/><rect x="11" y="-5" width="2" height="20" transform="translate(17 -7) rotate(90)"/><rect x="20" y="2" width="2" height="20"/><circle cx="8" cy="5" r="2"/><rect x="11" y="1" width="2" height="20" transform="translate(23 -1) rotate(90)"/><circle cx="10" cy="11" r="2"/><circle cx="16" cy="11" r="2"/><rect x="11" y="7" width="2" height="20" transform="translate(29 5) rotate(90)"/><rect x="11" y="10" width="2" height="24" transform="translate(34 10) rotate(90)"/><circle cx="8" cy="17" r="2"/></svg>
  );
};

EoscountingFilled.defaultProps = defaultProps;

export default EoscountingFilled;
