import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		// scss: {
		// 	prependData: `@import './src/scss/global.scss';`
		// }
	}),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					$components: path.resolve('./src/lib/components'),
					$layouts: path.resolve('./src/lib/layouts'),
					$utils: path.resolve('./src/lib/utils'),
					$styles: path.resolve('./src/lib/styles'),
					$stores: path.resolve('./src/lib/stores'),
					$types: path.resolve('./src/types')
				}
			}
		}
	}
};

export default config;
