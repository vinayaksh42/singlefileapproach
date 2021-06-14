
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

function Eosplaylist_playOutlined(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect height="2" width="11" x="3" y="10"/><rect height="2" width="11" x="3" y="6"/><rect height="2" width="7" x="3" y="14"/><polygon points="16,13 16,21 22,17"/></svg>
  );
};

Eosplaylist_playOutlined.defaultProps = defaultProps;

export default Eosplaylist_playOutlined;
