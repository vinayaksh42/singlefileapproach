
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

function Eoscalendar_view_dayFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z"/></svg>
  );
};

Eoscalendar_view_dayFilled.defaultProps = defaultProps;

export default Eoscalendar_view_dayFilled;
