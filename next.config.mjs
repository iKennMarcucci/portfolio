/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: ['flagsapi.com'],
   },
   async redirects() {
      return [
         {
            source: '/',
            destination: '/es',
            permanent: true,
         },
      ];
   },
};

export default nextConfig;
