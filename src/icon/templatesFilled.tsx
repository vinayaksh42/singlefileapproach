
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

function EostemplatesFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,2H5A2.005,2.005,0,0,0,3,4V20a2.005,2.005,0,0,0,2,2H19a2.005,2.005,0,0,0,2-2V4A2.005,2.005,0,0,0,19,2Zm0,11.15167V18.848L14,16ZM12,14.846,7,12H17ZM5,4H19V6H5ZM5,8h8v2H5Zm5,8L5,18.84833V13.14386Zm2,1.14978L17,20H7Z"/></svg>
  );
};

EostemplatesFilled.defaultProps = defaultProps;

export default EostemplatesFilled;
