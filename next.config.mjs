/** @type {import('next').NextConfig} */
// Use explicit flag for GitHub Pages deployment
// Set GITHUB_PAGES=true when building for GitHub Pages
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export', // Enable static HTML export
  basePath: isGitHubPages ? '/CinnamonWalawwa' : '',
  assetPrefix: isGitHubPages ? '/CinnamonWalawwa/' : '',
  env: {
    NEXT_PUBLIC_IS_GITHUB_PAGES: isGitHubPages ? 'true' : 'false',
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

