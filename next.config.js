/** @type {import('next').NextConfig} */
const headers = require("./headers");

const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers,
      },
    ];
  },
};

module.exports = nextConfig;
