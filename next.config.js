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
    }
};

module.exports = nextConfig;
