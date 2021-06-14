
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

function Eosservice_instanceFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="3 21 4.01 21 5.03 21 5.03 18 5.03 15 4.01 15 3 15 3 18 3 21"/><path d="M12.45,22l-2.93-.64-2.93-.64A.76.76,0,0,1,6,20v-4a.71.71,0,0,1,.17-.47.75.75,0,0,1,.43-.27l4.78-.59L16.17,14l.15.55.15.55a1,1,0,0,1-.56.9l-2,.5-2,.5,1.62.65,1.62.65,2.28-.64L19.65,17a.73.73,0,0,1,.58.07.75.75,0,0,1,.36.47l.19.76.2.77a.74.74,0,0,1-.54.9l-3.63,1-3.63,1a1.49,1.49,0,0,1-.36.05A1.55,1.55,0,0,1,12.45,22Z"/><polygon points="18.02 8.5 14.52 6.25 11.02 4 11.02 8.5 11.02 13 14.52 10.75 18.02 8.5"/></svg>

  );
};

Eosservice_instanceFilled.defaultProps = defaultProps;

export default Eosservice_instanceFilled;
