
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

function EosserviceFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="3 21 4 21 5 21 5 18 5 15 4 15 3 15 3 18 3 21"/><path d="M12.46,22l-2.93-.64L6.6,20.67a.73.73,0,0,1-.43-.26A.71.71,0,0,1,6,19.94v-4a.77.77,0,0,1,.17-.47.8.8,0,0,1,.43-.26l4.78-.59,4.79-.6.15.56.15.55a.93.93,0,0,1-.15.52.9.9,0,0,1-.4.37l-2,.5-2,.5,1.62.66,1.63.65,2.27-.64L19.65,17a.78.78,0,0,1,.58.08.73.73,0,0,1,.36.46l.19.77.2.76a.77.77,0,0,1-.08.56.78.78,0,0,1-.46.35l-3.63,1-3.63,1a1.42,1.42,0,0,1-.36,0A1.1,1.1,0,0,1,12.46,22Z"/><polygon points="9 4 7 6 5 8 7 10 9 12 9.7 11.3 10.4 10.6 9.1 9.3 7.8 8 9.1 6.7 10.4 5.4 9.7 4.7 9 4"/><polygon points="15 4 14.3 4.7 13.6 5.4 14.9 6.7 16.2 8 14.9 9.3 13.6 10.6 14.3 11.3 15 12 17 10 19 8 17 6 15 4"/></svg>

  );
};

EosserviceFilled.defaultProps = defaultProps;

export default EosserviceFilled;
