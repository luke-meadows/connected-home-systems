module.exports = {
  reactStrictMode: true,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
const withVideos = require('next-videos');

module.exports = withVideos();
