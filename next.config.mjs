/** @type {import('next').NextConfig} */
// const withPwa = require('next-pwa');



const nextConfig = {
    reactStrictMode: false,
    output: 'standalone',
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
    
        return config;
      },
    // pwa: {
    //     dest: 'public',
    //     register: true,
    // }
};

export default nextConfig;
