
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

function Eossignal_wifi_statusbar_connected_no_internet_4Filled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21l5-5.01V8h5.92C19.97,5.51,16.16,4,12,4z"/><rect height="2" width="2" x="19" y="18"/><rect height="6" width="2" x="19" y="10"/></svg>
  );
};

Eossignal_wifi_statusbar_connected_no_internet_4Filled.defaultProps = defaultProps;

export default Eossignal_wifi_statusbar_connected_no_internet_4Filled;
