import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // Output directory for built files
      pages: 'build',
      assets: 'build',
      
      // Fallback page for client-side routing
      fallback: '404.html',
      
      // Don't precompress files (GitHub Pages handles this)
      precompress: false,
      
      // Fail build if routes aren't prerendered
      strict: true
    }),

    // Important for GitHub Project Pages
    paths: {
      base: process.env.BASE_PATH || ''
    }
  }
};

export default config;
