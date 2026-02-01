/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// Check if deploying to Vercel - Vercel sets the VERCEL env variable
const isVercel = process.env.VERCEL === '1';
// Only use basePath for GitHub Pages (production but not Vercel)
const useBasePath = isProd && !isVercel;

const nextConfig = {
  output: 'export', // Enable static HTML export
  basePath: useBasePath ? '/CinnamonWalawwa' : '',
  assetPrefix: useBasePath ? '/CinnamonWalawwa/' : '',
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

