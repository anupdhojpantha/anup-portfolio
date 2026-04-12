/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sukrajchaudhary.com',
          },
        ],
        destination: 'https://www.sukraj231.com.np/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.sukrajchaudhary.com',
          },
        ],
        destination: 'https://www.sukraj231.com.np/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
