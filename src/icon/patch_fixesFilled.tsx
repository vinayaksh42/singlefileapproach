
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

function Eospatch_fixesFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.47986,18.70978a3.99559,3.99559,0,0,1-5.163-5.27155L11.93561,16.057l2.12127-2.12134L11.43823,11.317a3.98842,3.98842,0,0,1,5.19989,5.30847l1.9328,1.9328A7.95941,7.95941,0,0,0,20,14,17.11481,17.11481,0,0,0,13.5.67a21.49375,21.49375,0,0,1,.74,4.8A3.47026,3.47026,0,0,1,10.83,9.2,3.63978,3.63978,0,0,1,7.2,5.47l.03-.36A13.76839,13.76839,0,0,0,4,14a7.99909,7.99909,0,0,0,12.43042,6.6604Z"/></svg>

  );
};

Eospatch_fixesFilled.defaultProps = defaultProps;

export default Eospatch_fixesFilled;
