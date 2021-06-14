
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

function EosnamespaceFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23,11v2c-.85217,0-1,.35065-1,1.31433v4.49719C22,21.32635,20.54016,21.968,18,22V20c1.40363-.03186,2,.15375,2-1.35931V14.3432a3.08829,3.08829,0,0,1,.29431-1.56036A1.71331,1.71331,0,0,1,21.2915,12a1.71317,1.71317,0,0,1-.99719-.7829A3.08814,3.08814,0,0,1,20,9.65674V5.35925C20,3.84625,19.40363,4.03192,18,4V2c2.54016.03192,4,.67365,4,3.18848V9.68567C22,10.64935,22.14783,11,23,11ZM1,11v2c.85217,0,1,.35065,1,1.31433v4.49719C2,21.32635,3.45984,21.968,6,22V20c-1.40363-.03186-2,.15375-2-1.35931V14.3432a3.08829,3.08829,0,0,0-.29431-1.56036A1.71331,1.71331,0,0,0,2.7085,12a1.71317,1.71317,0,0,0,.99719-.7829A3.08814,3.08814,0,0,0,4,9.65674V5.35925C4,3.84625,4.59637,4.03192,6,4V2c-2.54016.03192-4,.67365-4,3.18848V9.68567C2,10.64935,1.85217,11,1,11ZM18,9H6v6H18ZM8,11h8v2H8Z"/></svg>
  );
};

EosnamespaceFilled.defaultProps = defaultProps;

export default EosnamespaceFilled;
