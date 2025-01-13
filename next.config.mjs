/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript build errors
  },
  reactStrictMode: true, // Optional: can help catch issues earlier
  webpack(config) {
    // Adding alias to Webpack configuration
    config.resolve.alias['@'] = path.resolve(__dirname, 'src'); // Modify this path as needed
    config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components');
    config.resolve.alias['@assets'] = path.resolve(__dirname, 'src/assets');
    config.resolve.alias['@pages'] = path.resolve(__dirname, 'src/pages'); // Added pages alias
    return config;
  }
};

export default nextConfig;
