
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

function EossandboxOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="9.53729" cy="8.98682" r="1"/><path d="M8.03729,10.98682a1,1,0,0,0-1,1,.98411.98411,0,0,0,.48188.83447.97177.97177,0,0,0,.51812.16553,1.00005,1.00005,0,0,0,1-1,1.01586,1.01586,0,0,0-1-1Z"/><path d="M3,19a1.99946,1.99946,0,0,0,2,2H19a2.00591,2.00591,0,0,0,2-2h0V7.244l-2,2V15H15a3.00005,3.00005,0,0,1-6,0H5L4.99,5h9.76874l2-2H5A1.9931,1.9931,0,0,0,3,5Zm2,0V17l2.4223.00031A5.10254,5.10254,0,0,0,8.987,19Zm14,0-3.987-.03339a4.99847,4.99847,0,0,0,1.5647-1.9663L19,17Z"/><path d="M13.9433,7.07147c-.37665-.37658-.88111-.17022-1.15759.31018L11.62152,9.29492a2.07983,2.07983,0,0,1,1.48706,1.15082,1.6183,1.6183,0,0,1,.5921-.129l.01044-.00122a1.70348,1.70348,0,0,1,1.683,1.67L15.41241,12l.37952-.22479.87128-.516c.47619-.28937.68683-.78095.31018-1.15754L16.133,9.26123l5.27362-5.27362L19.99237,2.57343,14.71881,7.847Z"/><circle cx="11.03729" cy="11.98682" r="1"/></svg>
  );
};

EossandboxOutlined.defaultProps = defaultProps;

export default EossandboxOutlined;
