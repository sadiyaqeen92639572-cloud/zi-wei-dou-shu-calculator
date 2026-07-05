import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // matches canonical URLs (/page/) used throughout — avoids a 308 redirect hop
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
