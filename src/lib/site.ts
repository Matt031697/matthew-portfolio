export const siteEmail = 'matthewmj.ward@gmail.com';
export const siteLinkedIn = 'https://www.linkedin.com/in/matthew-ward-307b08268/';
export const siteLocation = 'Mount Upton, NY';
export const siteAvailability = 'Open to relocation';

export const careerHighlights = {
	experience: '6+ Years Experience',
	storefronts: '300+ Shopify Storefronts Supported',
	releases: '120+ Production Releases Shipped',
} as const;

export const navItems = [
	{ label: 'Projects', href: '/#projects' },
	{ label: 'About', href: '/#about' },
	{ label: 'Contact', href: `mailto:${siteEmail}` },
] as const;

export const projectAccents = {
	home: '#3c45d4',
	shopify: '#136916',
	bondfire: '#c64b14',
	astro: '#2156a5',
	audits: '#0f6b6b',
	print: '#6d2878',
} as const;
