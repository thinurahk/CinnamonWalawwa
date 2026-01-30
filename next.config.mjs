/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export', // Enable static HTML export for GitHub Pages
  basePath: isProd ? '/my-app' : '',
  assetPrefix: isProd ? '/my-app/' : '',
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

