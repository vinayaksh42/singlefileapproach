
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

function EosflaskFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} id="EOS_icon" data-name="EOS icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.642,18.45209,19.73079,17h-.00116L15.00048,9.462V3H17.0006V1H6.9994V3H8.99964V9.462L4.27049,17H4.26921L3.358,18.45209A2.31666,2.31666,0,0,0,5.32067,22H18.67933A2.31666,2.31666,0,0,0,20.642,18.45209ZM13.00024,3v7l4.3737,7H6.62618l4.3737-7V3Z"/></svg>
  );
};

EosflaskFilled.defaultProps = defaultProps;

export default EosflaskFilled;
