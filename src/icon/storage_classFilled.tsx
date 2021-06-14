
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

function Eosstorage_classFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,4H2V8H22ZM6,7H4V5H6Z"/><path d="M20.6,14.8A2.08754,2.08754,0,0,0,19,14H11.99792A.9979.9979,0,0,0,11,14.99786v6.00422A.99791.99791,0,0,0,11.99792,22H19a1.8163,1.8163,0,0,0,1.6-.8L23,18Z"/><path d="M11.998,12H19a4.07519,4.07519,0,0,1,3,1.38965V10H2v4H9.18372A2.99286,2.99286,0,0,1,11.998,12ZM4,13V11H6v2Z"/><path d="M9,16H2v4H9ZM4,19V17H6v2Z"/></svg>

  );
};

Eosstorage_classFilled.defaultProps = defaultProps;

export default Eosstorage_classFilled;
