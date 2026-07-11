/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    // Windows dev machines here keep corrupting webpack's persistent disk
    // cache (antivirus/OneDrive file locks mid-write), producing
    // "Cannot find module './NNN.js'" crashes. In-memory-only cache in dev
    // avoids the stale/corrupted cache entirely; production builds are
    // unaffected.
    if (dev) {
      config.cache = false
    }
    return config
  },
}

export default nextConfig
