
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

function EosorganizationFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="20.01 10.99 18.51 10.99 13.01 10.99 13.01 8.99 11.01 8.99 11.01 10.99 5.47 10.99 4.01 10.99 3.47 10.99 3.47 14.99 5.47 14.99 5.47 12.99 11.01 12.99 11.01 14.99 13.01 14.99 13.01 12.99 18.51 12.99 18.51 14.99 20.51 14.99 20.51 10.99 20.01 10.99"/><circle cx="12.01" cy="4.51" r="2.5"/><circle cx="4.47" cy="19.49" r="2.5"/><circle cx="12.01" cy="19.49" r="2.5"/><circle cx="19.51" cy="19.49" r="2.5"/></svg>

  );
};

EosorganizationFilled.defaultProps = defaultProps;

export default EosorganizationFilled;
