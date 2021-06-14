
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

function EoscontainerFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,5a1.95767,1.95767,0,0,0,.79565,1.55981L5.50128,9.986H3.99689A1.99685,1.99685,0,0,0,2,11.98291v8.02295a1.9969,1.9969,0,0,0,1.99689,1.99689H19.99628A2.00372,2.00372,0,0,0,22,19.999V11.98291A1.99685,1.99685,0,0,0,20.00311,9.986H18.5119L13.21008,6.555A1.95745,1.95745,0,0,0,14,5a2.03035,2.03035,0,0,0-1-1.72119V2H12V4a1,1,0,1,1-1,1m.99481,1.97449L12,6.975l.0166-.00165L16.67206,9.986H7.34113ZM7,18a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Z"/></svg>
  );
};

EoscontainerFilled.defaultProps = defaultProps;

export default EoscontainerFilled;
