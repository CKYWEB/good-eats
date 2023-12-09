/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/:path*` // Proxy to Backend
            }
        ];
    },
    async redirects() {
        return [
          {
            source: "/",
            destination: "/home",
            permanent: true,
          },
          {
            source: "/settings",
            destination: "/settings/profile",
            permanent: true,
          },
          {
            source: "/management",
            destination: "/management/users",
            permanent: true,
          },
        ];
      },
};

module.exports = nextConfig;
