
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

function EosrouteFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} id="route" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M6.016,4.50233A2.9755,2.9755,0,0,0,3.03831,7.48c0,2.23327,2.97769,5.53,2.97769,5.53S8.99368,9.71328,8.99368,7.48A2.9755,2.9755,0,0,0,6.016,4.50233Zm0,4.04114A1.06346,1.06346,0,1,1,7.07946,7.48,1.06385,1.06385,0,0,1,6.016,8.54347Z"/>
  <path d="M21.02412,11.29622V6.99678h-.00055a4.96249,4.96249,0,0,0-.204-1.33392,4.99649,4.99649,0,0,0-9.79547,1.21661v.24707l-.00953.87024v9.022h.00013v.92957h-.005l.00025.04174a2,2,0,0,1-4,0c0-.01257.00348-.02423.00372-.03674H7.01V16.01h-2v2h.002a3.99826,3.99826,0,0,0,7.99646-.0047H13.01v-.98193h.00457V8.99678l.00953-1.8703V6.87953a3.00117,3.00117,0,0,1,6,.12347v4.27533a1.999,1.999,0,1,0,2,.01789Z"/>
</svg>

  );
};

EosrouteFilled.defaultProps = defaultProps;

export default EosrouteFilled;
