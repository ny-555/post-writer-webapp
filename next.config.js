// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

// next.config.js
import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true };

export default withContentlayer(nextConfig);
