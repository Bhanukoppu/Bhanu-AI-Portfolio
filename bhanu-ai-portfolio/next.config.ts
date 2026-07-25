import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Pins the workspace root to this project, so a stray lockfile
    // elsewhere on your machine (e.g. C:\Users\<you>\package-lock.json)
    // doesn't get picked up instead.
    root: path.join(__dirname),
  },
};

export default nextConfig;
