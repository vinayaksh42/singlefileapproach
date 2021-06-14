
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

function EosnetworkFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.00001 24.00001"><path d="M12,4a8,8,0,1,0,8,8A8.0029,8.0029,0,0,0,12,4ZM6,12a5.99707,5.99707,0,0,1,.10486-1.09515L9.6,14.4V15.2a1.60475,1.60475,0,0,0,1.6,1.6v1.14032A6.00426,6.00426,0,0,1,6,12Zm9.2,3.2h-.8V12.8a.80238.80238,0,0,0-.8-.8H8.8V10.4h1.6a.80233.80233,0,0,0,.8-.8V8h1.6a1.60052,1.60052,0,0,0,1.5899-1.50048,5.9854,5.9854,0,0,1,2.13678,9.42663A1.57091,1.57091,0,0,0,15.2,15.2ZM13,1a1,1,0,1,1-1-1A1,1,0,0,1,13,1Zm5,1a1,1,0,1,1-1-1A1,1,0,0,1,18,2Zm4,4a1,1,0,1,1-1-1A1,1,0,0,1,22,6Zm2,6a1,1,0,1,1-1-1A1,1,0,0,1,24,12Zm-2,6a1,1,0,1,1-1-1A1,1,0,0,1,22,18Zm-4,4a1,1,0,1,1-1-1A1,1,0,0,1,18,22Zm-5,1a1,1,0,1,1-1-1A1,1,0,0,1,13,23ZM8,22a1,1,0,1,1-1-1A1,1,0,0,1,8,22ZM4,18a1,1,0,1,1-1-1A1,1,0,0,1,4,18ZM2,12a1,1,0,1,1-1-1A1,1,0,0,1,2,12ZM4,6A1,1,0,1,1,3,5,1,1,0,0,1,4,6ZM8,2A1,1,0,1,1,7,1,1,1,0,0,1,8,2Z"/></svg>

  );
};

EosnetworkFilled.defaultProps = defaultProps;

export default EosnetworkFilled;
