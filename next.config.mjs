import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript build errors
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
  // Add environment variable configuration
  env: {
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  },
  // Optional: Configure images domains if using next/image with Cloudinary
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname);
    config.resolve.alias["@components"] = path.resolve(__dirname, "app/components");
    config.resolve.alias["@assets"] = path.resolve(__dirname, "public/assets");
    config.resolve.alias["@pages"] = path.resolve(__dirname, "pages");

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[hash:8].[ext]",
        },
      },
    });

    return config;
  },
};

export default nextConfig;