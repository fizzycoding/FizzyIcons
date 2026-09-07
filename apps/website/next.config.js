/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  transpilePackages: ["@fizzyicons/core", "@fizzyicons/react"],
  webpack(config) {
    // Point package imports directly at their TypeScript source so
    // Next.js always compiles fresh code — no stale dist/ cache issues.
    config.resolve.alias = {
      ...config.resolve.alias,
      "@fizzyicons/core": path.resolve(__dirname, "../../packages/core/src/index.ts"),
      "@fizzyicons/react": path.resolve(__dirname, "../../packages/react/src/index.ts"),
    };
    return config;
  },
};

module.exports = nextConfig;
