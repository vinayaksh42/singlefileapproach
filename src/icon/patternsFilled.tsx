
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

function EospatternsFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <circle cx="4.02031" cy="4.01495" r="3"/>
  <path d="M15.03032,12.025a2.99122,2.99122,0,0,0-2-2.81629V6.82812A2.98973,2.98973,0,0,0,14.8366,5.015H17.204a2.98925,2.98925,0,0,0,1.81628,1.81628V9.21178a3.00124,3.00124,0,1,0,2-.00622V6.83123A2.99289,2.99289,0,1,0,17.204,3.01495H14.8366a2.99284,2.99284,0,1,0-3.80628,3.81939V9.20867a2.98287,2.98287,0,0,0,0,5.63257v2.37433a2.98835,2.98835,0,0,0-1.82757,1.82361H6.83788a2.98883,2.98883,0,0,0-1.81757-1.8205V14.84435a2.9988,2.9988,0,1,0-2-.00622v2.38055a2.99293,2.99293,0,1,0,3.815,3.8205h2.37a2.993,2.993,0,1,0,3.825-3.81739V14.84124A2.99122,2.99122,0,0,0,15.03032,12.025Z"/>
  <circle cx="20.02031" cy="20.03497" r="3"/>
</svg>

  );
};

EospatternsFilled.defaultProps = defaultProps;

export default EospatternsFilled;
