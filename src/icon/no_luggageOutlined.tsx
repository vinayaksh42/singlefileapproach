
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

function Eosno_luggageOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,13.17l-1.5-1.5V9H16V13.17z M19.78,22.61l-1.85-1.85C17.65,20.91,17.34,21,17,21c0,0.55-0.45,1-1,1s-1-0.45-1-1H9 c0,0.55-0.45,1-1,1c-0.55,0-1-0.45-1-1c-1.1,0-2-0.9-2-2V8c0-0.05,0.02-0.1,0.02-0.15L1.39,4.22l1.41-1.41l18.38,18.38 L19.78,22.61z M16.17,19l-3.42-3.42V18h-1.5v-3.92L9.5,12.33V18H8v-7.17l-1-1V19H16.17z M12.75,9h-0.92l0.92,0.92V9z M19,8v8.17 l-2-2V8h-6.17L9.84,7.01L9,6.17V6V3c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v3h2C18.1,6,19,6.9,19,8z M10.5,6h3V3.5h-3V6z"/></svg>
  );
};

Eosno_luggageOutlined.defaultProps = defaultProps;

export default Eosno_luggageOutlined;
