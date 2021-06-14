
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

function Eospod_securityFilled(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.99335,4.01208h-6.005V2.99774A.99821.99821,0,0,1,7.98706,2h4.00757a.99825.99825,0,0,1,.99872.99774V4.01208ZM12,15.99377H2l2.5-5.49548,2.5-5.49548h5.99341l1.30807,2.87158L15.6095,10.746l-1.80475.80206L12,12.3501v3.64367ZM12,10a2,2,0,1,0-.5858,1.41419A1.99379,1.99379,0,0,0,12,10Zm.08545,6.995H3.99292v1.00451A2.00134,2.00134,0,0,0,5.99524,20h7.23828a7.64894,7.64894,0,0,1-.73615-1.43209A7.19106,7.19106,0,0,1,12.08545,16.99506ZM22,13v3a6.40481,6.40481,0,0,1-1.2825,3.80437A5.776,5.776,0,0,1,17.5,22a5.776,5.776,0,0,1-3.2175-2.19563A6.40481,6.40481,0,0,1,13,16V13l2.25-1,2.25-1,2.25,1Zm-4.5-.905-1.75.7775L14,13.65V16.5h3.5v4.465a4.78755,4.78755,0,0,0,2.34812-1.67813A5.80287,5.80287,0,0,0,21,16.495H17.5v-4.4Z"/></svg>

  );
};

Eospod_securityFilled.defaultProps = defaultProps;

export default Eospod_securityFilled;
