import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
   enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
   experimental: {
      ppr: true,
   },
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "i.scdn.co",
            port: "",
            pathname: "/image/**",
         },
      ],
   },
};

export default bundleAnalyzer(nextConfig);
