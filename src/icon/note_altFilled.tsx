
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

function Eosnote_altFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,3h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5 C21,3.9,20.1,3,19,3z M12,2.75c0.41,0,0.75,0.34,0.75,0.75S12.41,4.25,12,4.25s-0.75-0.34-0.75-0.75S11.59,2.75,12,2.75z M9.1,17H7 v-2.14l5.96-5.96l2.12,2.12L9.1,17z M16.85,9.27l-1.06,1.06l-2.12-2.12l1.06-1.06c0.2-0.2,0.51-0.2,0.71,0l1.41,1.41 C17.05,8.76,17.05,9.07,16.85,9.27z"/></svg>
  );
};

Eosnote_altFilled.defaultProps = defaultProps;

export default Eosnote_altFilled;
