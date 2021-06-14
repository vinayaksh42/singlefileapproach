
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

function Eoswine_barOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,3l0,6c0,2.97,2.16,5.43,5,5.91V19H8v2h8v-2h-3v-4.09c2.84-0.48,5-2.94,5-5.91V3H6z M12,13c-1.86,0-3.41-1.28-3.86-3h7.72 C15.41,11.72,13.86,13,12,13z M16,8H8l0-3h8L16,8z"/></svg>
  );
};

Eoswine_barOutlined.defaultProps = defaultProps;

export default Eoswine_barOutlined;
