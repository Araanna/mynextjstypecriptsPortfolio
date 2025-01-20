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
    config.resolve.alias['@assets'] = path.resolve(__dirname, 'public/assets'); // Make sure this is where your assets are
    config.resolve.alias['@pages'] = path.resolve(__dirname, 'pages'); // Ensure correct path

    // Add rule to handle font files (woff, woff2, etc.)
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000, // Adjust this value based on your file size
          name: 'fonts/[name].[hash:8].[ext]',
        },
      },
    });

    // Return the modified config
    return config;
  },
};

export default nextConfig;
