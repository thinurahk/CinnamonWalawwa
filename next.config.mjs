/** @type {import('next').NextConfig} */
// Use explicit flag for GitHub Pages deployment
// Set GITHUB_PAGES=true when building for GitHub Pages
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  // Only enable static export for GitHub Pages.
  // On Vercel, omit this so the image optimization API stays active.
  ...(isGitHubPages && { output: 'export' }),

  basePath: isGitHubPages ? '/CinnamonWalawwa' : '',
  assetPrefix: isGitHubPages ? '/CinnamonWalawwa/' : '',
  env: {
    NEXT_PUBLIC_IS_GITHUB_PAGES: isGitHubPages ? 'true' : 'false',
  },
  images: {
    // Only disable optimization on GitHub Pages static export
    // (static export can't serve /_next/image at runtime)
    ...(isGitHubPages && { unoptimized: true }),

    // Modern formats — Vercel will automatically serve AVIF/WebP to supported browsers
    formats: ['image/avif', 'image/webp'],

    // Responsive breakpoints aligned with Tailwind's sm/md/lg/xl/2xl
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],

    // Quality default for all images (can be overridden per-image)
    // Vercel default is 75; bump slightly for photography
    minimumCacheTTL: 2678400, // 31 days

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cinnamonwalawwa.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
