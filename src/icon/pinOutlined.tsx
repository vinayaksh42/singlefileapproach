
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

function EospinOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.67487,6.82922l3.54575,3.53739a5.00389,5.00389,0,0,0,2.8366,1.415l-4.2549,4.24486a4.9412,4.9412,0,0,0-1.4183-2.82991L6.83827,9.65913l2.8366-2.82991M10.384,3.29183l-7.0915,7.07478a1.00171,1.00171,0,0,0,1.4183,1.415h0L5.42,11.07409l3.54575,3.53739a2.99255,2.99255,0,0,1,0,4.24486l1.4183,1.415,4.23363-4.22364L19.5817,21H21V19.585L16.036,14.6327l4.27617-4.26609-1.4183-1.41495h0a3.00966,3.00966,0,0,1-4.2549,0L11.09317,5.41427l.70915-.70748h0a1.00171,1.00171,0,1,0-1.4183-1.415Z"/></svg>
  );
};

EospinOutlined.defaultProps = defaultProps;

export default EospinOutlined;
