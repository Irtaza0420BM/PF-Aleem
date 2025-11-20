/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Removed ignoreBuildErrors - fix actual TypeScript errors instead
    // ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
