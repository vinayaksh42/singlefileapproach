
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

function EosdaemonFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.23132,9.3657q.12838-.20559.23926-.42565a4.85691,4.85691,0,0,0,.20006-.45543,5.05268,5.05268,0,0,0-.10316-3.83957,4.942,4.942,0,0,0-2.77286-2.63681l-.01529-.00414L17.76405,2a5.03291,5.03291,0,0,1,.44615,4.47575l-.0018.00366-.0018.00367a9.04129,9.04129,0,0,0-2.8062-1.82771,8.975,8.975,0,0,0-6.80407,0A9.0413,9.0413,0,0,0,5.79018,6.48308l-.00183-.00367-.00183-.00366A4.87211,4.87211,0,0,1,5.51083,4.1449,5.20933,5.20933,0,0,1,6.28244,2l-.01531.0041-.01531.00414A5.044,5.044,0,0,0,3.32609,8.48462a4.85424,4.85424,0,0,0,.2.45543q.11034.22016.23926.42565a8.99949,8.99949,0,1,0,16.46592,0Zm-4.73455-.37788a1.498,1.498,0,1,1-1.06077.439A1.49388,1.49388,0,0,1,15.49677,8.98782Zm-6.99682,0a1.498,1.498,0,1,1-1.06078.439A1.49384,1.49384,0,0,1,8.5,8.98782ZM11.99836,18.52A5.43128,5.43128,0,0,1,8.871,17.53448a5.548,5.548,0,0,1-1.98033-2.51632H17.106a5.548,5.548,0,0,1-1.98033,2.51632A5.43128,5.43128,0,0,1,11.99836,18.52Z"/></svg>
  );
};

EosdaemonFilled.defaultProps = defaultProps;

export default EosdaemonFilled;
