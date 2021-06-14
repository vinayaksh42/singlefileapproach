
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

function Eoshotel_classOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11,8.89L11.94,12h2.82l-2.27,1.62l0.93,3.01L11,14.79l-2.42,1.84l0.93-3.01L7.24,12h2.82L11,8.89z M8.58,10H1l6.17,4.41 L4.83,22L11,17.31L17.18,22l-2.35-7.59L21,10h-7.58L11,2L8.58,10z M21.36,22l-1.86-6.01L23.68,13h-3.44l-3.08,2.2l1.46,4.72 L21.36,22z M17,8l-1.82-6l-1.04,3.45L14.91,8H17z"/></svg>
  );
};

Eoshotel_classOutlined.defaultProps = defaultProps;

export default Eoshotel_classOutlined;
