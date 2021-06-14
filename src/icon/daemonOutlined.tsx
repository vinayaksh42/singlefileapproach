
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

function EosdaemonOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5,9a1.49154,1.49154,0,0,0-1.064.42676A1.52184,1.52184,0,0,0,14,10.5a1.468,1.468,0,0,0,.436,1.05042A1.51109,1.51109,0,0,0,15.5,12a1.49566,1.49566,0,0,0,1.05756-.44958A1.47361,1.47361,0,0,0,17,10.5a1.52737,1.52737,0,0,0-.44244-1.07324A1.47606,1.47606,0,0,0,15.5,9Z"/><path d="M8.5,9a1.499,1.499,0,1,0,1.06064.43873A1.49574,1.49574,0,0,0,8.5,9Z"/><path d="M18,2a16.28231,16.28231,0,0,1,.51074,2.1449,5.04081,5.04081,0,0,1-.084,1.56024A8.98677,8.98677,0,0,0,5.57385,5.70453,4.92174,4.92174,0,0,1,5.5108,4.1449,4.90812,4.90812,0,0,1,6,2,9.82127,9.82127,0,0,0,3.4541,4.645a4.99571,4.99571,0,0,0-.128,3.8396,4.85141,4.85141,0,0,0,.2.45538l.01148.02039a9,9,0,1,0,16.92352-.00354L20.47058,8.94a4.85176,4.85176,0,0,0,.20007-.45538A5.05271,5.05271,0,0,0,20.5675,4.645,9.59889,9.59889,0,0,0,18,2ZM12,19a7,7,0,1,1,7-7,7.00794,7.00794,0,0,1-7,7Z"/><path d="M7,14a5.49328,5.49328,0,0,0,5,3,5.49328,5.49328,0,0,0,5-3Z"/></svg>
  );
};

EosdaemonOutlined.defaultProps = defaultProps;

export default EosdaemonOutlined;
