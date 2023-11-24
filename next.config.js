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
                destination: "http://localhost:3000:path*" // Proxy to Backend
            }
        ];
    }
};

module.exports = nextConfig;
