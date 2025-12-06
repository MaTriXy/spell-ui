import { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
	secondaryfill?: string;
	strokewidth?: number;
	title?: string;
}

function Check({fill = 'currentColor', secondaryfill, ...props}: IconProps) {
	secondaryfill = secondaryfill || fill;

	return (
		<svg height="20" width="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={fill}>
		<polyline fill="none" points="4 11 8 15 16 5" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	</g>
</svg>
	);
};

export default Check;