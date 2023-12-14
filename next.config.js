/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fjord.dropboxstatic.com",
      },
    ],
  },
};

module.exports = nextConfig;
