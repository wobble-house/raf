const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    env: {
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
      },
      images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'www.rossalanford.com',
            port: '80',
            pathname: '/***',
          },
          {
            protocol: 'http',
            hostname: 'rossalanford.com',
            port: '80',
            pathname: '/***',
          },
          {
            protocol: 'http',
            hostname: 'dev.rossalanford.com',
            port: '80',
            pathname: '/***',
          },
          {
            protocol: 'https',
            hostname: 'www.rossalanford.com',
            port: '443',
            pathname: '/***',
          },
          {
            protocol: 'https',
            hostname: 'rossalanford.com',
            port: '443',
            pathname: '/***',
          },
          {
            protocol: 'https',
            hostname: 'dev.rossalanford.com',
            port: '443',
            pathname: '/***',
          },
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; sandbox;",
        minimumCacheTTL: 60,
    },
      typescript: {
        ignoreBuildErrors: true,
      }, 
      webpack(config) {
        config.module.rules.push({
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        })
        config.module.rules.push({
          test: /\.mdx?$/,
          use: [
            {
              loader: '@mdx-js/loader',
              /** @type {import('@mdx-js/loader').Options} */
              options: {/* jsxImportSource: …, otherOptions… */}
            }
          ]
        })
        return config
      },
        // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

module.exports = withMDX(nextConfig)
