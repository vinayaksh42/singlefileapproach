
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

function Eosmobiledata_offOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="16,6.82 17.59,8.41 19,7 15,3 11,7 12.41,8.41 14,6.82 14,11.17 16,13.17"/><polygon points="1.39,4.22 8,10.83 8,17.18 6.41,15.59 5,17 9,21 13,17 11.59,15.59 10,17.18 10,12.83 19.78,22.61 21.19,21.19 2.81,2.81"/></svg>
  );
};

Eosmobiledata_offOutlined.defaultProps = defaultProps;

export default Eosmobiledata_offOutlined;
