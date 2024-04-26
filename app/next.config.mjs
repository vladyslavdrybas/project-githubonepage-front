const PUBLIC_URL = process.env.PUBLIC_URL ?? process.env.NEXT_PUBLIC_URL ?? '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: PUBLIC_URL,
  output: 'export',
  trailingSlash: true,
  distDir: 'build',
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
