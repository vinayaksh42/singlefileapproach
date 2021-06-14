
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

function EosmoveFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="22.017 12.008 18.019 8.01 18.017 11.003 13.016 11.003 13.016 6.013 16.009 6.015 12.007 2.013 8.009 6.011 11.003 6.012 11.003 11.003 6.003 11.003 6.002 8.01 2.004 12.008 6.006 16.01 6.004 13.017 11.003 13.017 11.003 18.01 8.009 18.011 12.007 22.01 16.009 18.008 13.016 18.009 13.016 13.017 18.016 13.017 18.015 16.01 22.017 12.008"/></svg>
  );
};

EosmoveFilled.defaultProps = defaultProps;

export default EosmoveFilled;
