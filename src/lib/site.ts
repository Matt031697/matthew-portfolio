export const siteName = 'Matthew Ward';
export const siteEmail = 'matthewmj.ward@gmail.com';
export const siteLinkedIn = 'https://www.linkedin.com/in/matthew-ward-307b08268/';
export const siteLocation = 'Mount Upton, NY';
export const siteAvailability = 'Seeking relocation';
export const siteEmployer = 'New Media Retailer';
export const siteEmployerLocation = 'Norwich, NY';
export const siteEmployerTenure = '2020–Present';

export const careerHighlights = {
	experience: '6+ Years Experience',
	experienceCompact: '6+ Years',
	storefronts: '300+ Storefronts Supported',
	storefrontsCompact: '300+ Storefronts',
	releases: '200+ Theme Updates Shipped',
	releasesCompact: '200+ Updates',
} as const;

export const navItems = [
	{ label: 'Projects', href: '/#projects' },
	{ label: 'About', href: '/#about' },
	{ label: 'Resume', href: '/#resume' },
	{ label: 'Contact', href: `mailto:${siteEmail}` },
] as const;

export const projectLinks = [
	{ label: 'Shopify theme architecture', href: '/projects/shopify-theme-architecture' },
	{ label: 'Bondfire Design Company', href: '/projects/bondfire-design-company' },
	{ label: 'Companion sites', href: '/projects/companion-sites' },
	{ label: 'Shopify accessibility audits', href: '/projects/shopify-accessibility-audits' },
	{ label: 'Graphic design, print & photography', href: '/projects/graphic-print-photography' },
] as const;

export const projectAccents = {
	home: '#3A588D',
	shopify: '#136916',
	bondfire: '#c64b14',
	astro: '#2156a5',
	audits: '#0f6b6b',
	print: '#6d2878',
} as const;
