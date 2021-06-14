
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

function EosapplicationOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1,3V5H23V3a2.00118,2.00118,0,0,0-2-2H3A2.00118,2.00118,0,0,0,1,3ZM4.00669,4.00758a.99917.99917,0,1,1,.99916-.99917A.99919.99919,0,0,1,4.00669,4.00758Zm2.99756-.00092a.99917.99917,0,1,1,.99917-.99916A1.00212,1.00212,0,0,1,7.00425,4.00666Z"/><path d="M1,6V20a2.0006,2.0006,0,0,0,2,2H21a2.00068,2.00068,0,0,0,2-2V6ZM21,20H3V8H21Z"/><polygon points="9 18 9.7 17.3 10.4 16.6 9.1 15.3 7.8 14 9.1 12.7 10.4 11.4 9.7 10.7 9 10 7 12 5 14 7 16 9 18"/><polygon points="13.6 16.6 14.3 17.3 15 18 17 16 19 14 17 12 15 10 14.3 10.7 13.6 11.4 14.9 12.7 16.2 14 14.9 15.3 13.6 16.6"/><polygon points="9 18 9.7 17.3 10.4 16.6 9.1 15.3 7.8 14 9.1 12.7 10.4 11.4 9.7 10.7 9 10 7 12 5 14 7 16 9 18"/><polygon points="13.6 16.6 14.3 17.3 15 18 17 16 19 14 17 12 15 10 14.3 10.7 13.6 11.4 14.9 12.7 16.2 14 14.9 15.3 13.6 16.6"/></svg>
  );
};

EosapplicationOutlined.defaultProps = defaultProps;

export default EosapplicationOutlined;
