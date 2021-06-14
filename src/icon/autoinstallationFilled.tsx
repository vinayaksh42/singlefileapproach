
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

function EosautoinstallationFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.42383,16.5h5.12109v-6h4.44757a9.0044,9.0044,0,1,0-6.4588,9.10986ZM8.51642,10.97357a2.5,2.5,0,1,1,2.5,2.5A2.5,2.5,0,0,1,8.51642,10.97357Z"/><polygon points="22.045 18 19.045 18 19.045 12 17.045 12 17.045 18 14.045 18 18.045 22 22.045 18"/></svg>
  );
};

EosautoinstallationFilled.defaultProps = defaultProps;

export default EosautoinstallationFilled;
