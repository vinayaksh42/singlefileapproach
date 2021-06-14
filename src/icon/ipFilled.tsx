
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

function EosipFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.26,12A8.24293,8.24293,0,0,1,4,10a8.24293,8.24293,0,0,1,.26-2H7.64a16.513,16.513,0,0,0-.14,2,16.51385,16.51385,0,0,0,.14,2H9.66a14.7101,14.7101,0,0,1-.16-2,14.58144,14.58144,0,0,1,.16-2h4.68a14.59092,14.59092,0,0,1,.16,2,14.71971,14.71971,0,0,1-.16,2H16.36a16.51182,16.51182,0,0,0,.14-2,16.511,16.511,0,0,0-.14-2h3.38A8.24047,8.24047,0,0,1,20,10a8.24047,8.24047,0,0,1-.26,2h2.0589A9.99979,9.99979,0,1,0,2.20067,12ZM18.92,6H15.97a15.65077,15.65077,0,0,0-1.38-3.56A8.02951,8.02951,0,0,1,18.92,6ZM12,2.04A14.08639,14.08639,0,0,1,13.91,6H10.09A14.08623,14.08623,0,0,1,12,2.04Zm-2.59.4A15.64752,15.64752,0,0,0,8.03,6H5.08A7.98674,7.98674,0,0,1,9.41,2.44Z"/><rect x="12.74854" y="17.49463" width="2" height="1"/><path d="M20.998,14H3.002A2.002,2.002,0,0,0,1,16.002v5.996A2.002,2.002,0,0,0,3.002,24H20.998A2.002,2.002,0,0,0,23,21.998V16.002A2.002,2.002,0,0,0,20.998,14ZM9.25146,22.00537h-1.5v-6h1.5Zm6.99708-3.51074a1.47326,1.47326,0,0,1-1.5,1.5h-2v2h-1.5v-6h3.5a1.47326,1.47326,0,0,1,1.5,1.5Z"/></svg>
  );
};

EosipFilled.defaultProps = defaultProps;

export default EosipFilled;
