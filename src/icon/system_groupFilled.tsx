
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

function Eossystem_groupFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,1H3A2,2,0,0,0,1,3H1v9H3V3H17Z"/><path d="M21,5H7A2,2,0,0,0,5,7V17a2,2,0,0,0,2,2h5.53v1.53H11V22h6V20.52H15.48V19H21a2,2,0,0,0,2-2V7A2,2,0,0,0,21,5Zm0,12H7V7H21Z"/></svg>

  );
};

Eossystem_groupFilled.defaultProps = defaultProps;

export default Eossystem_groupFilled;
