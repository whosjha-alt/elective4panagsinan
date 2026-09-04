/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'elective4panagsinan';

// If NEXT_PUBLIC_BASE_PATH is defined, use it. In production default to /elective4panagsinan. In local dev default to empty string.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined
  ? process.env.NEXT_PUBLIC_BASE_PATH
  : (isProd ? `/${repoName}` : '');

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
