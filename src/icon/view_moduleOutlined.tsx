
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

function Eosview_moduleOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 5v13h17V5H4zm10 2v3.5h-3V7h3zM6 7h3v3.5H6V7zm0 9v-3.5h3V16H6zm5 0v-3.5h3V16h-3zm8 0h-3v-3.5h3V16zm-3-5.5V7h3v3.5h-3z"/></svg>
  );
};

Eosview_moduleOutlined.defaultProps = defaultProps;

export default Eosview_moduleOutlined;
