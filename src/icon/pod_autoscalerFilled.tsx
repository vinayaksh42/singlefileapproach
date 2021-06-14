
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

function Eospod_autoscalerFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="5 11 3.5 11 3.5 8.5 0 12 3.5 15.5 3.5 13 5 13 5 11"/><polygon points="24 12 20.5 8.5 20.5 11 19 11 19 13 20.5 13 20.5 15.5 24 12"/><path d="M6,18.75213V18H18v1.00284A1.998,1.998,0,0,1,15.99958,21H8.00042A1.99626,1.99626,0,0,1,6,19.00284Z"/><path d="M15,3.99178a.98562.98562,0,0,0-.29226-.70128A.99774.99774,0,0,0,14.00213,3H9.99787a.99819.99819,0,0,0-.91946.60575A.98347.98347,0,0,0,9,3.99178V5h6V3.99178Z"/><path d="M18.74835,14.25,17.49664,11.5,16.245,8.75,14.99335,6H8.99994l-1.25,2.75L6.5,11.5,5.25,14.25,4,17H20Zm-4.89551-2.46149A2.00663,2.00663,0,1,1,14.01,11.01,2.0029,2.0029,0,0,1,13.85284,11.78851Z"/></svg>
  );
};

Eospod_autoscalerFilled.defaultProps = defaultProps;

export default Eospod_autoscalerFilled;
