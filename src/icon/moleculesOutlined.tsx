
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

function EosmoleculesOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,9a2.95229,2.95229,0,0,0-.36816.03711L19.15411,6.0816A2.994,2.994,0,1,0,14.18372,3H9.81628A2.99338,2.99338,0,1,0,4.84283,6.07794L3.36353,9.03668A2.96284,2.96284,0,0,0,3,9a3,3,0,0,0,0,6,2.96284,2.96284,0,0,0,.36353-.03668l1.4793,2.95874A2.99386,2.99386,0,1,0,9.81628,21h4.36744a2.99329,2.99329,0,1,0,4.97644-3.07428l1.481-2.96191A2.96254,2.96254,0,0,0,21,15a3,3,0,0,0,0-6ZM3,13a1,1,0,1,1,1-1A1,1,0,0,1,3,13ZM17,3a1,1,0,1,1-1,1A1,1,0,0,1,17,3ZM7,3A1,1,0,1,1,6,4,1,1,0,0,1,7,3ZM7,21a1,1,0,1,1,1-1A1,1,0,0,1,7,21Zm10,0a1,1,0,1,1,1-1A1,1,0,0,1,17,21Zm.36816-3.96289A2.95229,2.95229,0,0,0,17,17a2.99121,2.99121,0,0,0-2.81628,2H9.81628A2.99121,2.99121,0,0,0,7,17a2.96284,2.96284,0,0,0-.36353.03668l-1.4793-2.95874a2.98292,2.98292,0,0,0,0-4.15588l1.4793-2.95874A2.96284,2.96284,0,0,0,7,7,2.99121,2.99121,0,0,0,9.81628,5h4.36744a2.83742,2.83742,0,0,0,3.17517,1.96381l1.481,2.96191a2.98285,2.98285,0,0,0,.00605,4.15588ZM21,13a1,1,0,1,1,1-1A1,1,0,0,1,21,13Z"/></svg>
  );
};

EosmoleculesOutlined.defaultProps = defaultProps;

export default EosmoleculesOutlined;
