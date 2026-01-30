import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static HTML export for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/my-app' : '', // Replace 'my-app' with your repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-app/' : '', // Replace 'my-app' with your repo name
  images: {
    unoptimized: true, // Required for static export
  },
};
export default nextConfig;
