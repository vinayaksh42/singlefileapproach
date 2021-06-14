
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

function Eosnight_shelterOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,5.5l6,4.5v9H6v-9L12,5.5 M12,3L4,9v12h16V9L12,3L12,3z M15,12h-3.5v3.5H8V11H7v7h1v-1.5h8V18h1v-4 C17,12.9,16.1,12,15,12z M9.75,12.5c-0.69,0-1.25,0.56-1.25,1.25C8.5,14.44,9.06,15,9.75,15S11,14.44,11,13.75 C11,13.06,10.44,12.5,9.75,12.5z"/></svg>
  );
};

Eosnight_shelterOutlined.defaultProps = defaultProps;

export default Eosnight_shelterOutlined;
