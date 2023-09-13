/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    experimental: {
      serverActions: true,
    },
    images: {
        domains: ['loremflickr.com'],
    },
    typescript: {
        tsconfigPath: './tsconfig.json',
    },
    env: {
      LIMIT_ITEMS: process.env.LIMIT_ITEMS,
    }
}
   

module.exports = nextConfig
