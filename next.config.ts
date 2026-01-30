import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        // This tells Turbo to treat these extensions as static assets
        '*.JPG': ['@next/swc-loader'], 
        '*.jpg': ['@next/swc-loader'],
        '*.png': ['@next/swc-loader'],
      },
    },
  },
};
export default nextConfig;
