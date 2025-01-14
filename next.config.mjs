import path from 'path';

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript build errors
  },
  reactStrictMode: true, // Optional: can help catch issues earlier
  webpack(config) {
    // Adding alias to Webpack configuration
    config.resolve.alias['@'] = path.resolve('app'); // Modify this path as needed
    config.resolve.alias['@components'] = path.resolve('app/components');
    config.resolve.alias['@assets'] = path.resolve('app/assets');
    config.resolve.alias['@pages'] = path.resolve('pages'); // Added pages alias
    return config;
  }
};

export default nextConfig;
