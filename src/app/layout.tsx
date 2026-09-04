import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';
import { HeaderNavigation } from '@/components/organisms/HeaderNavigation';
import { SiteFooter } from '@/components/organisms/SiteFooter';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['500', '600'],
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#20243A',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: '%s | Pangasinan Heritage Showcase',
    default: 'Pangasinan Heritage — Living Culture, Coastlines & Sanctuaries',
  },
  description:
    'A modern Philippine travel editorial discovering the ancient coral islets of Hundred Islands, Cape Bolinao Lighthouse, sacred basilicas, and living coastal heritage of Pangasinan.',
  authors: [{ name: 'Jan Jhared Antolin' }],
  creator: 'Jan Jhared Antolin',
  keywords: [
    'Pangasinan',
    'Philippines',
    'Hundred Islands',
    'Cape Bolinao Lighthouse',
    'Manaoag Basilica',
    'Pangasinan Heritage',
    'Travel Editorial',
    'Philippine Tourism',
  ],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? '/elective4panagsinan' : '');

  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href={`${basePath}/favicon.svg`} type="image/svg+xml" />
      </head>
      <body className="bg-porcelain text-ink font-ui antialiased min-h-screen flex flex-col selection:bg-palm selection:text-porcelain">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-midnight focus:text-porcelain focus:rounded-editorial focus:shadow-subtle"
        >
          Skip to main content
        </a>
        <HeaderNavigation />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
