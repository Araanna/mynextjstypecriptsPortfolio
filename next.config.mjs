import { fileURLToPath } from 'url';
import path from 'path';

// Use import.meta.url to get the directory name
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript build errors
  },
  reactStrictMode: true, // Optional: can help catch issues earlier
  webpack(config) {
    // Adding alias to Webpack configuration
    config.resolve.alias['@'] = path.resolve(__dirname); // Use __dirname here
    config.resolve.alias['@components'] = path.resolve(__dirname, 'app/components');
    config.resolve.alias['@assets'] = path.resolve(__dirname, 'app/assets');
    config.resolve.alias['@pages'] = path.resolve(__dirname, 'pages'); // Ensure correct path

    // Use path.resolve to resolve 'tailwindcss' correctly in ES module
 
    return config;
  },
};

export default nextConfig;
