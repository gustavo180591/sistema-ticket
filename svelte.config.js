import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Enable Svelte 5 features
  compilerOptions: {
    runes: true
  },
  
  // Use Vite's preprocessor
  preprocess: [vitePreprocess()],
  
  kit: {
    // Use the Node adapter for server-side rendering
    adapter: adapter({
      out: 'build',
      precompress: true
    })
  },
  
  // Handle warnings
  onwarn: (warning, handler) => {
    // Ignore certain warnings
    const ignoredWarnings = [
      'a11y-click-events-have-key-events',
      'a11y-no-static-element-interactions',
      'a11y-no-noninteractive-element-interactions'
    ];
    
    if (ignoredWarnings.includes(warning.code)) return;
    
    // Let Rollup handle all other warnings normally
    handler(warning);
  }
};

export default config;