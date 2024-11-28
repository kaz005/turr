/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          // 必要に応じてパスパターンを追加
          pathname: '/**',
        },
      ],
    },
}

module.exports = nextConfig

