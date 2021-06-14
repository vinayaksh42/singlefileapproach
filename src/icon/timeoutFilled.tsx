
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

function EostimeoutFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.77428,5.21521,6.32573,3.76666A9.99542,9.99542,0,0,1,20.23009,17.671l-1.44531-1.44531A7.9899,7.9899,0,0,0,7.77428,5.21521ZM20.36217,20.36377l-1.27869,1.27875-1.41315-1.41315A9.9948,9.9948,0,0,1,3.76775,6.32678L2.35722,4.91626,3.63591,3.63751l1.291,1.291L6.34337,6.34174,11,11.00159V7h1.5v5.25L17,14.92l-.75,1.23-.254-.1524Zm-4.13654-1.5791-5.79236-5.79236-5.21795-5.218A7.9897,7.9897,0,0,0,16.22563,18.78467Z"/></svg>

  );
};

EostimeoutFilled.defaultProps = defaultProps;

export default EostimeoutFilled;
