
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

function Eosperm_mediaOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm5 9h14l-3.5-4.5-2.5 3.01L11.5 9zM22 4h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 12H6V4h5.17l1.41 1.41.59.59H22v10z"/></svg>
  );
};

Eosperm_mediaOutlined.defaultProps = defaultProps;

export default Eosperm_mediaOutlined;
