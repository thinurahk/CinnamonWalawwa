/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static HTML export for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/my-app' : '', // Replace 'my-app' with your repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-app/' : '', // Replace 'my-app' with your repo name
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cinnamonwalawwa.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

