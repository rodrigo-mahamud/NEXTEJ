import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
   enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
   experimental: {
      ppr: true,
   },
};

export default bundleAnalyzer(nextConfig);
