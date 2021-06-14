
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

function Eosmodified_dateFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,3H19V1H17V3H7V1H5V3H4A2,2,0,0,0,2,5V21a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V5A2,2,0,0,0,20,3ZM7.53,21H4V17.47l9.41-9.41,3.53,3.53ZM19.72,8.81l-1.84,1.84L14.35,7.12,16.2,5.28a.92.92,0,0,1,1.32,0l2.2,2.2A.94.94,0,0,1,19.72,8.81Z"/></svg>

  );
};

Eosmodified_dateFilled.defaultProps = defaultProps;

export default Eosmodified_dateFilled;
