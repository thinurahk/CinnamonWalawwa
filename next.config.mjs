/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// Vercel automatically sets VERCEL=1 and VERCEL_ENV during build
const isVercel = process.env.VERCEL === '1' || process.env.VERCEL_ENV !== undefined;
// Only use basePath for GitHub Pages (production but not Vercel)
const useBasePath = isProd && !isVercel;

const nextConfig = {
  output: 'export', // Enable static HTML export
  basePath: useBasePath ? '/CinnamonWalawwa' : '',
  assetPrefix: useBasePath ? '/CinnamonWalawwa/' : '',
  env: {
    NEXT_PUBLIC_VERCEL_ENV: process.env.VERCEL_ENV,
  },
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

