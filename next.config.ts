import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverActions: {
    allowedOrigins: ['alfarizkizhafirlaw.netlify.app', '*.netlify.app']
  }
};

export default nextConfig;
