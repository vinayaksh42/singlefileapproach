
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

function EosmasterFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,20H20v2H4V20ZM21,5a1,1,0,0,0-1,1,.89864.89864,0,0,0,.064.3317,1.10437,1.10437,0,0,0,.16656.283L18.11185,8.30734,15.9931,10,14.24042,6.92749,12.48773,3.855a1.045,1.045,0,0,0,.36888-.35287A.94573.94573,0,0,0,13,3a1,1,0,1,0-2,0,.94552.94552,0,0,0,.14329.50187,1.0457,1.0457,0,0,0,.36855.35287L9.757,6.92737,8.00214,10,5.88565,8.30753,3.76917,6.61505a1.10382,1.10382,0,0,0,.16675-.28313A.8989.8989,0,0,0,4,6,1,1,0,1,0,3,7a.14725.14725,0,0,0,.04121-.00735A.21241.21241,0,0,1,3.082,6.98346l.459,5.50827L4,18H20l.459-5.50827.459-5.50827a.21241.21241,0,0,1,.04076.00919A.14725.14725,0,0,0,21,7a1,1,0,1,0,0-2Z"/></svg>

  );
};

EosmasterFilled.defaultProps = defaultProps;

export default EosmasterFilled;
