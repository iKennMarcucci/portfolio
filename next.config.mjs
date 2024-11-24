/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'flagsapi.com',
            pathname: '**',
         },
      ],
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
