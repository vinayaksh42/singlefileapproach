
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

function Eosvirtual_spaceFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"/><circle cx="11.99866" cy="7.49265" r="1.49264"/><circle cx="11.99866" cy="16.49265" r="1.49264"/><circle cx="16.49592" cy="12" r="1.49264"/><circle cx="7.49592" cy="12" r="1.49264"/><circle cx="11.99866" cy="12" r="1"/></svg>
  );
};

Eosvirtual_spaceFilled.defaultProps = defaultProps;

export default Eosvirtual_spaceFilled;
