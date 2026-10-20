/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;