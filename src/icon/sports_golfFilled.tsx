
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

function Eossports_golfFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,16c3.87,0,7-3.13,7-7c0-3.87-3.13-7-7-7S5,5.13,5,9C5,12.87,8.13,16,12,16z M12,4c2.76,0,5,2.24,5,5s-2.24,5-5,5 s-5-2.24-5-5S9.24,4,12,4z"/><circle cx="10" cy="8" r="1"/><circle cx="14" cy="8" r="1"/><circle cx="12" cy="6" r="1"/><path d="M7,19h2c1.1,0,2,0.9,2,2v1h2v-1c0-1.1,0.9-2,2-2h2v-2H7V19z"/></svg>
  );
};

Eossports_golfFilled.defaultProps = defaultProps;

export default Eossports_golfFilled;
