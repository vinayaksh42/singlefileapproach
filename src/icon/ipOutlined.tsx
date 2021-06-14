
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

function EosipOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.26,12A8.24293,8.24293,0,0,1,4,10a8.24293,8.24293,0,0,1,.26-2H7.64a16.513,16.513,0,0,0-.14,2,16.51385,16.51385,0,0,0,.14,2H9.66a14.7101,14.7101,0,0,1-.16-2,14.58144,14.58144,0,0,1,.16-2h4.68a14.59092,14.59092,0,0,1,.16,2,14.71971,14.71971,0,0,1-.16,2H16.36a16.51182,16.51182,0,0,0,.14-2,16.511,16.511,0,0,0-.14-2h3.38A8.24047,8.24047,0,0,1,20,10a8.24047,8.24047,0,0,1-.26,2L22,13l0-3A10,10,0,1,0,2,10l0,3ZM18.92,6H15.97a15.65077,15.65077,0,0,0-1.38-3.56A8.02951,8.02951,0,0,1,18.92,6ZM12,2.04A14.08639,14.08639,0,0,1,13.91,6H10.09A14.08623,14.08623,0,0,1,12,2.04Zm-2.59.4A15.64752,15.64752,0,0,0,8.03,6H5.08A7.98674,7.98674,0,0,1,9.41,2.44Z"/><path d="M21,14v8H3V14H21m0-2H3a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2H21a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2Z"/><rect x="7" y="15" width="2" height="6"/><path d="M16,15H12v6h2V19h2a1.47329,1.47329,0,0,0,1.5-1.5v-1A1.47325,1.47325,0,0,0,16,15Zm0,3H14V16h2Z"/></svg>
  );
};

EosipOutlined.defaultProps = defaultProps;

export default EosipOutlined;
