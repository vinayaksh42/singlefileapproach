
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

function Eosvideogame_asset_offFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.19,21.19L2.81,2.81L1.39,4.22L3.3,6.13C2.54,6.41,2,7.15,2,8v8c0,1.1,0.9,2,2,2h11.17l4.61,4.61L21.19,21.19z M9,13v2H7 v-2H5v-2h2V9.83L10.17,13H9z M20.7,17.87C21.46,17.59,22,16.85,22,16V8c0-1.1-0.9-2-2-2H8.83L20.7,17.87z M17.5,9 c0.83,0,1.5,0.67,1.5,1.5S18.33,12,17.5,12S16,11.33,16,10.5S16.67,9,17.5,9z"/></svg>
  );
};

Eosvideogame_asset_offFilled.defaultProps = defaultProps;

export default Eosvideogame_asset_offFilled;
