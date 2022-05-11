const withVideos = require('next-videos');
const config = {
  reactStrictMode: true,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['images.unsplash.com'],
  },
};

module.exports = withVideos(config);
