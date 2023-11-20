/** @type {import('next').NextConfig} */
const path = require("path");
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://good-eats-eight-api.vercel.app"
    : "http://localhost:3001";
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `${baseUrl}/api/:path*` // Proxy to Backend
            }
        ];
    }
};

module.exports = nextConfig;
