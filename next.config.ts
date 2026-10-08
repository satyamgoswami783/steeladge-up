import type { NextConfig } from "next";
import path from "path";
import imageSettings from "./src/data/image-settings.json";

const nextConfig: NextConfig = {
  ...(process.env.STATIC_EXPORT === "true" ? { output: "export" as const, trailingSlash: true } : {}),
  images: {
    loader: "custom",
    loaderFile: "./src/lib/static-image-loader.ts",
    deviceSizes: imageSettings.deviceSizes,
    imageSizes: imageSettings.imageSizes,
  },
  devIndicators: false,
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  // Allow LAN access for dev testing
  allowedDevOrigins: ["192.168.1.24", "localhost", "127.0.0.1"],
};

export default nextConfig;
