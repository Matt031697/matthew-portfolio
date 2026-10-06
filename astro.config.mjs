// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://matthew-ward-portfolio.netlify.app',
	// The whole stylesheet is ~40 KB, so inline it and skip a render-blocking request.
	build: { inlineStylesheets: 'always' },
	integrations: [
		sitemap({
			filter: (page) => !page.endsWith('/404') && !page.endsWith('/404/'),
		}),
	],
	redirects: {
		'/projects/ai-assisted-websites': '/projects/companion-sites',
	},
});
