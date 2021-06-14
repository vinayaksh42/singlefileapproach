
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

function EosinstallingAnimated(props: iconProps) {
  return (
    <svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
	<path className="st0" d="M4,16h4v4H4V16z">
		<animate  accumulate="none" additive="replace" attributeName="opacity" begin=".2" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0">
		</animate>
	</path>
	<path className="st0" d="M10,16h4v4h-4V16z">
		<animate  accumulate="none" additive="replace" attributeName="opacity" begin=".4" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0">
		</animate>
	</path>
	<path className="st0" d="M16,16h4v4h-4V16z">
		<animate  accumulate="none" additive="replace" attributeName="opacity" begin=".6" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0">
		</animate>
	</path>
	<path className="st0" d="M4,10h4v4H4V10z">
		<animate  accumulate="none" additive="replace" attributeName="opacity" begin=".8" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0">
		</animate>
	</path>
	<path className="st0" d="M10,10h4v4h-4V10z">
		<animate  accumulate="none" additive="replace" attributeName="opacity" begin="1" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0">
		</animate>
	</path>
	<path className="st0" d="M16,10h4v4h-4V10z">
		<animate  accumulate="none" additive="replace" attributeName="opacity" begin="1.2" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0">
		</animate>
	</path>
	<path className="st0" d="M4,4h4v4H4V4z">
		<animate  accumulate="none" additive="replace" attributeName="opacity" begin="1.4" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0">
		</animate>
	</path>
	<path className="st0" d="M10,4h4v4h-4V4z">
		<animate  accumulate="none" additive="replace" attributeName="opacity" begin="1.6" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0">
		</animate>
	</path>
	<path className="st0" d="M16,4h4v4h-4V4z">
		<animate  accumulate="none" additive="replace" attributeName="opacity" begin="1.8" calcMode="linear" dur="3s" fill="remove" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0">
		</animate>
	</path>
</svg>

  );
};

EosinstallingAnimated.defaultProps = defaultProps;

export default EosinstallingAnimated;
