
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

function Eoscsv_fileFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M15.9588,20.04552H4.00049V4.00389h6.97827v4.98h4.98V10h2.0517V8.0139L15.9588,5.96221,14.00049,4.00389l-1.99-1.99h-8a1.99728,1.99728,0,0,0-1.99,2l-.01,16a1.99735,1.99735,0,0,0,1.99,2h14.01v-2Z"/>
  <polygon points="21.26 18.014 23.01 12.014 21.51 12.014 20.51 15.444 19.51 12.014 18.01 12.014 19.76 18.014 21.26 18.014"/>
  <path d="M10.0105,12.01392h-3a1.003,1.003,0,0,0-1,1v4a1.003,1.003,0,0,0,1,1h3a1.003,1.003,0,0,0,1-1v-1h-1.5v.5h-2v-3h2v.5h1.5v-1A1.003,1.003,0,0,0,10.0105,12.01392Z"/>
  <path d="M17.0105,13.52086v-1.507h-4a1,1,0,0,0-1,1v1.757a1,1,0,0,0,1,1h2.51v.743h-3.51v1.507h4a1,1,0,0,0,1-1v-1.757a1,1,0,0,0-1-1h-2.51v-.743Z"/>
</svg>

  );
};

Eoscsv_fileFilled.defaultProps = defaultProps;

export default Eoscsv_fileFilled;
