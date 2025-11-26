import React, {SVGProps} from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
	secondaryfill?: string;
	strokewidth?: number;
	title?: string;
}

function RefreshAnticlockwise({fill = 'currentColor', secondaryfill, ...props}: IconProps) {
	secondaryfill = secondaryfill || fill;

	return (
		<svg height="20" width="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={fill}>
		<polygon fill={fill} points="4.367 3.044 3.771 6.798 7.516 6.145 4.367 3.044" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<polygon fill={secondaryfill} points="15.633 16.956 16.229 13.202 12.484 13.855 15.633 16.956" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="m5.101,5c1.263-1.237,2.992-2,4.899-2,3.866,0,7,3.134,7,7" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="m14.899,15c-1.263,1.237-2.992,2-4.899,2-3.866,0-7-3.134-7-7" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	</g>
</svg>
	);
};

export default RefreshAnticlockwise;