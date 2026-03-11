import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// Determine the base URL for meta tags
const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL_ENV !== undefined;
const baseUrl = isVercel 
  ? 'https://cinnamon-walawwa.vercel.app' 
  : isProduction 
    ? 'https://thinurahk.github.io/CinnamonWalawwa'
    : 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Cinnamon Walawwa - Authentic Sri Lankan Cooking Class",
  description: "Discover the real taste of Sri Lanka! Tour a lush spice garden, sip cinnamon tea, and learn to cook traditional dishes with authentic Sri Lankan cooking classes in Dikwella.",
  keywords: ["Sri Lankan cooking class", "Cinnamon plantation", "Dikwella", "Spice garden tour", "Traditional cooking", "Sri Lanka experience"],
  authors: [{ name: "Cinnamon Walawwa" }],
  
  // Open Graph meta tags for social media sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Cinnamon Walawwa',
    title: 'Cinnamon Walawwa - Authentic Sri Lankan Cooking Class',
    description: 'Discover the real taste of Sri Lanka! Tour a lush spice garden, sip cinnamon tea, and learn to cook traditional dishes.',
    images: [
      {
        url: `${baseUrl}/dpimage.png`,
        width: 1200,
        height: 630,
        alt: 'Cinnamon Walawwa Cooking Class',
      },
    ],
  },
  
  // Twitter Card meta tags
  twitter: {
    card: 'summary_large_image',
    title: 'Cinnamon Walawwa - Authentic Sri Lankan Cooking Class',
    description: 'Discover the real taste of Sri Lanka! Tour a lush spice garden and learn traditional cooking.',
    images: [`${baseUrl}/dpimage.png`],
  },
  
  // Favicon and browser icons
  icons: {
    icon: '/dpimage.png?v=2',
    apple: '/dpimage.png?v=2',
    shortcut: '/dpimage.png?v=2',
  },
  
};

// Viewport configuration (moved from metadata)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
