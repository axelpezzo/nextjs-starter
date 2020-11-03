module.exports = {
  images: {
    deviceSizes: [320, 768, 1200],
    iconSizes: [16, 32, 64],
    domains: [],
    path: '/_next/image',
    loader: 'default',
  },
}

const withOptimizedImages = require('next-optimized-images');
 
module.exports = withOptimizedImages({
  /* config for next-optimized-images */
 
  // your config for other plugins or the general next.js here...
});