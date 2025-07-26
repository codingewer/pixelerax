/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    dangerouslyAllowSVG: true, // SVG ile <Image> kullanacaksan gerekli
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
