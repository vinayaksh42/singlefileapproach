
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

function Eosnight_shelterFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,3L4,9v12h16V9L12,3z M9.75,12.5c0.69,0,1.25,0.56,1.25,1.25S10.44,15,9.75,15S8.5,14.44,8.5,13.75S9.06,12.5,9.75,12.5z M17,18h-1v-1.5H8V18H7v-7h1v4.5h3.5V12H15c1.1,0,2,0.9,2,2V18z"/></svg>
  );
};

Eosnight_shelterFilled.defaultProps = defaultProps;

export default Eosnight_shelterFilled;
