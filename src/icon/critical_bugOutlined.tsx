
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

function Eoscritical_bugOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="11" y="15" width="2" height="2"/><rect x="11" y="9" width="2" height="5"/><path d="M20,8H17.19a5.9847,5.9847,0,0,0-1.82-1.96L17,4.41,15.59,3,13.42,5.17A6.06615,6.06615,0,0,0,12,5a5.91855,5.91855,0,0,0-1.41.17L8.41,3,7,4.41,8.62,6.04A6.06213,6.06213,0,0,0,6.81,8H4v2H6.09A6.63061,6.63061,0,0,0,6,11v1H4v2H6v1a6.632,6.632,0,0,0,.09,1H4v2H6.81a5.98935,5.98935,0,0,0,10.38,0H20V16H17.91A6.632,6.632,0,0,0,18,15V14h2V12H18V11a6.63061,6.63061,0,0,0-.09-1H20Zm-4,4v3a4.26044,4.26044,0,0,1-.07.7l-.1.65-.37.65a3.99293,3.99293,0,0,1-6.92,0l-.37-.64-.1-.65A4.2713,4.2713,0,0,1,8,15V11a4.05253,4.05253,0,0,1,.07-.7l.1-.65L8.54,9A4.09991,4.09991,0,0,1,9.75,7.69l.57-.39.74-.18A3.78573,3.78573,0,0,1,12,7a3.86454,3.86454,0,0,1,.95.12l.68.16.61.42a3.89422,3.89422,0,0,1,1.21,1.31l.38.65.1.65A4.03771,4.03771,0,0,1,16,11Z"/></svg>
  );
};

Eoscritical_bugOutlined.defaultProps = defaultProps;

export default Eoscritical_bugOutlined;
