
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

function Eosdisabled_visibleOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,15c1.95,0,3.76,0.98,4.75,2.5C20.76,19.02,18.95,20,17,20s-3.76-0.98-4.75-2.5C13.24,15.98,15.05,15,17,15z M17,13 c-3.18,0-5.9,1.87-7,4.5c1.1,2.63,3.82,4.5,7,4.5s5.9-1.87,7-4.5C22.9,14.87,20.18,13,17,13z M17,19c-0.83,0-1.5-0.67-1.5-1.5 S16.17,16,17,16s1.5,0.67,1.5,1.5S17.83,19,17,19z M21.99,12.34C22,12.23,22,12.11,22,12c0-5.52-4.48-10-10-10S2,6.48,2,12 c0,5.17,3.93,9.43,8.96,9.95c-0.93-0.73-1.72-1.64-2.32-2.68C5.9,18,4,15.22,4,12c0-1.85,0.63-3.55,1.69-4.9l5.66,5.66 c0.56-0.4,1.17-0.73,1.82-1L7.1,5.69C8.45,4.63,10.15,4,12,4c4.24,0,7.7,3.29,7.98,7.45C20.69,11.67,21.37,11.97,21.99,12.34z"/></svg>
  );
};

Eosdisabled_visibleOutlined.defaultProps = defaultProps;

export default Eosdisabled_visibleOutlined;
