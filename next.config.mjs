import path from 'path';

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript build errors
  },
  reactStrictMode: true, // Optional: can help catch issues earlier
  webpack(config) {
    // Adding alias to Webpack configuration
    config.resolve.alias['@'] = path.resolve('src'); // Modify this path as needed
    config.resolve.alias['@components'] = path.resolve('src/components');
    config.resolve.alias['@assets'] = path.resolve('src/assets');
    config.resolve.alias['@pages'] = path.resolve('src/pages'); // Added pages alias
    return config;
  }
};

export default nextConfig;
