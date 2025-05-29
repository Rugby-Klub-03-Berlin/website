/** @type {import('next').NextConfig} */
const headers = require("./headers");
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp4$/i,
      type: "asset/resource",
      generator: {
        filename: "static/videos/[hash][ext][query]",
      },
    });
    return config;
  },
  trailingSlash: true,
};

module.exports = withNextIntl(nextConfig);
