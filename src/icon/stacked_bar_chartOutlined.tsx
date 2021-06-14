
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

function Eosstacked_bar_chartOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,10h3v10H6V10z M6,5h3v4H6V5z M16,16h3v4h-3V16z M16,13h3v2h-3V13z M11,13h3v7h-3V13z M11,9h3v3h-3V9z"/></svg>
  );
};

Eosstacked_bar_chartOutlined.defaultProps = defaultProps;

export default Eosstacked_bar_chartOutlined;
