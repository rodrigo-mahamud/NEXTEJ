import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
   enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
   experimental: {
      turbo: {
         // ...
      },
   },
};

export default bundleAnalyzer(nextConfig);
