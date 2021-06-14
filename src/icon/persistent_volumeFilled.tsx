
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

function Eospersistent_volumeFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M20,1H10A2.00073,2.00073,0,0,0,8,3V13.3685a6.00088,6.00088,0,0,1,.98865.4549A5.98325,5.98325,0,0,1,17.65036,21H20a2.00072,2.00072,0,0,0,2-2V3A2.00073,2.00073,0,0,0,20,1ZM9,3a1,1,0,1,1,1,1A1,1,0,0,1,9,3Zm6,10a4.97273,4.97273,0,0,1-2-.42211V10H10.42209A4.99716,4.99716,0,1,1,15,13Zm5,7a1,1,0,1,1,1-1A1,1,0,0,1,20,20ZM20,4a1,1,0,1,1,1-1A1,1,0,0,1,20,4Z"/>
  <path d="M12,23a3.97338,3.97338,0,0,1-3-1.37951l-.0003.0003a3.96719,3.96719,0,0,1-1-2.61767L8,19a2,2,0,1,0-2,2,1.92818,1.92818,0,0,0,.78992-.17517,5.94912,5.94912,0,0,0,.92688,1.76514A3.83438,3.83438,0,0,1,6,23a4.00006,4.00006,0,1,1,3-6.62048l.00031-.0003a3.96717,3.96717,0,0,1,1,2.61767L10,19a2,2,0,1,0,2-2,1.92819,1.92819,0,0,0-.79089.17572,5.94927,5.94927,0,0,0-.92664-1.76538A3.83417,3.83417,0,0,1,12,15a4,4,0,0,1,0,8Z"/>
  <circle cx="15" cy="8" r="2"/>
</svg>

  );
};

Eospersistent_volumeFilled.defaultProps = defaultProps;

export default Eospersistent_volumeFilled;
