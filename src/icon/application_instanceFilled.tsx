
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

function Eosapplication_instanceFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1,6V20a2.00061,2.00061,0,0,0,2,2H21a2.00641,2.00641,0,0,0,2-2.00672V6ZM9,19l.0025-4.50208L9,10l7,4.5Z"/><path d="M1.00925,3.00749,1,5H23l-.00908-1.99251A1.99986,1.99986,0,0,0,21,1H3A1.99971,1.99971,0,0,0,1.00925,3.00749ZM4.00669,4.00758a.99917.99917,0,1,1,.99916-.99917A.99919.99919,0,0,1,4.00669,4.00758Zm2.99756-.00092a.99917.99917,0,1,1,.99917-.99916A1.00212,1.00212,0,0,1,7.00425,4.00666Z"/></svg>
  );
};

Eosapplication_instanceFilled.defaultProps = defaultProps;

export default Eosapplication_instanceFilled;
