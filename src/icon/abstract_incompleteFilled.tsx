
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

function Eosabstract_incompleteFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.72,11.01l-4.01-7A1.96776,1.96776,0,0,0,15.98,3H8A1.96777,1.96777,0,0,0,6.27,4.01L4.74,6.68l-.8,1.39L2.26,11.01A2.0325,2.0325,0,0,0,2,12a2.00444,2.00444,0,0,0,.26.99l1.68,2.94.8,1.39,1.53,2.67A1.96777,1.96777,0,0,0,8,21h7.98a1.96776,1.96776,0,0,0,1.73-1.01l4.01-7a2.00444,2.00444,0,0,0,.26-.99A1.95565,1.95565,0,0,0,21.72,11.01Zm-4.38361,5.97351.00556-.00378-.0044.0075ZM20.28,12,17.345,16.97449c-.11835.00885-.23437.02551-.355.02551A4.99424,4.99424,0,0,1,12,12.09753V11.98A5.004,5.004,0,0,0,7,7a2.95969,2.95969,0,0,0-.31.03L7.89,5h8.26l4.14,7Z"/></svg>
  );
};

Eosabstract_incompleteFilled.defaultProps = defaultProps;

export default Eosabstract_incompleteFilled;
